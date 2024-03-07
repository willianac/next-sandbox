"use client"

import ProductCard, { ProductCardProps } from "@/components/product-card"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"

type Product = ProductCardProps & {id: string}

function Products() {
	const { data, isLoading, isError } = useQuery<Product[]>({
		queryKey: ["products"],
		queryFn: async () => {
			const res = await fetch("http://localhost:3001/products", {cache: "no-store"})
			await new Promise((res) => setTimeout(res, 2000))
			return await res.json()
		},
		staleTime: 60 * 1000
	}) 

	return (
		<main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full max-w-[1180px] mx-auto pt-14 gap-y-9">
			{isLoading && 
				Array.from({length: 100}).map((_, i) => {
					return (
						<Skeleton key={i} className="w-[224px] h-[384px]"/>
					)
				})
			}
			{data?.map(item => (
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
	)
}

export default Products;