import Navbar from "@/components/navbar";
import ProductCard, { ProductCardProps } from "@/components/product-card";
import Link from "next/link";

type Product = ProductCardProps & {id: string}

export default async function Home() {
	const res = await fetch("http://localhost:3001/products")
	const products = await res.json() as Product[]

  return (
		<>
			<Navbar />
			<main className="grid grid-cols-5 w-full max-w-[1180px] mx-auto pt-14 gap-y-9">
				{products?.map(item => (
					<Link href={`/product/${item.id}`} key={item.id}>
						<ProductCard 
							image={item.image}
							price={item.price}
							title={item.title}
							installment={item.installment}
						/>
					</Link>
				))}
			</main>
		</>
  );
}
