import Link from "next/link";

export default function Home() {

  return (
    <main className="flex w-full h-screen items-center justify-center">
			<Link href="/auth/signin">
				<button className="p-3 bg-indigo-500">Sign In</button>
			</Link>
    </main>
  );
}
