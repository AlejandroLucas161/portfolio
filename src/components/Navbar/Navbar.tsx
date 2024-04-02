import { FunctionComponent } from "react";
import { Link } from "react-scroll";

interface NavbarItem {
  name: string;
}

const NavbarItems: Array<NavbarItem> = [
  { name: "About" },
  { name: "Skills" },
  { name: "Experience" },
  { name: "Work" },
  { name: "Testimonials" },
  { name: "Contact" },
];

const Navbar: FunctionComponent = () => {
  return (
    <nav className="sticky top-0 border-b-[0.5px] bg-white border-b-darkerblue border-opacity-30 z-10">
      <ul className="flex gap-10 text-[18px] justify-center items-center py-5">
        {NavbarItems.map(({ name }, idx) => (
          <Link
            key={idx}
            to={name.toLowerCase()}
            spy
            smooth
            className="h-fit"
            offset={-70}
          >
            <li className="py-1 border-b border-opacity-0 border-b-darkerblue hover:border-opacity-100 transition duration-300 hover:text-darkerblue cursor-pointer uppercase text-sm">
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
