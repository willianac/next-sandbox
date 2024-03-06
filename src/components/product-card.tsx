import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

export type ProductCardProps = {
	image: StaticImageData | string
	title: string
	price: string
	installment?: number
}

function ProductCard({ image, title, price, installment }: ProductCardProps) {
	return (
		<div className="flex flex-col justify-between h-full max-h-96 border px-8 py-4 rounded-md border-zinc-200 shadow-lg shadow-zinc-400/25 max-w-56 gap-y-7 bg-white hover:shadow-zinc-400/60 hover:shadow-xl">
			<div>
				<Image src={`/${image}.webp`} alt="bis image" width="160" height="160"/>
			</div>
			<div className="flex flex-col">
				<h1 className="mb-4 font-medium">{title}</h1>
				<span className="font-semibold">R$ {price}</span>
				<span className="text-sm text-zinc-500">em {installment}x de R$3,49</span>
			</div>
			<div>
				<Button className="w-full" size="sm">comprar</Button>
			</div>
		</div>
	)
}

export default ProductCard;