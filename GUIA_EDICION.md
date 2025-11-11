# 📝 GUÍA COMPLETA DE EDICIÓN - PancitoGames Website

Esta guía te ayudará a editar todos los textos de la web de forma fácil y segura.

---

## 🎯 REGLA DE ORO

**✅ CAMBIA:** El texto que está entre `>` y `<`  
**❌ NO TOQUES:** Las palabras como `className`, `href`, `div`, `{`, `}`, etc.

---

## 🔍 CÓMO BUSCAR Y CAMBIAR TEXTOS

### **Método Rápido:**
1. **Ctrl+Shift+F** en Cursor (buscar en todos los archivos)
2. Escribe el texto que quieres cambiar
3. Te mostrará en qué archivo está
4. Haz doble clic para abrir ese archivo
5. Cambia el texto
6. **Ctrl+S** para guardar
7. La página se actualiza automáticamente

---

## 📂 ARCHIVOS Y QUÉ PUEDES CAMBIAR EN CADA UNO

---

### 🏠 **HOME PAGE** (`app/page.tsx`)

#### **HERO SECTION (Sección Principal)**

**LÍNEA ~13:** Título principal
```tsx
<h1>Creating Memorable Gaming Experiences</h1>
```
**Cambia a:** Lo que quieras como título

---

**LÍNEA ~16:** Subtítulo
```tsx
<p>PancitoGames develops educational and entertaining mobile games...</p>
```
**Cambia a:** Tu descripción

---

**LÍNEA ~19-26:** Botones
```tsx
Discover Our Games
About Us
```
**Cambia a:** El texto que quieras en los botones

---

#### **FEATURES SECTION (Características)**

**LÍNEA ~40:** Título de la sección
```tsx
<h2>Why Choose PancitoGames</h2>
```

**LÍNEA ~45-88:** Las 4 características
Busca estas líneas y cambia:
- **Quality Games** → Cambia título y descripción
- **Cultural Content** → Cambia título y descripción
- **Fun Learning** → Cambia título y descripción
- **Careful Design** → Cambia título y descripción

**EJEMPLO:**
```tsx
<h3>Quality Games</h3>
<p>We develop polished and well-designed experiences...</p>
```

---

#### **GAMES SHOWCASE (Muestra de Juegos)**

**LÍNEA ~95:** Título
```tsx
<h2>Our Games</h2>
```

**LÍNEA ~107:** Título Memory History
```tsx
<h3>Memory History</h3>
```

**LÍNEA ~108:** Tagline
```tsx
<p>"Discover Venezuela, one card at a time"</p>
```

**LÍNEA ~111:** Descripción
```tsx
<p>A memory game celebrating Venezuelan history and culture...</p>
```

---

### 🎮 **MEMORY HISTORY PAGE** (`app/memory-history/page.tsx`)

#### **HERO**

**LÍNEA ~22:** Título
```tsx
<h1>Memory History</h1>
```

**LÍNEA ~25:** Subtítulo
```tsx
<p>Discover the History of Venezuela</p>
```

**LÍNEA ~28:** Descripción
```tsx
<p>A journey through time where each revealed pair unlocks...</p>
```

---

#### **ABOUT THE GAME**

**LÍNEA ~42:** Título
```tsx
<h2>About the Game</h2>
```

**LÍNEA ~45-52:** Descripción completa del juego

---

#### **FEATURES (6 Características)**

**LÍNEA ~59:** Título general
```tsx
<h2>Features</h2>
```

**LÍNEA ~63-119:** Las 6 características:
1. 55 Historical Collectibles
2. 81 Challenging Levels
3. Educational Test System
4. Bilingual: Spanish & English
5. No Intrusive Ads
6. Careful Design

**Para cada una cambia:**
- El emoji (línea con `<div>🔥</div>`)
- El título (`<h3>`)
- La descripción (`<p>`)

---

### ℹ️ **ABOUT PAGE** (`app/about/page.tsx`)

#### **OUR STORY**

**LÍNEA ~24:** Título
```tsx
<h2>Our Story</h2>
```

**LÍNEA ~25-36:** Los 3 párrafos de historia

---

#### **MISSION, VISION, VALUES**

**LÍNEA ~45-81:** Los 3 bloques

**MISIÓN (LÍNEA ~49):**
```tsx
<h3>Our Mission</h3>
<p>To create memorable gaming experiences that educate...</p>
```

**VISIÓN (LÍNEA ~58):**
```tsx
<h3>Our Vision</h3>
<p>To be the reference studio for cultural educational games...</p>
```

**VALORES (LÍNEA ~67):**
```tsx
<h3>Our Values</h3>
<ul>
  <li>🎯 Quality over quantity</li>
  <li>📚 Education through entertainment</li>
  <li>🌎 Respect for cultural diversity</li>
  <li>❤️ Passion in every project</li>
</ul>
```

---

#### **WHAT WE DO**

**LÍNEA ~90:** Título
```tsx
<h2>What We Do</h2>
```

**LÍNEA ~93-124:** Los 3 bloques:
1. Educational Mobile Games
2. Cultural Preservation
3. Quality Design

---

### 📧 **CONTACT PAGE** (`app/contact/page.tsx`)

**LÍNEA ~39:** Título principal
```tsx
<h1>Contact Us</h1>
```

**LÍNEA ~40:** Subtítulo
```tsx
<p>Have questions, suggestions, or just want to say hello?...</p>
```

