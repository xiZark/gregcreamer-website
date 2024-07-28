import Image from "next/image";
import Link from "next/link";
import greglogo from "~/images/greglogo.webp";

const Navbar = () => {
  return (
    <nav className="flex flex-row">
      <div className="flex p-4">
        <Link href="/">
          <Image
            src={greglogo}
            alt="Logo of the Website Owner"
            sizes="100vw"
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </Link>
      </div>
      <div className="justify-items-end flex items-end border border-red-400">
        <div className="p-8 bg-green-500"><Link href="/">Home</Link></div>
        <div className="p-8 bg-yellow-500"><Link href="/about">About</Link></div>
        <div className="p-8 bg-red-600"><Link href="/portfolio">Portfolio</Link></div>
      </div>
    </nav>
  );
};

export default Navbar;
