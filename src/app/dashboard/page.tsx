"use client"

import { useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Dashboard() {
	const queryClient = useQueryClient()
	const router = useRouter()

	const getRepos = async () => {
		const res = await fetch("https://api.github.com/users/willianac/repos")
		return await res.json()
	}

	const handle = () => {
		router.push("/")
	}

	const { data, isFetching } = useQuery({
		queryKey: ["repos"],
		staleTime: 60 * 1000,
		queryFn: getRepos
	}, queryClient)

	return (
		<>
			<h1>Hello World</h1>
			<button className="p-3 bg-yellow-700" onClick={handle}>Voltar</button>
			{data?.length && data.map((repo) => (
				<div>
					<p>{repo.name}</p>
					<br />
				</div>
			))}
		</>
	)
}

export default Dashboard;