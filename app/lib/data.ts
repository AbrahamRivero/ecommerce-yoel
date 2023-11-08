import { client } from './client'

export const fetchProducts = async () => {
	const query = '*[_type == "product"]'
	const products = await client.fetch(query)

	return products
}

export const fetchBanner = async () => {
	const query = '*[_type == "banner"]'
	const banner = await client.fetch(query)

	return banner
}

export const fetchBestSellers = async () => {
	const query = '*[_type == "bestSeller"]'
	const bestSellers = await client.fetch(query)

	return bestSellers
}
