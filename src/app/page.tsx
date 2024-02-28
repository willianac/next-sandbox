import Navbar from "@/components/navbar";
import ProductCard, { ProductCardProps } from "@/components/product-card";

type Products = ProductCardProps & {id: string}

export default async function Home() {
	const res = await fetch("http://localhost:3000/products")
	const products = await res.json() as Products[]
	console.log(products)

  return (
		<>
			<Navbar />
			<main className="grid grid-cols-5 w-full max-w-[1180px] mx-auto pt-14 gap-y-9">
				{products.map(item => (
					<ProductCard 
						image={item.image}
						price={item.price}
						title={item.title}
						key={item.id}
						installment={item.installment}
					/>
				))}
			</main>
		</>
  );
}
