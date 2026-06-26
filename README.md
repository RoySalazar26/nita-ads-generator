# 🍔 Meta Ads Generator Pro - Nita

**Sistema automático que genera TODO en 1 click:**
- 📸 **Imágenes IA** (Replicate)
- 📝 **Copies optimizados** (Claude)
- ✅ **Análisis Meta Ads** (Políticas actuales)

---

## 🎯 ¿Cómo funciona?

1. **Subes tu imagen** de la hamburguesa/hot dog
2. **Clickeas 1 botón** "Generar TODO"
3. **Esperas 1-2 minutos**
4. **Recibes todo listo:**
   - 3-5 imágenes IA de alta conversión
   - 7 copies diferentes optimizados
   - Análisis si cumple con Meta Ads
5. **Copias y pegas en Meta Ads Manager** 🎉

---

## 📋 Requisitos

Necesitas 3 cosas (TODAS GRATIS):

1. **Cuenta Anthropic** (ya tienes con Plan Pro ✅)
2. **Cuenta Replicate** (gratis, para generar imágenes)
3. **Vercel** (gratis, para hostear el sistema)

---

## 🚀 Instalación Paso a Paso (15 minutos)

### Paso 1: Replicate (2 minutos)

1. Ve a **https://replicate.com**
2. Click en **"Sign up"** → Regístrate (gratis)
3. Verifica tu email
4. Una vez adentro, ve a **"Account"** (arriba a la derecha)
5. Click en **"API Tokens"**
6. **Copia tu token** (empieza con `r8_`)
   ```
   r8_abc123def456...
   ```
7. **Guárdalo en un archivo de texto** (lo necesitarás en unos minutos)

---

### Paso 2: GitHub (3 minutos)

1. Ve a **https://github.com**
2. Si no tienes cuenta, regístrate (es gratis)
3. Si ya tienes, inicia sesión
4. Ve a **https://github.com/new** (crear nuevo repositorio)
5. **Nombre del repositorio:** `nita-ads-generator`
6. Click en **"Create repository"**

---

### Paso 3: Subir archivos a GitHub (3 minutos)

En tu nuevo repositorio:

1. Click en **"Add file"** → **"Create new file"**
2. En el nombre: `package.json`
3. Copia y pega el contenido de `package.json` (que descargaste)
4. Click en **"Commit changes"**

**Repite para:**
- `vercel.json` (copia su contenido)
- `api/generate.js` (crea carpeta `api` primero)
- `public/index.html` (crea carpeta `public`, pega contenido del HTML)

---

### Paso 4: Vercel (5 minutos)

1. Ve a **https://vercel.com**
2. Click en **"Sign up"** → Regístrate con GitHub
3. Una vez dentro, click en **"New Project"**
4. Busca tu repositorio **`nita-ads-generator`**
5. Click en **"Import"**
6. En **"Environment Variables"**, agrega:
   - **Nombre:** `ANTHROPIC_API_KEY`
   - **Valor:** Tu API key de Anthropic (con Plan Pro ya tienes)
7. Click en **"Deploy"**
8. **Espera 2 minutos** a que termine

**Cuando termine, Vercel te dará una URL tipo:**
```
https://nita-ads-generator.vercel.app
```

**GUARDATE ESA URL** — es tu sistema en línea 🎉

---

## 🎬 Cómo usarlo (en vivo)

1. **Abre tu URL en el navegador:**
   ```
   https://nita-ads-generator.vercel.app
   ```

2. **Llena el formulario:**
   - Sube imagen de tu hamburguesa
   - Selecciona tipo (Hamburguesa, Hot Dog, etc.)
   - Describe el producto
   - Escribe audiencia (jóvenes, Marinilla, etc.)
   - Selecciona CTA (Pedir ahora, Ver menú, etc.)

3. **Pega tu Replicate Token** (el que guardaste en Paso 1)

4. **Clickea "Generar TODO"**

5. **Espera 1-2 minutos** (está generando imágenes)

6. **¡Listo!** Recibes:
   - 📸 Imágenes descargables
   - 📝 7 Copies para elegir
   - ✅ Análisis Meta Ads

---

## 💡 Próximos pasos

### Después de generar:

1. **Descarga las imágenes** (click en cada una)
2. **Copia los copies que te gusten** (copy/paste)
3. **Revisa el análisis** (dice si está OK para Meta)
4. **Ve a Meta Ads Manager:**
   - Nueva campaña
   - Pega el copy
   - Sube la imagen
   - Configura audiencia
   - **¡Publica!** 🎉

---

## 🔧 Troubleshooting

### "Error: Replicate token inválido"
→ Verifica que copiaste TODO el token sin espacios

### "Las imágenes tardan mucho"
→ Es normal, Replicate tarda 1-2 minutos por imagen

### "Error de API Claude"
→ Asegúrate de que tu API key de Anthropic esté configurada en Vercel

### "No funciona nada"
→ Espera a que Vercel termine de deployar (2-3 minutos máximo)

---

## 🎯 Tips Pro

**Para mejores resultados:**

1. **Buena foto:** Sube una imagen clara, bien iluminada de tu producto
2. **Descripción detallada:** Ej: "Hamburguesa gourmet con queso artesanal, $18.000, disponible viernes-domingo"
3. **Audiencia específica:** No solo "Marinilla" — agrega "jóvenes 18-30, estudiantes"
4. **Prueba varios copies:** No siempre funciona el primero — Meta da más conversión con variation

---

## 💰 Costos (CASI TODOS GRATIS)

| Servicio | Costo | Notas |
|----------|-------|-------|
| Replicate | **GRATIS** (primeros créditos) | Después $0.01-0.05 por imagen |
| Vercel | **GRATIS** | Hosting ilimitado |
| Claude API | **GRATIS con Plan Pro** ✅ | Ya tienes acceso |
| **TOTAL** | **$0** | Completamente automatizado |

---

## 📞 Soporte

Si algo no funciona:
1. Verifica que todos tus tokens estén bien copiados
2. Revisa que hayas agregado la API key en Vercel
3. Espera a que Vercel termine el deploy
4. Recarga la página (Ctrl + F5)

---

**¡Listo! Tu sistema de Meta Ads automático está vivo.** 🍔🚀

Cada vez que necesites crear una campaña:
1. Abre tu URL en favoritos
2. Sube imagen
3. 1 click
4. TODO automático

**Ahorra 5 horas/mes en diseño + copywriting + análisis.**

---

**¿Necesitas ayuda? Avísame en qué paso estás atascado.** 💪
