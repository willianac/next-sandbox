import Navbar from "@/components/navbar";
import ProductCard from "@/components/product-card";

export default function Home() {

  return (
		<>
		<Navbar />
    <main className="flex w-full max-w-[1180px] mx-auto items-center justify-center min-h-[calc(100vh-56px)]">
			<ProductCard />
    </main>
		</>
  );
}
