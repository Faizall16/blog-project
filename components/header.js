import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm-order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" className="input-text" placeholder="Search..."/>
                </div>
                <div className="shrink w-80 sm:order-2">
                    <Link href={"/"} className="font-bold uppercase text-3xl">True Type Blog</Link>
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <Image src={"/images/Forcepoint Logo _ Real Company _ Alphabet, Letter F Logo.png"} width={80} height={60}></Image>
                    </div>
                </div>
            </div>
            
        </header>
    )
}