import { ReactNode, ReactElement } from 'react'

export interface AppState {
	showCart: boolean
	cartItems: Product[]
	totalPrice: number
	totalQuantities: number
	qty: number

	foundProduct: any
	index: number

	onAdd: ({ product, quantity }: { product: Product; quantity: number }) => void
	onRemove: (product: Product) => void
	toggleCartItemQuanitity: ({ id, value }: { id: any; value: any }) => void
	incQty: () => void
	decQty: () => void
}

export type Page = {
	pageTitle: string
	appendBrandToTitle?: boolean
	metaDescription: string
	noIndex?: boolean
	pageHead?: ReactElement
	children: ReactNode
	disablePadding: boolean
}

export type Product = {
	_id?: any
	image: string
	name: string
	slug: any
	price: number
	quantity?: number
}

export type Banner = {
	heroBanner: any
}
