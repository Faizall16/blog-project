import { ImInstagram, ImFacebook, ImTwitter } from "react-icons/im";
import Link from "next/link";
import Thanks from "./_child/thanks";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <Thanks />
      <div className="container mx-auto flex justify-center py-2">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <ImInstagram color="#888888" />
            </Link>
            <Link href={"/"}>
              <ImFacebook color="#888888" />
            </Link>
            <Link href={"/"}>
              <ImTwitter color="#888888" />
            </Link>
          </div>
          <p className="py-5 text-gray-400">True Type Blog ©2025</p>
        </div>
      </div>
    </footer>
  );
}
