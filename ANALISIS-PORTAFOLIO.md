# Análisis del Portafolio — Gherson Torres

Documento de inventario técnico y funcional del proyecto **antes de nuevas mejoras**.  
Fecha de análisis: **10 de agosto de 2026**.

---

## 1. ¿Qué es este proyecto?

Portafolio web personal de **Gherson Steven Torres (Gherson Torres)**, Ingeniero de Software enfocado en:

- Operación e infraestructura TI  
- Microsoft 365 y automatización  
- Datos e inteligencia artificial  
- Desarrollo web  

Es una **Single Page Application (SPA)** en español que presenta perfil profesional, experiencia, trabajos filtrables y un formulario de contacto. No es un blog ni un CMS: el contenido vive en componentes React y un archivo de datos estático.

**Propósito principal:** generar confianza profesional y captar contactos (empresas, reclutadores, clientes) hacia LinkedIn, GitHub y el formulario Formspree.

---

## 2. Stack tecnológico

| Capa | Tecnología | Versión / detalle | Uso en el proyecto |
|------|------------|-------------------|--------------------|
| UI | React | `^19.2.5` | Componentes de layout, estado local, eventos |
| Runtime DOM | React DOM | `^19.2.5` | Montaje en `#root` con `createRoot` |
| Bundler / Dev server | Vite | `^8.0.10` | `npm run dev`, build y preview |
| Plugin | `@vitejs/plugin-react` | `^6.0.1` | JSX + Fast Refresh |
| Lenguaje | JavaScript (JSX) | ES Modules (`"type": "module"`) | Sin TypeScript |
| Estilos | CSS nativo + nesting | Por componente + globales | Variables CSS, dark mode, responsive |
| Reset | `normalize.css` (local) | Incluido en `src/` | Normalización de estilos base |
| Tipografía | Google Fonts | Inter + Merriweather | UI sans / títulos serif |
| Lint | ESLint 10 + plugins React | Dev | Calidad de código |
| Formularios | Formspree | Endpoint `mykvnpbp` | Envío real del contacto por HTTP POST |
| Persistencia UI | `localStorage` | Clave `dark-mode` | Preferencia de tema |

**No usa (hoy):** React Router, Redux/Zustand, Tailwind, TypeScript, backend propio, base de datos, i18n, testing automatizado, CI/CD.

---

## 3. Cómo se ejecuta

```bash
npm install
npm run dev      # desarrollo (Vite)
npm run build    # salida en dist/
npm run preview  # previsualizar build
npm run lint     # ESLint
```

Assets estáticos se sirven desde `public/` (favicon, imágenes, video, logos).

---

## 4. Arquitectura de carpetas

```
Portafolio/
├── index.html                 # Shell HTML, idioma es, fuentes, título
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/
│   ├── favicon.png
│   └── assets/
│       ├── background.mp4     # Video del hero
│       ├── hero-bg.png
│       ├── acerca-de-*.png
│       ├── logos/             # SVGs placeholder de clientes
│       └── trabajos/          # Thumbnails y detalle de proyectos
├── src/
│   ├── main.jsx               # Entry: StrictMode + App
│   ├── App.jsx                # Orquesta secciones en orden
│   ├── index.css              # Tokens, tipografía, utilidades globales
│   ├── normalize.css
│   └── componentes/
│       ├── DarkModeSwitch.jsx
│       ├── Modal.jsx
│       ├── data/trabajos.jsx  # Catálogo de 12 trabajos
│       └── layout/
│           ├── Header.jsx
│           ├── Hero.jsx
│           ├── Clientes.jsx
│           ├── Trabajos.jsx
│           ├── AcercaDe.jsx
│           ├── Contacto.jsx
│           └── Footer.jsx
└── dist/                      # Build (ignorado por git)
```

**Patrón:** composición lineal (sin router). Cada sección = componente + CSS hermano. Datos de trabajos centralizados en `trabajos.jsx`.

---

## 5. Secciones de la UI (flujo de página)

Orden en `App.jsx`:

| # | Sección | ID ancla | Función |
|---|---------|----------|---------|
| 1 | **Header** | — | Logo, nav sticky, dark mode |
| 2 | **Hero** | `#inicio` | Presentación + CTAs + video de fondo |
| 3 | **Clientes** | — | Carrusel infinito de empresas |
| 4 | **Trabajos** | `#trabajos` | Grid filtrable + modal de detalle |
| 5 | **Acerca de** | `#acerca-de` | Bio, métricas, especialidades |
| 6 | **Contacto** | `#contacto` | Formulario validado → Formspree |
| 7 | **Footer** | — | Redes sociales + copyright 2026 |

Navegación por **anclas hash** (`#trabajos`, `#acerca-de`, `#contacto`) con `scroll-behavior: smooth` y `scroll-padding-top: 120px` para el header sticky.

---

## 6. Funcionalidades clave

### 6.1 Dark mode
- Toggle sol/luna en el header.
- Añade/quita clase `dark` en `document.body`.
- Persiste en `localStorage` (`dark-mode`).
- Tokens de color vía variables CSS (`--shade-*`, `--primario`).

### 6.2 Catálogo de trabajos
- **12 proyectos** en 5 categorías + filtro “Todos”:
  - Microsoft 365  
  - Automatización  
  - Infraestructura TI  
  - Datos e IA  
  - Desarrollo Web  
- Filtro con radio buttons controlados por `useState`.
- Clic abre **Modal** con imagen, título, categoría y contenido rico (texto + imágenes + stack).

### 6.3 Clientes / empresas
Empresas mencionadas (logos SVG reutilizados como placeholder visual):

