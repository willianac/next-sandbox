import Navbar from "@/components/navbar";
import { ProductCardProps } from "@/components/product-card";
import Products from "./products";

export default async function Home() {
	// const res = await fetch("http://localhost:3000/api/products", {cache: "no-store"})
	// const data = await res.json()
	// console.log(data.products[0])
  return (
		<>
			<Navbar />
			<Products />
		</>
  );
}