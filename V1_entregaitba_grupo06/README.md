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


## 🖌️ Decisiones de diseño

 Hicimos correcciones sobre el manual de marca, especifico en la correcion de colores para cumplir con contraste accesible WCAG 2.1 y extender el system design para poder hacer un diseño que represente la calidez y calidad de la marca respetando las pautas marcadas dentro del manual
 Dejamos disponible el prototipo interactivo diseño hecho en figma para visualizarlo
 https://www.figma.com/proto/3oMkep0m5kplNLqEjuTJ7N/Web-hermanos-jota?page-id=2%3A2&node-id=40-212&viewport=416%2C209%2C0.05&t=5G1P4IEsLA5znvEx-8&scaling=scale-down-width&content-scaling=fixed&hide-ui=1

---
## 📂 Estructura del Repositorio

```text
muebleria-jota/
│
├── assets/                    # Recursos estáticos
│   ├── images/                # Fotografías y banners
│   ├── icons/                 # Íconos vectoriales (.svg)
│   └── fonts/                 # Tipografías locales (si aplica)
│
├── css/                       # Hojas de estilo en cascada
│   ├── styles.css             # Estilos globales o de la home
│   ├── productos.css          # (Opcional) Estilos específicos
│   └── contacto.css           # (Opcional) Estilos específicos
│
├── js/                        # Lógica y scripts de JavaScript
│   └── main.js
│
├── pages/                     # Páginas secundarias del sitio
│   ├── productos.html         # Catálogo general
│   ├── producto.html          # Detalle / Ficha de producto
│   └── contacto.html          # Formulario y datos de contacto
│
├──Video                       # Contenido diseñado por el grupo/video .h24
──  index.html                 # Punto de entrada principal (Landing/Home)
└── README.md                  # Documentación del repositorio
