// api/generate.js - Backend para Vercel

const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Función para generar imágenes con Replicate
async function generateImages(imageDescription, replicateToken) {
  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${replicateToken}`,
    },
    body: JSON.stringify({
      version:
        "39ed52f2a60c3b5df911e6894ed38d9189c1a3cadc51fc25d873b58eb9176e11",
      input: {
        prompt: imageDescription,
        num_outputs: 1,
        aspect_ratio: "1:1",
      },
    }),
  });

  const prediction = await response.json();

  let completed = false;
  let attempts = 0;
  while (!completed && attempts < 30) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const checkResponse = await fetch(
      `https://api.replicate.com/v1/predictions/${prediction.id}`,
      {
        headers: {
          Authorization: `Token ${replicateToken}`,
        },
      }
    );
    const checkData = await checkResponse.json();
    if (checkData.status === "succeeded") {
      return checkData.output[0];
    }
    if (checkData.status === "failed") {
      throw new Error("Image generation failed");
    }
    attempts++;
  }

  throw new Error("Image generation timeout");
}

async function generateCopies(productType, description, cta) {
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: `Eres experto en copywriting para Meta Ads - Restaurantes.

GENERA 7 COPIES DE ALTA CONVERSIÓN PARA NITA

PRODUCTO: ${productType}
DESCRIPCIÓN: ${description}
CTA: ${cta}

FORMATO: Cada copy debe:
- Ser diferente en tono
- Máx 120 caracteres
- Incluir urgencia/emoción
- Adaptado a Meta Ads

Responde SOLO con los 7 copies, numerados.`,
      },
    ],
  });

  return message.content[0].text;
}

async function analyzeMeta(copy, productDescription) {
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 800,
    messages: [
      {
        role: "user",
        content: `ANALIZA ESTE COPY PARA META ADS 2026

COPY: "${copy}"
PRODUCTO: ${productDescription}

VERIFICA:
1. ¿Cumple políticas Meta?
2. Palabras peligrosas/prohibidas
3. Cambios necesarios

RESPONDE EN JSON:
{
  "estado": "✅ Aprobado / ⚠️ Revisar / ❌ Rechazado",
  "problemas": ["..."],
  "recomendaciones": "...",
  "copyMejorado": "..."
}`,
      },
    ],
  });

  return message.content[0].text;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      productType,
      description,
      audience,
      cta,
      replicateToken,
      imageBase64,
    } = req.body;

    if (!replicateToken) {
      return res.status(400).json({ error: "Replicate token required" });
    }

    const imagePromptsMessage = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1500,
      messages: [
        {
          role: "user",
          content: `CREA 5 PROMPTS PARA GENERAR IMÁGENES IA - META ADS

PRODUCTO: ${productType}
DESCRIPCIÓN: ${description}
AUDIENCIA: ${audience}

Cada prompt debe:
- Ser específico y detallado
- Lenguaje para Flux/DALL-E
- Colores vibrantes
- Comida apetitosa
- Sin texto en imagen
- Alta conversión

Responde SOLO con 5 prompts numerados, sin explicaciones.`,
        },
      ],
    });

    const imagePrompts = imagePromptsMessage.content[0].text.split("\n").filter(
      (line) => line.trim().match(/^\d+\./)
    );

    const imageUrls = [];
    for (let i = 0; i < Math.min(3, imagePrompts.length); i++) {
      try {
        const prompt = imagePrompts[i]
          .replace(/^\d+\.\s*/, "")
          .trim();
        const imageUrl = await generateImages(prompt, replicateToken);
        imageUrls.push({
          url: imageUrl,
          prompt: prompt,
        });
      } catch (error) {
        console.error(`Error generating image ${i}:`, error);
      }
    }

    const copies = await generateCopies(productType, description, cta);

    const copiesArray = copies.split("\n").filter((line) => line.trim());
    const analysis = await analyzeMeta(
      copiesArray[0] || copies,
      description
    );

    res.status(200).json({
      success: true,
      images: imageUrls,
      copies: copies,
      analysis: analysis,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: error.message || "Generation failed",
    });
  }
}
