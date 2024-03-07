import Navbar from "@/components/navbar";
import { ProductCardProps } from "@/components/product-card";
import Products from "./products";

type Product = ProductCardProps & {id: string}

export default async function Home() {
  return (
		<>
			<Navbar />
			<Products />
		</>
  );
}