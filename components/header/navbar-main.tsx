import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { NavbarToggle } from "./navbar-toggle";

const navbarLinks = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "Services",
    url: "services",
  },
  {
    id: 3,
    label: "About Me",
    url: "about",
  },
  {
    id: 4,
    label: "Extra Salespage",
    url: "extra",
  },
];

const NavbarMain = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white px-4">
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

            <Link
              href="guide"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  className: "text-white",
                })
              )}
            >
              Get your free guide now
            </Link>
          </nav>

          {/* Toggle */}
          <div className="flex md:hidden">
            <NavbarToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarMain;
