import { FunctionComponent } from "react";
import { Link } from "react-scroll";

interface NavbarItem {
  name: string;
}

const NavbarItems: Array<NavbarItem> = [
  { name: "Home" },
  { name: "About" },
  { name: "Skills" },
  { name: "Experience" },
  { name: "Work" },
  { name: "References" },
  { name: "Contact" },
];

const Navbar: FunctionComponent = () => {
  return (
    <nav className="sticky top-0 border-b-[0.5px] bg-white border-b-darkerblue border-opacity-30 z-10">
      <ul className="flex gap-10 text-[18px] justify-center items-center py-5">
        {NavbarItems.map(({ name }, idx) => (
          <Link
            key={idx}
            spy
            smooth
            offset={-70}
            to={name.toLowerCase()}
            className="h-fit border-b border-opacity-0 border-b-darkerblue hover:border-opacity-100 transition duration-300 hover:text-darkerblue "
          >
            <li className="py-1 cursor-pointer uppercase text-sm">{name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
