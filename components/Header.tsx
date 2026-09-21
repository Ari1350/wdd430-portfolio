import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}