**LÍNEA ~50:** Título del formulario
```tsx
<h2>Send us a Message</h2>
```

**LÍNEA ~56-97:** Labels del formulario:
- Name
- Email
- Subject
- Message

**LÍNEA ~128:** Título de información
```tsx
<h2>Get in Touch</h2>
```

---

### 🔒 **PRIVACY PAGE** (`app/privacy/page.tsx`)

**TODO EL CONTENIDO** está en este archivo.

Hay **DOS VERSIONES** del mismo texto:
- **LÍNEA 16-68:** Versión en INGLÉS
- **LÍNEA 73-125:** Versión en ESPAÑOL

Cambia ambas versiones para mantener consistencia.

---

### ⚖️ **TERMS PAGE** (`app/terms/page.tsx`)

Similar a Privacy:
- **LÍNEA 16-125:** Versión en INGLÉS
- **LÍNEA 130-240:** Versión en ESPAÑOL

---

## 🌐 CAMBIO DE IDIOMA (NUEVO)

Ahora tienes un **botón de idioma** en el navbar (arriba a la derecha).

Para agregar traducciones a tus páginas, usa este patrón:

### **EJEMPLO EN HOME PAGE:**

```tsx
'use client';
import { useLanguage } from './components/LanguageSwitcher';

export default function Home() {
  const language = useLanguage();

  return (
    <h1>
      {language === 'en' 
        ? 'Creating Memorable Gaming Experiences'
        : 'Creando Experiencias de Juego Memorables'
      }
    </h1>
  );
}
```

**Explicación:**
- `const language = useLanguage();` → Detecta el idioma actual
- `{language === 'en' ? 'English text' : 'Texto español'}` → Muestra el texto correspondiente

---

## 🎨 CAMBIAR COLORES

**Archivo:** `app/globals.css`

**LÍNEAS 4-17:** Colores de PancitoGames y Memory History

```css
--pancito-primary: #ff6b35;  /* Cambia este color */
--memory-copper: #b87333;    /* Cambia este color */
```

---

## 🖼️ CAMBIAR IMÁGENES

**Carpeta:** `public/`

Para cambiar una imagen:
1. Pon tu nueva imagen en `public/`
2. Busca dónde se usa la imagen vieja:
   - **Ctrl+Shift+F**
   - Busca el nombre del archivo (ej: `LogoPancito.jpg`)
3. Cambia el nombre por tu nuevo archivo

**Ejemplo:**
```tsx
<Image src="/LogoPancito.jpg" />
```
Cambia a:
```tsx
<Image src="/MiNuevoLogo.png" />
```

---

## ⚡ CAMBIOS QUE HICE POR TI

### ✅ **Selector de Idioma**
- Agregado botón EN/ES en el navbar
- Funciona en desktop y móvil
- Guarda la preferencia del usuario

### ✅ **Favicon (Icono del navegador)**
- Ya está configurado con el logo de Pancito
- Se verá en las pestañas del navegador

---

## 🎯 CAMBIOS QUE DEBES HACER TÚ

Según lo que me dijiste:

### **1. QUITAR REFERENCIAS A "EDUCACIÓN" EN ABOUT**

**Archivo:** `app/about/page.tsx`

**Busca y cambia:**

**MISIÓN (LÍNEA ~52):**
```tsx
ANTES: "To create memorable gaming experiences that educate, entertain..."
DESPUÉS: "To create memorable gaming experiences that entertain and preserve..."
```

**VISIÓN (LÍNEA ~61):**
```tsx
ANTES: "To be the reference studio for cultural educational games..."
DESPUÉS: "To be the reference studio for cultural games on mobile devices..."
```

**VALORES (LÍNEA ~73):**
```tsx
ANTES: "📚 Education through entertainment"
DESPUÉS: "🎮 Innovation in every game" (o lo que prefieras)
```

**WHAT WE DO - Primer Bloque (LÍNEA ~96):**
```tsx
ANTES: "🎮 Educational Mobile Games"
       "We develop mobile games that combine entertainment with education..."

DESPUÉS: "🎮 Mobile Games"
         "We develop mobile games that entertain and celebrate culture..."
```

---

## 💡 CONSEJOS

### ✅ **HACER:**
- Cambiar textos libremente
- Guardar frecuentemente (Ctrl+S)
- Probar en el navegador después de cada cambio
- Buscar con Ctrl+F o Ctrl+Shift+F

### ❌ **NO HACER:**
- Borrar líneas con `className=`
- Tocar las comillas `""` o llaves `{}`
- Borrar etiquetas como `<div>`, `</div>`
- Cambiar nombres de archivos sin actualizar las referencias

---

## 🆘 SI ALGO SE ROMPE

1. **No guardes** (si acabas de hacer el cambio)
2. **Ctrl+Z** para deshacer
3. O cierra el archivo sin guardar y ábrelo de nuevo
4. **Pregúntame** y te ayudo a arreglarlo

---

## 📞 NECESITAS AYUDA?

Si algo no te queda claro, dime:
- Qué texto quieres cambiar
- En qué página está
- Y yo te digo exactamente la línea y cómo cambiarlo

---

**🎉 ¡YA ESTÁS LISTO PARA EDITAR!**

**Recomendación:** Empieza con cambios pequeños (como cambiar un título) para que veas cómo funciona.



