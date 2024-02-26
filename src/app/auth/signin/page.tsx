"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ReloadIcon } from "@radix-ui/react-icons"
import { useState } from "react";
import { useRouter } from "next/navigation";

function SignIn() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	async function handleSignIn() {
		setIsLoading(true)
		await new Promise((res) => setTimeout(res, 3000));
		router.push("/")
	}

	return (
		<main className="w-full h-screen flex justify-center bg-zinc-50">
			<div className="py-10 px-16 h-max mt-20 bg-white shadow-lg shadow-black/10 rounded-md">
				<h1 className="font-bold text-2xl text-zinc-700 mb-8">Bem vindo de volta</h1>
				<form>
					<div className="mb-5">
						<Label htmlFor="email">E-mail</Label>
						<Input  id="email" type="email" />
					</div>
					<div className="mb-10">
						<div className="flex justify-between items-center">
							<Label htmlFor="email">Senha</Label>
							<Link href="#" className="text-sm text-blue-600">Esqueceu a senha?</Link>
						</div>
						<Input id="password" type="password" />
					</div>
					<Button className="w-full mb-4" disabled={isLoading} onClick={handleSignIn}> 
						{isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin"/>}
						Entrar
					</Button>
					<div className="flex justify-between items-center mb-4">
						<hr className="w-20 h-0.5 bg-zinc-50 flex-1"/>
						<span className="px-3">Ou</span>
						<hr className="w-20 h-0.5 bg-zinc-50 flex-1"/>
					</div>
					<Link href="/auth/register">
						<Button className="w-full" variant="outline">Criar uma conta</Button>
					</Link>
				</form>
			</div>
		</main>
	)
}

export default SignIn;