1. ITSANET Peru S.A.C.  
2. ROOK Services S.A.C.  
3. Grupo de Desarrollo & Innovación Peru  
4. VSI Industria S.A.C.  
5. GEPAE Peru S.A.C.  
6. OLIPAT S.A.C.  

Carrusel CSS: lista duplicada (`[...logos, ...logos]`) para loop continuo.

### 6.4 Contacto
- Campos: nombre, correo, mensaje.
- Validación client-side con regex.
- Errores mostrados en UI.
- Envío a Formspree: `https://formspree.io/f/mykvnpbp`.

### 6.5 Redes (Footer)
- LinkedIn: `steven-torres-otrera`  
- GitHub: `ghersonsto`  
- Facebook, Instagram, TikTok  

---

## 7. Sistema de diseño (resumen)

| Elemento | Valor / decisión |
|----------|------------------|
| Contenedor | `95%` / max `1200px` centrado |
| Primario | `#d83a3a` (hover `#bf3030`) |
| Escala neutra | `--shade-1` … `--shade-10` |
| Títulos | Merriweather |
| Cuerpo | Inter |
| Botones | Pill (`border-radius: 100px`) |
| Hero | Video full-bleed + overlay gradient + CTAs |
| Header | Sticky, blur, grid 3 columnas |
| Responsive | Breakpoints ~576px / 992px (hero y header) |

---

## 8. Inventario de trabajos (datos)

| ID | Nombre | Categoría |
|----|--------|-----------|
| 1 | Gestión Microsoft 365 | microsoft-365 |
| 2 | Sistema interno de tickets | automatizacion |
| 3 | Soporte N1/N2 e infraestructura | infraestructura-ti |
| 4 | Modelo IA para señales EEG | datos-ia |
| 5 | Comunicados técnicos HTML/CSS | desarrollo-web |
| 6 | Redes corporativas | infraestructura-ti |
| 7 | Sistema interno de inventario | automatizacion |
| 8 | Reportes y documentación TI | datos-ia |
| 9 | Onboarding y offboarding TI | microsoft-365 |
| 10 | Seguridad y respaldos | infraestructura-ti |
| 11 | Prototipos UI y mejora visual | desarrollo-web |
| 12 | Manuales y capacitación TI | automatizacion |

Helpers en datos: `crearTrabajo` / `crearContenido` construyen el objeto que consume el Modal.

---

## 9. Perfil profesional reflejado en el contenido

- **Rol:** Ingeniero de Software | TI, Datos e IA  
- **Experiencia destacada:** 6+ años en soporte y sistemas  
- **Publicación:** Editorial Springer (detección de alcoholismo con EEG / ML-DL)  
- **Especialidades declaradas:**
  - Infraestructura, redes, seguridad, respaldos, soporte N1/N2  
  - M365, Exchange, SharePoint, Power Automate, Active Directory  
  - Python, TensorFlow, Keras, scikit-learn  
  - Web: Figma, HTML5, CSS, JavaScript, documentación técnica  

---

## 10. Dependencias de terceros / servicios externos

| Servicio | Para qué |
|----------|----------|
| Google Fonts | Tipografías Inter y Merriweather |
| Formspree | Backend ligero del formulario de contacto |
| Redes sociales | Enlaces salientes del footer |

---

## 11. Estado actual y observaciones técnicas

### Fortalezas
- Estructura clara por secciones y CSS acotado por componente.
- Contenido alineado con un perfil TI real (no solo “diseño genérico”).
- Dark mode persistente, filtros de trabajos y modal de detalle.
- Build moderno (Vite + React 19).
- Assets organizados en `public/assets`.

### Limitaciones / deuda (útil para próximas mejoras)
- README aún es el template por defecto de Vite (no describe el portafolio).
- Sin TypeScript ni tests.
- Sin React Router (OK para SPA de una página; limitar si se añaden rutas).
- Logos de clientes son SVG genéricos (nombres reales, marcas placeholder).
- Video del hero sin `muted`/`playsInline` explícitos: algunos navegadores pueden bloquear autoplay.
- Checkbox de dark mode no sincroniza `checked` con el estado inicial leído de `localStorage`.
- `especialidades` en `AcercaDe.jsx` está definido pero no se renderiza en la UI.
- Formspree endpoint expuesto en el cliente (normal en front; cuidar abuso/spam).
- No hay `.git` inicial en el análisis previo a este documento (se versiona al subir a GitHub).
- Carpeta `dist/` existe localmente pero está en `.gitignore` (correcto).

### Archivos auxiliares
- `regEx.txt.txt`: notas/auxiliar de regex (no forma parte del runtime de la app).

---

## 12. Mapa mental de datos y estado

```
App (sin estado global)
├── Header → DarkModeSwitch (localStorage + body.dark)
├── Hero (estático)
├── Clientes (array logos + animación CSS)
├── Trabajos
│   ├── estado: categoria, filtrados, modal open, trabajo seleccionado
│   ├── data: trabajos.jsx (12 items)
│   └── Modal (props: trabajo, closeModal)
├── AcercaDe (métricas estáticas)
├── Contacto (nombre, correo, mensaje, error → Formspree)
└── Footer (links externos)
```

---

## 13. Conclusión

Este repositorio es el **portafolio profesional front-end** de Gherson Torres: React + Vite, una sola página, contenido orientado a TI / M365 / automatización / datos-IA / web, con filtrado de proyectos, tema oscuro y contacto vía Formspree.

Este archivo sirve como **baseline de conocimiento** antes de rediseñar, refactorizar o ampliar el sitio.
