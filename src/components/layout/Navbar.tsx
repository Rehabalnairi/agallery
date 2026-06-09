import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/gallery", label: "Exhibitions" },
  { href: "/gallery", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111018]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-wide text-stone-50">
          {/*<span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 font-serif text-xl">
            A
          </span>*/}
          ArtGallery
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-stone-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
       
      </nav>
    </header>
  );
}
