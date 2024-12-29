import Logo from "@components/icons/logo";
import { navigationItems } from "@components/navbar/definitions";
import Item from "@components/navbar/item";

const Navbar = () => (
  <nav className="flex flex-rows items-center justify-between bg-transparent py-8 px-12">
    <div className="flex gap-3">
      <Logo className="w-8 h-8" />
      <p className="font-poppins text-light-gray text-2xl">David Reyes</p>
    </div>
    <ul className="font-poppins text-light-gray text-2xl flex justify-between gap-24">
      {navigationItems.map((item, index) => (
        <Item
          className="relative after:absolute after:content-[''] after:w-full after:h-5 after:-translate-x-2/4 after:left-2/4 after:-bottom-4 after:bg-imperfect-line after:bg-no-repeat after:bg-center after:scale-0 after:origin-left after:transition-transform after:duration-300 after:ease-in hover:after:scale-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-light-green hover:to-light-orange"
          key={index}
          text={item.text}
          url={item.url}
        />
      ))}
    </ul>
  </nav>
);

export default Navbar;
