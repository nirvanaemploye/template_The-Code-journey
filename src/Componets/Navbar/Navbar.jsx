import { IoMdMenu,  } from "react-icons/io";
import { motion } from "motion/react";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { IoCloseSharp } from "react-icons/io5";

const Navbarmenu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Services",
    link: "#",
  },
  {
    id: 3,
    name: "About Us",
    link: "#",
  },
  {
    id: 4,
    name: "Our Team",
    link: "#",
  },
  {
    id: 5,
    name: "Contact Us",
    link: "#",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="container py-10 flex justify-between items-center static"
        >
          {/* Logo Secton  */}
          <div>
            <h1 className="text-2xl font-bold">The Coding Journey</h1>
          </div>
          {/* Menu Section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-3">
              {Navbarmenu.map((Menu) => (
                <li key={Menu.id}>
                  <a
                    href={Menu.link}
                    className="inline-block py-2 px-3 hover:text-secondary hover:font-semibold relative group"
                  >
                    <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    {Menu.name}
                  </a>
                </li>
              ))}
              <button className="primary-btn">Sign In</button>
            </ul>
          </div>
          {/* Mobail Hamburger Meniu Section */}
          <div className="lg:hidden" onClick={() => setOpen(!open) }>
            {open ? <IoCloseSharp className="text-4xl" />:<IoMdMenu className="text-4xl" />}
          </div>
        </motion.div>
      </nav>
      {/* mobile Sidebar Section  */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
