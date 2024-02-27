import Image from "next/image";
import img from "../../public/bis.webp";

function ProductCard() {
	return (
		<div className="flex flex-col border px-8 py-4 rounded-md border-zinc-200 shadow-lg shadow-zinc-400/25 max-w-56 gap-y-7 bg-white">
			<div>
				<Image src={img} alt="bis image"/>
			</div>
			<div className="flex flex-col">
				<h1 className="mb-4 font-medium">Bis Xtra 300g</h1>
				<span className="font-semibold">R$ 3,49</span>
				<span className="text-sm text-zinc-500">em 1x de R$3,49</span>
			</div>
		</div>
	)
}

export default ProductCard;