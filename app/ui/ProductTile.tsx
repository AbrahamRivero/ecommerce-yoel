import { Product } from '../lib/definitions'
import { urlFor } from '../lib/client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductTile = ({ image, name, slug, price }: Product) => {
	console.log('🚀 ~ file: ProductTile.tsx:8 ~ ProductTile ~ image:', image)

	return (
		<div>
			<Link href={`/product/${slug.current}`}>
				<div className="product-card">
					<Image
						src={urlFor(image && image[0]).url()}
						width={250}
						height={250}
						className="product-image"
						alt={name}
					/>
					<p className="product-name">{name}</p>
					<p className="product-price">${price.toFixed(2)}</p>
				</div>
			</Link>
		</div>
	)
}

export default ProductTile
