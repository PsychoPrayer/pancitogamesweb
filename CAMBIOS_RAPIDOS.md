# ⚡ CAMBIOS RÁPIDOS - Acceso Directo

Esta es tu **GUÍA RÁPIDA** para los cambios más comunes que vas a hacer.

---

## 🎯 TUS CAMBIOS PRIORITARIOS

### ✅ **1. QUITAR "EDUCACIÓN" DE ABOUT PAGE**

**Archivo:** `app/about/page.tsx`

#### **Cambio 1: MISIÓN (Línea ~52)**
**BUSCA:**
```
To create memorable gaming experiences that educate, entertain, and preserve
```

**CAMBIA A:**
```
To create memorable gaming experiences that entertain and preserve
```

---

#### **Cambio 2: VISIÓN (Línea ~61)**
**BUSCA:**
```
To be the reference studio for cultural educational games on mobile devices
```

**CAMBIA A:**
```
To be the reference studio for cultural games on mobile devices
```

---

#### **Cambio 3: VALORES (Línea ~73)**
**BUSCA:**
```
<li>📚 Education through entertainment</li>
```

**CAMBIA A:**
```
<li>🎮 Innovation in every game</li>
```
*(O cualquier otro valor que prefieras)*

---

#### **Cambio 4: WHAT WE DO - Título (Línea ~96)**
**BUSCA:**
```
🎮 Educational Mobile Games
```

**CAMBIA A:**
```
🎮 Mobile Games
```

---

#### **Cambio 5: WHAT WE DO - Descripción (Línea ~99)**
**BUSCA:**
```
We develop mobile games that combine entertainment with education, focusing on cultural and historical content from Latin America.
```

**CAMBIA A:**
```
We develop mobile games that entertain and celebrate cultural and historical content from Latin America.
```

---

#### **Cambio 6: CULTURAL PRESERVATION (Línea ~106)**
**BUSCA:**
```
Our games serve as digital museums, preserving and sharing cultural knowledge with new generations through interactive experiences.
```

**PUEDES DEJARLO** (este está bien) o cambiar a:
```
Our games preserve and share cultural heritage with new generations through engaging interactive experiences.
```

---

## 🔍 CÓMO HACER LOS CAMBIOS

### **Paso a Paso:**

1. **Abre Cursor**

2. **Abre el archivo:**
   - Haz clic en `app` → `about` → `page.tsx`
   - O presiona **Ctrl+P** y escribe `about/page.tsx`

3. **Buscar el texto:**
   - Presiona **Ctrl+F**
   - Copia y pega el texto que buscas (de la sección "BUSCA" arriba)
   - Te llevará directo a la línea

4. **Cambiar:**
   - Selecciona el texto viejo
   - Bórralo
   - Escribe el nuevo texto

5. **Guardar:**
   - Presiona **Ctrl+S**
   - Ve al navegador → **F5** para refrescar
   - ¡Verás el cambio!

---

## 📝 OTROS CAMBIOS COMUNES

### **Cambiar Título de Home**

**Archivo:** `app/page.tsx`  
**Línea:** ~13

```tsx
<h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
  Creating Memorable Gaming Experiences
</h1>
```

**Solo cambia el texto entre `>` y `</h1>`**

---

### **Cambiar Email de Contacto**

**Busca en TODOS los archivos:**
- Presiona **Ctrl+Shift+F**
- Busca: `hi@pancitogames.com`
- Reemplaza todos con tu nuevo email

**Archivos que lo contienen:**
- `app/components/Footer.tsx`
- `app/contact/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

---

### **Cambiar Año de Fundación**

**Busca:** `2016`

**Archivos:**
- `app/about/page.tsx` (varias líneas)
- `app/components/Footer.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

**Cambia a:** El año que prefieras

---

## 🌐 SELECTOR DE IDIOMA

**¡YA ESTÁ HECHO!** ✅

Verás un botón **EN/ES** en el navbar (arriba a la derecha).

**Para agregar traducciones a cualquier página:**

1. **Agrega esta línea al inicio del componente:**
```tsx
'use client';
import { useLanguage } from '../components/LanguageSwitcher';
```

2. **Dentro de la función, agrega:**
```tsx
const language = useLanguage();
```

3. **Usa este patrón para los textos:**
```tsx
{language === 'en' 
  ? 'English Text Here'
  : 'Texto en Español Aquí'
}
```

**EJEMPLO COMPLETO:**
```tsx
<h1>
  {language === 'en' 
    ? 'Creating Memorable Gaming Experiences'
    : 'Creando Experiencias de Juego Memorables'
  }
</h1>
```

---

## 🖼️ FAVICON (Icono del Navegador)

**¡YA ESTÁ HECHO!** ✅

El logo de PancitoGames ya aparece en las pestañas del navegador.

---

## ⚡ ATAJOS DE TECLADO ÚTILES

- **Ctrl+F** → Buscar en archivo actual
- **Ctrl+Shift+F** → Buscar en TODOS los archivos
- **Ctrl+S** → Guardar
- **Ctrl+Z** → Deshacer
- **Ctrl+Shift+Z** → Rehacer
- **Ctrl+P** → Abrir archivo rápido
- **Alt+↑/↓** → Mover línea arriba/abajo
- **Ctrl+D** → Seleccionar siguiente ocurrencia

---

## 📊 RESUMEN DE LO QUE HICE

### ✅ **Implementado:**
1. **Selector de idioma EN/ES** en el navbar
2. **Favicon** con logo de Pancito
3. **Guía de edición completa** (`GUIA_EDICION.md`)
4. **Esta guía rápida** que estás leyendo

### 📝 **Para que hagas tú:**
1. Quitar referencias a "educación" en About page (6 cambios arriba)
2. Cualquier otro texto que quieras personalizar

---

## 🎯 PRÓXIMOS PASOS SUGERIDOS

1. **Haz los 6 cambios de About** (arriba)
2. **Revisa todas las páginas** para ver si hay más textos que quieras cambiar
3. **Personaliza los colores** si quieres (en `app/globals.css`)
4. **Agrega traducciones** a las páginas principales (opcional)
5. **Despliega a internet** cuando estés listo

---

## 🆘 ¿NECESITAS AYUDA?

Solo dime:
- **Qué texto** quieres cambiar
- **Dónde está** (qué página)

Y te digo exactamente cómo hacerlo.

---

## 💡 TIPS PRO

### **Tip 1: Cambios Masivos**
Si necesitas cambiar el MISMO texto en varios archivos:
1. **Ctrl+Shift+F** (buscar en todos los archivos)
2. Busca el texto
3. Haz clic en "Replace All" o reemplázalos uno por uno

### **Tip 2: Ver Cambios en Tiempo Real**
Deja el navegador y Cursor abiertos lado a lado:
- Guardas en Cursor (Ctrl+S)
- El navegador se actualiza automáticamente
- Ves los cambios al instante

### **Tip 3: Backup Antes de Cambios Grandes**
Si vas a hacer muchos cambios:
1. Copia toda la carpeta `pancitogames-web`
2. Pégala como `pancitogames-web-backup`
3. Trabaja en la original
4. Si algo sale mal, recuperas del backup

---

**🚀 ¡ADELANTE! AHORA TIENES TODO LO QUE NECESITAS**

Empieza con los 6 cambios de About y luego me cuentas cómo te fue.



