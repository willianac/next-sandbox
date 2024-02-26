"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Register() {

	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	async function handleRegister() {
		setIsLoading(true)
		await new Promise((res) => setTimeout(res, 3000));
		router.push("/")
	}

	return (
		<main className="w-full h-screen flex justify-center bg-zinc-50">
		<div className="py-10 px-16 h-max mt-20 bg-white shadow-lg shadow-black/10 rounded-md">
			<h1 className="font-bold text-2xl text-zinc-700 mb-8">Crie sua conta</h1>
			<form>
			<div className="mb-5">
					<Label htmlFor="name">Nome</Label>
					<Input  id="name" type="name" />
				</div>
				<div className="mb-5">
					<Label htmlFor="email">E-mail</Label>
					<Input  id="email" type="email" />
				</div>
				<div className="mb-10">
					<Label htmlFor="email">Senha</Label>
					<Input id="password" type="password" />
				</div>
				<Button className="w-full mb-4" disabled={isLoading} onClick={handleRegister}> 
					{isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin"/>}
					Criar
				</Button>
				<div className="flex justify-between items-center mb-4">
					<hr className="w-20 h-0.5 bg-zinc-50 flex-1"/>
					<span className="px-3">Ou</span>
					<hr className="w-20 h-0.5 bg-zinc-50 flex-1"/>
				</div>
				<Link href="/auth/signin">
					<Button className="w-full" variant="outline">Já tem uma conta? Entre</Button>
				</Link>
			</form>
		</div>
	</main>
	)
}

export default Register;
