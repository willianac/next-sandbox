import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
	return (
		<header className="w-full h-14 bg-amber-500">
			<div className="w-full max-w-[1180px] mx-auto flex justify-between items-center h-full">
				<h1 className="font-bold text-lg text-zinc-800">E-commerce</h1>
				<nav>
					<ul className="flex gap-x-2 items-center">
						<li><Link href="/auth/signin" className="text-zinc-800 font-medium hover:text-black">Entrar</Link></li>
						<li>
							<Link href="/auth/register">
								<Button variant="ghost">
									<span className="text-base font-medium text-zinc-800">Criar conta</span>
									<ChevronRightIcon className="ml-1"/>
								</Button>
							</Link>
						</li>
						<li>
							<IoCartOutline className="text-2xl text-zinc-800"/>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar;