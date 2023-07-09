import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const navbarLinks = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "Services",
    url: "/",
  },
  {
    id: 3,
    label: "About Us",
    url: "/",
  },
  {
    id: 4,
    label: "Extra Salespage",
    url: "/",
  },
];

const NavbarMain = () => {
  return (
    <header className="px-4">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Happy Coaching"
              width={150}
              height={28}
              className="h-7 w-auto"
            />
          </Link>

          {/* Nav */}
          <nav className="hidden items-center justify-center gap-8 md:flex">
            {navbarLinks?.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="text-[15px] text-[#4A556C]"
              >
                {item.label}
              </Link>
            ))}

            <Button variant="destructive" size="default">
              Get your free guide now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarMain;
