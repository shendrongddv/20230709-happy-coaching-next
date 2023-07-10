import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";

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

export function NavbarToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="text-primary">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        {/* Content */}
        <div className="flex flex-col items-start gap-4 py-8">
          {navbarLinks?.map((item) => (
            <SheetClose key={item.id} asChild>
              <Link
                href={item.url}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    className:
                      "t w-full -translate-x-4 justify-start text-primary transition duration-300 ease-linear hover:translate-x-0",
                  })
                )}
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </div>
        {/* ./ Content */}

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary" type="submit" className="text-white">
              Get your free guide now
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
