import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-50">
      <div className="flex flex-row justify-between items-center text-center py-3 px-12">
        <Link href={"/"} className="font-bold uppercase text-3xl">
          True Type Blog
        </Link>

        <Image
          src={
            "/images/Forcepoint Logo _ Real Company _ Alphabet, Letter F Logo.png"
          }
          width={80}
          height={60}
        />
      </div>
    </header>
  );
}
