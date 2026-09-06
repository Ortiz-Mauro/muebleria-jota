const featuredProducts = [
	{
		id: 'sofa-patagonia',
		name: 'Sofá Patagonia',
		price: 1200000,
		imagePath: './assets/images/sofa-patagonia.png',
		description: 'Sofá de tres cuerpos con líneas atemporales, cojines de plumón reciclado y patas cónicas de madera noble.',
		category: 'Living',
		altText: 'Sofá Patagonia de tres cuerpos de madera noble con cojines de plumón reciclado'
	},
	{
		id: 'butaca-mendoza',
		name: 'Butaca Mendoza',
		price: 450000,
		imagePath: './assets/images/butaca-mendoza.png',
		description: 'Butaca envolvente tapizada en bouclé Rosa Polvoriento con base giratoria de guatambú macizo.',
		category: 'Living',
		altText: 'Butaca Mendoza tapizada en bouclé Rosa Polvoriento con base giratoria de guatambú macizo'
	},
	{
		id: 'mesa-de-centro-araucaria',
		name: 'Mesa de Centro Araucaria',
		price: 680000,
		imagePath: './assets/images/mesa-de-centro-araucaria.png',
		description: 'Mesa de centro con tapa circular de mármol Patagonia y base de nogal macizo.',
		category: 'Living',
		altText: 'Mesa de centro Araucaria con tapa circular de mármol Patagonia y base de nogal macizo'
	},
	{
		id: 'mesa-comedor-pampa',
		name: 'Mesa Comedor Pampa',
		price: 950000,
		imagePath: './assets/images/mesa-comedor-pampa.png',
		description: 'Mesa de comedor de madera maciza, pensada para compartir encuentros cotidianos durante generaciones.',
		category: 'Comedor',
		altText: 'Mesa Comedor Pampa de madera maciza con diseño minimalista'
	}
];

// simula una llamada a una API para obtener los productos destacados con 1 segundo de retraso
function getFeaturedProducts() {
	return new Promise(resolve => {
		setTimeout(() => resolve(featuredProducts), 1000);
	});
}

// configura el enlace del primer producto destacado en la página principal
function configureProductDetailLink() {
	const detailLink = document.querySelector('#product-detail-link');
	const defaultProduct = featuredProducts[0];

	if (!detailLink || !defaultProduct) {
		return;
	}

	detailLink.href = `./pages/producto.html?id=${encodeURIComponent(defaultProduct.id)}`;
}

// renderiza los productos destacados en el contenedor correspondiente
async function renderFeaturedProducts() {
	const container = document.querySelector('#featured-products-container');

	if (!container) {
		return;
	}

	const products = await getFeaturedProducts();
	const priceFormatter = new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS',
		maximumFractionDigits: 0
	});

    // Limpia el contenedor antes de renderizar los productos
	container.replaceChildren();

    // Itera sobre los productos y crea las tarjetas de producto dinámicamente
	products.forEach(product => {
		const card = document.createElement('article');
		card.className = 'product-card';

		const imageContainer = document.createElement('div');
		imageContainer.className = 'product-card__media';

		const image = document.createElement('img');
		image.className = 'product-card__image';
		image.src = product.imagePath;
		image.alt = product.altText;
		imageContainer.appendChild(image);

		const content = document.createElement('div');
		content.className = 'product-card__content';

		const category = document.createElement('p');
		category.className = 'product-card__category';
		category.textContent = product.category;

		const title = document.createElement('h3');
		title.className = 'product-card__title';
		title.textContent = product.name;

		const description = document.createElement('p');
		description.className = 'product-card__description';
		description.textContent = product.description;

		const price = document.createElement('p');
		price.className = 'product-card__price';
		price.textContent = priceFormatter.format(product.price);

		const actions = document.createElement('div');
		actions.className = 'product-card__actions';

		const detailLink = document.createElement('a');
		detailLink.className = 'product-card__link';
		detailLink.href = `./pages/producto.html?id=${encodeURIComponent(product.id)}`;
		detailLink.textContent = 'Ver Detalle';
		detailLink.setAttribute('aria-label', `Ver detalle de ${product.name}`);

		const addToCartButton = document.createElement('button');
		addToCartButton.type = 'button';
		addToCartButton.className = 'btn-add-to-cart';
		addToCartButton.dataset.id = product.id;
		addToCartButton.setAttribute('aria-label', `Agregar ${product.name} al carrito`);
		addToCartButton.textContent = 'Añadir al carrito';
		addToCartButton.addEventListener('click', () => {
			if (typeof addToCart === 'function') {
				addToCart({
					id: product.id,
					name: product.name,
					price: product.price
				});
			}
		});

        // Agrega los elementos de acción al contenedor de acciones y luego agrega todo al contenedor principal
		actions.append(detailLink, addToCartButton);
		content.append(category, title, description, price, actions);
		card.append(imageContainer, content);
		container.appendChild(card);
	});
}

// Espera a que el DOM esté completamente cargado antes de renderizar los productos destacados
document.addEventListener('DOMContentLoaded', () => {
	configureProductDetailLink();
	renderFeaturedProducts();
});