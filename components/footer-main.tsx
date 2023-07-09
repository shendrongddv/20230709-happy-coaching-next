import Image from "next/image";
import Link from "next/link";

const footerMenu = [
  {
    id: 1,
    label: "Pages",
    links: [
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
        label: "Extra Sales/Landingpage",
        url: "/",
      },
      {
        id: 5,
        label: "Free Guide",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    label: "Contact",
    links: [
      {
        id: 1,
        label: "+123 456 789",
        url: "/",
      },
      {
        id: 2,
        label: "hello@happydigital.nl",
        url: "/",
      },
      {
        id: 3,
        label: "Instagram",
        url: "/",
      },
      {
        id: 4,
        label: "LinkedIn",
        url: "/",
      },
    ],
  },
];

const socialLinks = [
  {
    id: 1,
    label: "LinkedIn",
    link: "/",
    img: "linkedin.svg",
  },
  {
    id: 2,
    label: "Facebook",
    link: "/",
    img: "facebook.svg",
  },
  {
    id: 3,
    label: "Dribble",
    link: "/",
    img: "dribble.svg",
  },
];

const FooterMain = () => {
  return (
    <footer className="px-4 text-[#4A556C]/50">
      <div className="container py-16">
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-3">
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Happy Coaching"
                width={150}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
            <p>
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          {footerMenu?.map((item) => (
            <div key={item.id} className="space-y-6">
              <h4 className="text-sm font-extrabold text-[#333461]">
                {item.label}
              </h4>

              <ul className="space-y-3">
                {item.links?.map((item) => (
                  <li key={item.id}>
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container border-t border-[#E4E7EC] py-8">
        <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
          <span>Madi with Love by Happy Digital</span>

          <div className="flex items-center gap-6">
            {socialLinks?.map((item) => (
              <Link key={item.id} href={item.link}>
                <Image
                  src={`/icons/${item.img}`}
                  alt={item.label}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
