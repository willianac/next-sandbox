"use client"
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

export default function Home() {
	const queryClient = useQueryClient()

	const rev = () => {
		queryClient.invalidateQueries({queryKey: ["repos"]})
	}

  return (
    <main className="flex w-full h-screen items-center justify-center">
			<Link href="/dashboard">
				<button className="p-3 bg-indigo-500">Dashboard</button>
			</Link>
			<button className="p-3 bg-pink-400" onClick={rev}>Revalidate</button>
    </main>
  );
}
