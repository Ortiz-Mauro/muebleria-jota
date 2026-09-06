# 🪑 Mueblería Jota — E-Commerce Web

> **Primera Entrega**: Desarrollo Frontend (Sprint 1)  
> *Certificación Avanzada Full Stack Developer — ITBA*

---

## 📌 Sobre el Proyecto

Bienvenido al repositorio de **Mueblería Jota**, un e-commerce enfocado en la exhibición y venta de mobiliario moderno. Esta primera entrega comprende el maquetado, estilizado e interactividad básica de la interfaz web, sentando las bases de la arquitectura cliente/servidor que se completará en etapas posteriores.

---

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando la **tríada fundamental de la Web**:

* **HTML5 Semántico**: Para garantizar accesibilidad, estructura limpia y un correcto posicionamiento SEO.
* **CSS3 Moderno**: Utilización de variables globales (*custom properties*), Flexbox/Grid para layouts adaptativos y diseño *Responsive Web Design*.
* **JavaScript (ES6+)**: Manipulación interactiva del DOM, captura de eventos y lógica básica de la interfaz sin librerías externas.

---

## ✨ Buenas Prácticas Aplicadas

Para que el código sea limpio, mantenible y escalable, se implementaron las siguientes prácticas de la industria:

1. **Separación de Responsabilidades (*Separation of Concerns*)**: Marcado (HTML), estilos (CSS) y comportamiento (JS) completamente desacoplados.
2. **Nomenclatura y Convenciones**:
   * Uso de **kebab-case** en archivos y clases CSS para consistencia cross-platform.
   * Uso de **camelCase** en variables y funciones de JavaScript.
3. **Optimización de Recursos**: Estructura modular de archivos para una carga eficiente y clara legibilidad.
4. **Control de Versiones**: Commits frecuentes en Git siguiendo la convención de mensajes claros y descriptivos.

---


## 🎨 Buenas Prácticas Aplicadas

Diseño ux/ui siguiendo el manual de marca. Ampliamos el manual para que la marca de hermanos j se pueda adaptar bien a medios digitales. Se amplio el design system, usos mas eficientes y visuales de la letras.Correcion de colores para cumplir con contraste accesible WCAG 2.1. Tambien se hizo un diseño preliminar en figma. Prototipo interactivo 
https://www.figma.com/make/xKUp1AUR6TibSc218ldxuJ/Product-Landing-Page?fullscreen=1&t=JIHA3JwXgFPBYl6v-1&code-node-id=0-6


## 📂 Estructura del Repositorio

```text
muebleria-jota/
│
├── assets/                    # Recursos estáticos
│   ├── images/                # Fotografías y banners
│   ├── icons/                 # Íconos vectoriales (.svg)
│   └── fonts/                 # Tipografías locales (si aplica)
│
├── css/                             # Hojas de estilo en cascada unific
│   ├── Base.css                     # Compartido por TODAS las páginas: reset, tokens,header/nav,footer y toast. 
│   ├── producto-detail.css          # DETALLE DE PRODUCTO (product-detail.html)
│   └── contacto.css                 # formulario
│   ├── products-view.css            # CATÁLOGO (products-view.html)
│   └── styles.css                   # HOME (index.html)
│
├── js/                        # Lógica y scripts de JavaScript
│   └── cart.js
│    └── catalogo.js    
│    └── contacto.js
│    └── detalle.js
│    └── main.js    
│    └──productos-data.js
     └── productos.js    
│    └── script.js
│    └── toast.js
│  
├── pages/                     # Páginas secundarias del sitio
│   ├── productos.html         # Catálogo general
│   ├── producto.html          # Detalle / Ficha de producto
│   └── contacto.html          # Formulario y datos de contacto
├── Video                      # Video (diseñado por equipo 06)
├── index.html                 # Punto de entrada principal (Landing/Home)
└── README.md                  # Documentación del repositorio
