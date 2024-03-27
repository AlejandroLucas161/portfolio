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
    <nav className="sticky top-0 w-screen border-b-[0.5px] bg-white border-b-darkerblue border-opacity-30 z-10">
      <ul className="h-[70px] flex gap-10 text-[18px] justify-center items-center">
        {NavbarItems.map(({ name }, idx) => (
          <Link key={idx} to={name} spy smooth className="h-fit">
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
