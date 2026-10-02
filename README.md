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


## 🎨 Diseño desde el comienzo

Pensamos en como hermanos jota es una empresa que viene trabajando, diseñando y acompañando a todos sus compradores en los momentos mas intimos y familiares. Respetamos el tono calido de la voz de marca y la expresamos en el diseño
Tambien se realizo el diseño ux/ui desde cero. Ampliamos el manual para que la marca de hermanos jota se pueda adaptar bien a medios digitales. Se amplio el design system, usos mas eficientes y visuales de las tipografias.Correcion de colores para cumplir con contraste accesible WCAG 2.1. Tambien se hizo un diseño preliminar en figma. Prototipo interactivo 
https://www.figma.com/proto/3oMkep0m5kplNLqEjuTJ7N/Web-hermanos-jota?page-id=2%3A2&node-id=22-2&viewport=416%2C209%2C0.05&t=5G1P4IEsLA5znvEx-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=22%3A2&hide-ui=1

Ademas pensando en como comunican se agregaron 2 secciones no codeadas como "coleccion jota 2026" inspirada en el manual y catalogo compartido. Tambien se penso en una arquitectura que impulse las caracteristicas de "premium" y "familiar" añadiendo una sección "nosotros"

## 📂 Estructura del Repositorio

```text
muebleria-jota/
│
├── assets/                    # Recursos estáticos
│   ├── images/                # Fotografías y banners
│   └── icons/                 # Íconos vectoriales (.svg)
│
├── video/                     # Video del hero de la home
│
├── css/                       # Hojas de estilo en cascada
│   ├── base.css               # Reset, tokens, header/nav y footer (compartido)
│   ├── styles.css             # Estilos de la home
│   ├── products-view.css      # Estilos del catálogo
│   ├── product-detail.css     # Estilos del detalle de producto
│   └── contacto.css           # Estilos del formulario de contacto
│
├── js/                        # Lógica y scripts de JavaScript
│   ├── script.js               # Menú mobile (hamburguesa), compartido
│   ├── toast.js                 # Notificaciones flotantes, compartido
│   ├── productos-data.js        # Array de objetos con los productos + helpers
│   ├── main.js                  # Home: renderizado dinámico de destacados
│   ├── catalog.js               # Catálogo: renderizado dinámico de la grilla
│   ├── product-detail.js        # Detalle: renderizado dinámico por id de la URL
│   ├── cart.js                  # Carrito simulado (localStorage + contador)
│   └── contacto.js              # Validación del formulario de contacto
│
├── pages/                     # Páginas secundarias del sitio
│   ├── products-view.html     # Catálogo general
│   ├── product-detail.html    # Detalle / Ficha de producto
│   └── contacto.html          # Formulario y datos de contacto
│
├── index.html                 # Punto de entrada principal (Landing/Home)
└── README.md                  # Documentación del repositorio
```

---

## 👥 Integrantes

<!-- TODO: reemplazar por el nombre completo y el link de perfil de GitHub de cada uno -->

| Nombre | Usuario de GitHub |
|---|---|
| Ivan Rosendo | [@ivanros02](https://github.com/ivanros02) |
| Pozuelo María Leal | [@mlealpozuelo](https://github.com/mlealpozuelo) |
| Ortiz Mauro | [@ortiz-mauro](https://github.com/ortiz-mauro) |
| Ricartes Pedro Leonel | [@ricartes123](https://github.com/ricartes123) |
| Arrueta Rolando | [@rolo-arrueta](https://github.com/rolo-arrueta) |

---

## 🌐 Demo

🔗 _Sitio desplegado en: https://mueblesjotagrupo06.netlify.app
