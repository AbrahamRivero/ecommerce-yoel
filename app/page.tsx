import { fetchBestSellers, fetchProducts, fetchBanner } from './lib/data'
import { Product } from './lib/definitions'
import HeroBanner from './ui/HeroBanner'
import ProductTile from './ui/ProductTile'

export default async function Home() {
	const bestSellers = await fetchBestSellers()
	const products = await fetchProducts()

	const bestSellerResponse = bestSellers
		.map((bestSeller: { product: Product }) => bestSeller.product)
		.flat()
	const bestSellerArray = bestSellerResponse.flat()
	const filterBestSeller = products.filter((product: Product) =>
		bestSellerArray.some(
			(bestSeller: { _ref: any }) => bestSeller._ref === product._id
		)
	)
	return (
		<div>
			<HeroBanner />
			<div className="products-heading">
				<h2>Productos mejor vendidos</h2>
				<p>Hay muchos productos, no dude en llamarnos</p>
			</div>
			{!bestSellers || bestSellers.length <= 0 ? (
				<p>No hay productos disponibles</p>
			) : (
				<div className="products-container mb-3">
					{filterBestSeller?.map((product: Product) => (
						<ProductTile
							key={product._id}
							name={product.name}
							image={product.image}
							slug={product.slug}
							price={product.price}
						/>
					))}
				</div>
			)}
			<div className="products-container">
				{products?.map((product: Product) => (
					<ProductTile
						key={product._id}
						name={product.name}
						image={product.image}
						slug={product.slug}
						price={product.price}
					/>
				))}
			</div>
		</div>
	)
}
