import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="mb-10">
        <Link href="/" className="font-heading text-2xl no-underline">The Waiting Club</Link>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="no-underline">Home</Link>
          </li>
          <li>
            <Link href="/what-arrives" className="no-underline">What Arrives</Link>
          </li>
          <li>
            <Link href="/join" className="no-underline">Join</Link>
          </li>
          <li>
            <Link href="/about" className="no-underline">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

