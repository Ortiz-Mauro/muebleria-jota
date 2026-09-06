const PRODUCTOS = [
    {
        id: 'sofa-patagonia',
        nombre: 'Sofá Patagonia',
        categoria: 'Living',
        precio: 1200000,
        imagen: 'sofa-patagonia.png',
        alt: 'Sofá Patagonia de tres cuerpos de madera noble con cojines de plumón reciclado',
        descripcionCorta: 'Confort amplio y líneas atemporales en madera noble.',
        descripcionDestacada: 'Líneas atemporales y calidez natural. Cojines de plumón reciclado y patas cónicas de madera que combinan el arte tradicional con el confort moderno.',
        destacado: true,
        descripcionLarga: [
            'El Sofá Patagonia es una pieza de autor pensada para ser el centro de gravedad de tu living. Su estructura está construida en madera nativa certificada FSC® y sus almohadones utilizan pluma reciclada de alta densidad, logrando un confort profundo sin sacrificar la estética minimalista que define a Hermanos Jota.',
            'Cada unidad es terminada a mano en nuestro taller de San Cristóbal con aceites orgánicos que realzan la veta natural de la madera y la protegen para uso diario.'
        ],
        caracteristicas: [
            { etiqueta: 'Medidas', valor: '220 × 90 × 85 cm' },
            { etiqueta: 'Estructura', valor: 'madera de guatambú certificada FSC®' },
            { etiqueta: 'Tapizado', valor: 'lino orgánico en tono arena' },
            { etiqueta: 'Relleno', valor: 'pluma reciclada de alta densidad' },
            { etiqueta: 'Acabado', valor: 'aceite de lino natural' },
            { etiqueta: 'Garantía', valor: '10 años en estructura, 5 años en acabados' }
        ]
    },
    {
        id: 'butaca-mendoza',
        nombre: 'Butaca Mendoza',
        categoria: 'Living',
        precio: 450000,
        imagen: 'butaca-mendoza.png',
        alt: 'Butaca Mendoza tapizada en bouclé Rosa Polvoriento con base giratoria de guatambú macizo',
        descripcionCorta: 'Diseño envolvente con base giratoria de guatambú.',
        descripcionDestacada: 'Diseño envolvente tapizado en bouclé Rosa Polvoriento con base de guatambú macizo. Líneas orgánicas que aportan máxima calidez y ergonomía a tu espacio.',
        destacado: true,
        descripcionLarga: [
            'La Butaca Mendoza nace de una idea simple: una silla en la que uno se quede más tiempo del que pensaba. Su respaldo envolvente acompaña la espalda sin encerrar, y el bouclé Rosa Polvoriento suma una textura cálida que invita a apoyarse.',
            'La base giratoria de guatambú macizo gira con suavidad sobre un rodamiento oculto, para que la butaca acompañe la conversación sin necesidad de moverla del lugar.'
        ],
        caracteristicas: [
            { etiqueta: 'Medidas', valor: '78 × 80 × 75 cm' },
            { etiqueta: 'Estructura', valor: 'guatambú macizo con base giratoria' },
            { etiqueta: 'Tapizado', valor: 'bouclé en tono Rosa Polvoriento' },
            { etiqueta: 'Relleno', valor: 'espuma de alta resiliencia con capa de fibra' },
            { etiqueta: 'Acabado', valor: 'aceite de lino natural' },
            { etiqueta: 'Garantía', valor: '10 años en estructura, 5 años en acabados' }
        ]
    },
    {
        id: 'mesa-de-centro-araucaria',
        nombre: 'Mesa de Centro Araucaria',
        categoria: 'Living',
        precio: 680000,
        imagen: 'mesa-de-centro-araucaria.png',
        alt: 'Mesa de centro Araucaria con tapa circular de mármol Patagonia y base de nogal macizo',
        descripcionCorta: 'Mármol Patagonia y nogal macizo en armonía.',
        descripcionDestacada: 'Sobre circular de mármol Patagonia pulido y base en madera maciza de nogal. Un diálogo armónico entre la solidez de la piedra y la calidez del acabado en aceite natural.',
        destacado: true,
        descripcionLarga: [
            'La Mesa de Centro Araucaria pone en diálogo dos materiales opuestos: la frialdad del mármol Patagonia pulido y la calidez del nogal macizo. El contraste sostiene la pieza visualmente y le permite convivir tanto con un living sobrio como con uno cargado de color.',
            'Cada tapa se selecciona por su veta, así que no hay dos mesas iguales. El pulido se hace a mano y recibe un sellador mate que resiste manchas de café y vino sin cambiar el tacto de la piedra.'
        ],
        caracteristicas: [
            { etiqueta: 'Medidas', valor: '90 cm de diámetro × 40 cm de alto' },
            { etiqueta: 'Estructura', valor: 'base de nogal macizo' },
            { etiqueta: 'Tapa', valor: 'mármol Patagonia pulido de 20 mm' },
            { etiqueta: 'Peso', valor: '38 kg' },
            { etiqueta: 'Acabado', valor: 'sellador mate para piedra y aceite natural en la madera' },
            { etiqueta: 'Garantía', valor: '10 años en estructura, 5 años en acabados' }
        ]
    },
    {
        id: 'aparador-uspallata',
        nombre: 'Aparador Uspallata',
        categoria: 'Comedor',
        precio: 890000,
        imagen: 'aparador-uspallata.png',
        alt: 'Aparador Uspallata de madera con puertas de listones',
        descripcionCorta: 'Guardado generoso con una presencia serena y cálida.',
        destacado: false,
        descripcionLarga: [
            'El Aparador Uspallata resuelve el guardado del comedor sin ocupar la escena. Sus puertas de listones verticales filtran la luz y quiebran el volumen, de modo que una pieza de casi dos metros se lee liviana contra la pared.',
            'Adentro, dos estantes regulables y un cajón forrado en fieltro organizan vajilla, mantelería y todo lo que uno prefiere no tener a la vista. Las bisagras son de cierre suave y están calibradas una por una en el taller.'
        ],
        caracteristicas: [
            { etiqueta: 'Medidas', valor: '180 × 45 × 80 cm' },
            { etiqueta: 'Estructura', valor: 'paraíso macizo certificado FSC®' },
            { etiqueta: 'Interior', valor: 'dos estantes regulables y un cajón forrado en fieltro' },
            { etiqueta: 'Herrajes', valor: 'bisagras de cierre suave y tiradores de bronce macizo' },
            { etiqueta: 'Acabado', valor: 'aceite de lino natural' },
            { etiqueta: 'Garantía', valor: '10 años en estructura, 5 años en acabados' }
        ]
    },
    {
        id: 'biblioteca-recoleta',
        nombre: 'Biblioteca Recoleta',
        categoria: 'Guardado',
        precio: 760000,
        imagen: 'biblioteca-recoleta.png',
        alt: 'Biblioteca Recoleta modular de madera con estantes abiertos',
        descripcionCorta: 'Composición modular para ordenar y exhibir tus objetos.',
        destacado: false,
        descripcionLarga: [
            'La Biblioteca Recoleta está pensada para crecer con quien la usa. Sus módulos se apilan y se combinan en vertical o en horizontal, así que la misma pieza sirve para un monoambiente hoy y para una pared entera más adelante.',
            'Los estantes soportan hasta 30 kg cada uno sin flexarse, gracias a un travesaño posterior oculto que rigidiza la estructura sin aparecer a la vista.'
        ],
        caracteristicas: [
            { etiqueta: 'Medidas', valor: '120 × 35 × 180 cm por módulo' },
            { etiqueta: 'Estructura', valor: 'paraíso macizo certificado FSC®' },
            { etiqueta: 'Estantes', valor: 'cinco estantes fijos, hasta 30 kg cada uno' },
            { etiqueta: 'Modularidad', valor: 'apilable y combinable en vertical u horizontal' },
            { etiqueta: 'Acabado', valor: 'aceite de lino natural' },
            { etiqueta: 'Garantía', valor: '10 años en estructura, 5 años en acabados' }
        ]
    },
    {
        id: 'escritorio-costa',
        nombre: 'Escritorio Costa',
        categoria: 'Trabajo',
        precio: 540000,
        imagen: 'escritorio-costa.png',
        alt: 'Escritorio Costa de madera con cajón y pasacables',
        descripcionCorta: 'Superficie amplia y proporciones pensadas para concentrarte.',
        destacado: false,
        descripcionLarga: [
            'El Escritorio Costa parte de una idea concreta: una superficie donde entren dos monitores, un cuaderno y una taza sin que nada quede al borde. El sobre de 140 cm da ese margen y la profundidad de 65 cm mantiene la pantalla a distancia cómoda.',
            'Un pasacables integrado sobre el borde posterior y una bandeja oculta bajo el sobre se ocupan de los cables, para que el escritorio siga viéndose limpio también por detrás.'
        ],
        caracteristicas: [
            { etiqueta: 'Medidas', valor: '140 × 65 × 75 cm' },
            { etiqueta: 'Estructura', valor: 'guatambú macizo certificado FSC®' },
            { etiqueta: 'Sobre', valor: 'una pieza de 25 mm con canto redondeado' },
            { etiqueta: 'Organización', valor: 'cajón lateral, pasacables integrado y bandeja oculta' },
            { etiqueta: 'Acabado', valor: 'aceite de lino natural' },
            { etiqueta: 'Garantía', valor: '10 años en estructura, 5 años en acabados' }
        ]
    },
    {
        id: 'mesa-comedor-pampa',
        nombre: 'Mesa de Comedor Pampa',
        categoria: 'Comedor',
        precio: 980000,
        imagen: 'mesa-comedor-pampa.png',
        alt: 'Mesa de comedor Pampa de madera maciza para seis personas',
        descripcionCorta: 'Una mesa generosa para compartir todos los días.',
        destacado: false,
        descripcionLarga: [
            'La Mesa Pampa está dimensionada para seis personas sentadas cómodas y ocho cuando la ocasión lo pide. Sus patas van retiradas hacia adentro, de modo que nadie termine con una pata entre las piernas en la cabecera.',
            'El sobre es de lengüetas de madera maciza unidas una a una, un método más lento que el enchapado pero que permite lijar y reacondicionar la mesa dentro de veinte años en vez de reemplazarla.'
        ],
        caracteristicas: [
            { etiqueta: 'Medidas', valor: '200 × 95 × 76 cm' },
            { etiqueta: 'Capacidad', valor: 'seis comensales, ocho con ajuste' },
            { etiqueta: 'Estructura', valor: 'paraíso macizo certificado FSC®' },
            { etiqueta: 'Sobre', valor: 'lengüetas de madera maciza de 30 mm' },
            { etiqueta: 'Acabado', valor: 'aceite de lino natural, reacondicionable' },
            { etiqueta: 'Garantía', valor: '10 años en estructura, 5 años en acabados' }
        ]
    },
    {
        id: 'mesa-de-noche-aconcagua',
        nombre: 'Mesa de Noche Aconcagua',
        categoria: 'Dormitorio',
        precio: 280000,
        imagen: 'mesa-de-noche-aconcagua.png',
        alt: 'Mesa de noche Aconcagua de madera con un cajón y estante inferior',
        descripcionCorta: 'Una pieza compacta con espacio para lo esencial.',
        destacado: false,
        descripcionLarga: [
            'La Mesa de Noche Aconcagua ocupa poco y guarda lo justo: un cajón para lo que uno no quiere ver y un estante abierto para el libro de turno. Su ancho de 45 cm entra al lado de la cama incluso en dormitorios chicos.',
            'La altura de 55 cm está calculada para quedar a la par de un colchón estándar, así el velador y el vaso de agua quedan a mano sin tener que estirarse.'
        ],
        caracteristicas: [
            { etiqueta: 'Medidas', valor: '45 × 40 × 55 cm' },
            { etiqueta: 'Estructura', valor: 'guatambú macizo certificado FSC®' },
            { etiqueta: 'Organización', valor: 'un cajón con freno y un estante inferior abierto' },
            { etiqueta: 'Herrajes', valor: 'corredera de cierre suave y tirador de bronce macizo' },
            { etiqueta: 'Acabado', valor: 'aceite de lino natural' },
            { etiqueta: 'Garantía', valor: '10 años en estructura, 5 años en acabados' }
        ]
    },
    {
        id: 'silla-de-trabajo-belgrano',
        nombre: 'Silla de Trabajo Belgrano',
        categoria: 'Trabajo',
        precio: 360000,
        imagen: 'silla-de-trabajo-belgrano.png',
        alt: 'Silla de trabajo Belgrano con respaldo de madera curvada y asiento tapizado',
        descripcionCorta: 'Ergonomía y materiales nobles para jornadas largas.',
        destacado: false,
        descripcionLarga: [
            'La Silla Belgrano demuestra que una silla de trabajo no tiene por qué parecer sacada de una oficina. Su respaldo de madera curvada al vapor sigue la curva lumbar y sostiene la espalda en las horas largas, sin mallas ni palancas a la vista.',
            'El asiento tapizado en lino orgánico apoya sobre espuma de alta resiliencia y la altura se regula con un mecanismo neumático oculto dentro de la columna de madera.'
        ],
        caracteristicas: [
            { etiqueta: 'Medidas', valor: '55 × 55 × 82-92 cm' },
            { etiqueta: 'Estructura', valor: 'madera curvada al vapor con columna neumática oculta' },
            { etiqueta: 'Tapizado', valor: 'lino orgánico en tono arena' },
            { etiqueta: 'Regulación', valor: 'altura neumática de 82 a 92 cm' },
            { etiqueta: 'Acabado', valor: 'aceite de lino natural' },
            { etiqueta: 'Garantía', valor: '10 años en estructura, 5 años en acabados' }
        ]
    },
    {
        id: 'sillas-cordoba',
        nombre: 'Sillas Córdoba',
        categoria: 'Comedor',
        precio: 190000,
        imagen: 'sillas-cordoba.png',
        alt: 'Sillas Córdoba de comedor en madera clara con asiento de fibra trenzada',
        descripcionCorta: 'Silueta liviana y resistencia para reunirse alrededor de la mesa.',
        destacado: false,
        descripcionLarga: [
            'Las Sillas Córdoba pesan poco más de cuatro kilos, lo que las hace fáciles de correr cuando llega gente de más. Esa liviandad no sale de ahorrar material sino de una estructura calculada, capaz de soportar 120 kg sin crujir.',
            'El asiento de fibra vegetal trenzada a mano se ventila solo, así que no se recalienta en verano ni se marca después de una sobremesa larga. El precio es por unidad.'
        ],
        caracteristicas: [
            { etiqueta: 'Medidas', valor: '45 × 50 × 82 cm' },
            { etiqueta: 'Peso', valor: '4,2 kg por silla' },
            { etiqueta: 'Estructura', valor: 'guatambú macizo certificado FSC®' },
            { etiqueta: 'Asiento', valor: 'fibra vegetal trenzada a mano' },
            { etiqueta: 'Carga máxima', valor: '120 kg' },
            { etiqueta: 'Garantía', valor: '10 años en estructura, 5 años en acabados' }
        ]
    },
    {
        id: 'sillon-copacabana',
        nombre: 'Sillón Copacabana',
        categoria: 'Living',
        precio: 620000,
        imagen: 'sillon-copacabana.png',
        alt: 'Sillón Copacabana tapizado de volumen amplio con patas de madera',
        descripcionCorta: 'Un refugio personal de volumen amable y tacto suave.',
        destacado: false,
        descripcionLarga: [
            'El Sillón Copacabana es la pieza más mullida de la colección. Su volumen generoso y el respaldo alto arman una especie de refugio dentro del living, ideal para el rincón de leer.',
            'Debajo de la apariencia blanda hay una estructura de madera maciza y un entramado de cinchas elásticas que evita que el asiento se hunda con los años.'
        ],
        caracteristicas: [
            { etiqueta: 'Medidas', valor: '95 × 90 × 95 cm' },
            { etiqueta: 'Estructura', valor: 'madera maciza con entramado de cinchas elásticas' },
            { etiqueta: 'Tapizado', valor: 'bouclé en tono crudo' },
            { etiqueta: 'Relleno', valor: 'espuma de alta resiliencia con envoltura de fibra siliconada' },
            { etiqueta: 'Acabado', valor: 'aceite de lino natural en las patas' },
            { etiqueta: 'Garantía', valor: '10 años en estructura, 5 años en acabados' }
        ]
    }
];

function formatearPrecio(precio) {
    return '$' + precio.toLocaleString('es-AR');
}

// Simula la demora de una peticion al servidor.
function obtenerProductos() {
    return new Promise(resolve => {
        setTimeout(() => resolve(PRODUCTOS), 400);
    });
}

function obtenerProductoPorId(id) {
    return PRODUCTOS.find(producto => producto.id === id);
}
