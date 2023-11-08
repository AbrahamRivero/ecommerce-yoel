import { createClient } from '@sanity/client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
	projectId: '5mhycyjn',
	dataset: 'production',
	apiVersion: '2023-11-01',
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)
