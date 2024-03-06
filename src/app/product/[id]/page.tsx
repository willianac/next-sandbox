import Navbar from "@/components/navbar";
import { ProductCardProps } from "@/components/product-card";
import Image from "next/image";
import { StarFilledIcon,  } from "@radix-ui/react-icons";
import { AiOutlineSafety } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { Button } from "@/components/ui/button";
import ProductSelect from "@/components/product-select";

async function Product({ params }: { params: { id: string } }) {
	const res = await fetch("http://localhost:3001/products/" + params.id, {cache: "no-store"})
	const product = await res.json() as ProductCardProps

	return (
		<>
			<Navbar />
			<main className="bg-white w-full max-w-[1180px] mx-auto mt-20 shadow shadow-zinc-700/15 rounded-md">
				<div className="flex justify-between p-6">
					<div className="w-3/4">
						<Image src={`/${product.image}.webp`} alt="imagem do produto" width={450} height={150}/>
					</div>
					<div>
						<div className="border border-zinc-200 w-80 p-4 rounded-md">
							<h1 className="text-xl font-semibold text-zinc-800 mb-1.5">{product.title}</h1>
							<div className="flex items-center mb-4">
								<small className="text-zinc-400 mr-2">4.7</small>
								<StarFilledIcon className="text-yellow-400"/>
								<StarFilledIcon className="text-yellow-400"/>
								<StarFilledIcon className="text-yellow-400"/>
								<StarFilledIcon className="text-yellow-400"/>
							</div>
							<div className="mb-6">
								<h2 className="text-2xl text-zinc-800">R$ {product.price}</h2>
								<h3 className="text-zinc-500">Ou em {product.installment} vez de R$ {product.price}</h3>
							</div>
							<div className="mb-2">
								<span className="text-amber-500 font-medium">Em estoque</span>
							</div>
							<div className="mb-4">
								<ProductSelect 
									trigger="Quantidade"
									items={[
										{label: 1, value: "1"},
										{label: 2, value: "2"},
										{label: 3, value: "3"},
										{label: 4, value: "4"}
									]}
								/>
							</div>
							<div className="mb-5">
								<Button className="w-full bg-amber-500 hover:bg-amber-600 text-black mb-3">Comprar</Button>
								<Button variant="outline" className="w-full text-amber-500 hover:text-amber-600">
									<IoMdCart className="text-lg mr-2"/>
									Adicionar ao carrinho
								</Button>
							</div>
							<div className="flex gap-x-2">
								<AiOutlineSafety className="text-2xl text-green-700"/>
								<p className="text-xs text-zinc-500">Esse produto é vendido e entregue por E-commerce</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Product;