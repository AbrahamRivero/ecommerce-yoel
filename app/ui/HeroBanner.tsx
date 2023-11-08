import { fetchBanner } from '../lib/data'
import { urlFor } from '../lib/client'
import Link from 'next/link'
import Image from 'next/image'

const HeroBanner = async () => {
	const heroBanner = await fetchBanner()

	return (
		<div className="hero-banner-container">
			<div>
				<p className="beats-solo">{heroBanner[0].smallText}</p>
				<h3>{heroBanner[0].midText}</h3>
				<h1>{heroBanner[0].largeText1}</h1>
				{heroBanner[0].image && (
					<Image
						src={urlFor(heroBanner[0].image).url()}
						alt="hero-banner-image"
						className="hero-banner-image"
						width={30}
						height={20}
					/>
				)}

				<div>
					<Link href={`/product/${heroBanner[0].product}`}>
						<button type="button">{heroBanner[0].buttonText}</button>
					</Link>
					<div className="desc">
						<h5>Description</h5>
						<p>{heroBanner[0].desc}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroBanner
