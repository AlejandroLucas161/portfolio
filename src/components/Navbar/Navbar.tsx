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
    <nav className="fixed w-screen border-b-[0.5px] border-b-darkerblue border-opacity-30">
      <ul className="h-fit flex gap-10 text-[18px] justify-center">
        {NavbarItems.map(({ name }, idx) => (
          <Link key={idx} to={name} spy smooth>
            <li className="my-4 py-2 border-b border-opacity-0 border-b-darkerblue hover:border-opacity-100 transition duration-300 hover:text-darkerblue cursor-pointer">
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
