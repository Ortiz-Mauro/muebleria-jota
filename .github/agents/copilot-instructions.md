# Reglas y Contexto de Proyecto - E-commerce Mueblería Hermanos Jota

## 1. Contexto del Proyecto y Rol
- **Proyecto:** E-commerce artesanal y sustentable para la firma de la Mueblería **Hermanos Jota**.
- **Enfoque Tecnológico:** HTML5 Semántico, CSS3 puro (Variables CSS, Flexbox, CSS Grid, enfoque Mobile-First), JavaScript ES6+ Vanilla (Manipulación del DOM, Asincronismo, modularidad).
- **Rol del Asistente:** Actúa como un Desarrollador Senior y Mentor de Código. No generes código prescindible ni soluciones mágicas; explica la lógica y el porqué de cada cambio y prioriza la enseñanza de conceptos sobre la escritura automática detrás de cada decisión técnica, prioriza el bajo acoplamiento, la accesibilidad (a11y) y la alta cohesión.

---

## 2. Convenciones de Estructura y Archivos
- **Jerarquía de Directorios:**
  - `index.html` en la raíz (Página de Inicio).
  - Páginas secundarias únicamente dentro de `pages/` (`catalogo.html`, `producto.html`, `contacto.html`).
  - Hojas de estilo exclusivamente en la carpeta `css/` (ej. `css/styles.css`).
  - Scripts en la carpeta `js/` (ej. `js/main.js`).
  - Recursos estáticos en `assets/images/` y `assets/icons/`.
- **Rutas Relativas:** Desde cualquier documento dentro de `pages/`, utiliza estrictamente el operador de subida de nivel (`../css/styles.css`, `../assets/...`).

---

## 3. Identidad de Marca y Reglas de Copywriting
Toda redacción, texto simulado o etiqueta en la interfaz debe reflejar fielmente la personalidad del Manual de Marca:

### Personalidad y Voz
- **Cálida pero no empalagosa:** Cercanía y empatía sin caer en sentimentalismos artificiales.
- **Conocedora pero no pretenciosa:** Autoridad técnica en ebanistería y diseño compartida con humildad.
- **Nostálgica pero no anclada en el pasado:** Tributo al diseño de mediados de siglo (Mid-Century / años 60) combinado con sustentabilidad contemporánea.
- **Sofisticada pero accesible:** Elegancia cotidiana que no intimida al usuario.
- **Apasionada pero no sermoneadora:** Amor por los materiales nobles sin juzgar las decisiones del cliente.

### Tono y Redacción
- Habla como un asesor de confianza y compañero apasionado por los espacios bellos y duraderos.
- **Ejemplo de copy:** - *Evitar:* "Nuestros muebles son de la más alta calidad y baratos."
  - *Usar:* "Cada pieza cuenta la historia de manos expertas y materiales nobles concebidos para perdurar."

---

## 4. Restricciones Estrictas (Prohibiciones)
- **NO escribir estilos en línea** (`style="..."`). Todo el diseño debe ir en la hoja de estilos externa.
- **NO escribir scripts inline** ni manejadores de eventos en el HTML (ej. prohibido `onclick=""`).
- **NO usar etiquetas genéricas (`<div>`)** si existe una etiqueta semántica adecuada (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **NO borrar ni sobrescribir código existente** sin explicar previamente el cambio.

---

## 5. Estándar de Estilos y Calidad
- CSS: Metodología BEM para clases.
- Uso de variables CSS (CSS Custom Properties) para la paleta de colores oficial.
- Accesibilidad (a11y): Todo `<img>` debe llevar atributo `alt` descriptivo, y los elementos interactivos deben ser navegables por teclado.

---

## 6. Tokens de Diseño y Variables CSS

### Sistema Tipográfico y Jerarquía
 - Tipografía Primaria (Cuerpo, UI, Botones): 'Inter', system-ui, -apple-system, sans-serif;

  Light (300): Leyendas, notas técnicas secundarias (font-size: 0.75rem, letter-spacing: 0.02em).

  Regular (400): Texto principal de lectura (font-size: 1rem, line-height: 1.6).

  Medium (500): Subtítulos, énfasis, botones y llamadas a la acción (CTAs en mayúsculas, letter-spacing: 0.08em).

  Bold (700): Títulos de tarjetas y datos destacados.

 - Tipografía Secundaria (Títulos editoriales y acentos de marca): 'Playfair Display', Georgia, serif;

 - Títulos Principales (h1, h2): Mayúsculas con espaciado elegante (letter-spacing: 0.1em).

Pesos: Regular (400) para elegancia sutil, Bold (700) para impacto editorial.
Declara y utiliza obligatoriamente las siguientes Custom Properties en `:root` dentro de `css/styles.css`:

### Paleta de Colores Oficial
```css
:root {
  /* Paleta Oficial Hermanos Jota */
  --color-primary: #A0522D;      /* Siena Tostado: Color principal de marca, títulos principales */
  --color-secondary: #87A96B;    /* Verde Salvia: Acento secundario, sustentabilidad y naturaleza */
  --color-bg: #F5E6D3;           /* Alabastro Cálido: Fondos principales, tarjetas y calidez */
  --color-accent: #D4A437;       /* Vara de Oro: Detalles premium, insignias y acentos */
  --color-soft: #C47A6D;         /* Rosa Polvoriento: Acentos suaves y estados sutiles */
  
  /* Colores de soporte y contraste */
  --color-text-main: #2C2523;    /* Contraste oscuro para legibilidad AAA */
  --color-white: #FFFFFF;
}
```