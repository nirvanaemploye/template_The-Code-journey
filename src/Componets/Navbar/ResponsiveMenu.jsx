import { AnimatePresence, motion } from "framer-motion";

const Navbarmenu = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Services", link: "#" },
  { id: 3, name: "About Us", link: "#" },
  { id: 4, name: "Our Team", link: "#" },
  { id: 5, name: "Contact Us", link: "#" },
];

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-40 lg:hidden backdrop-blur-sm"
        >
          <div className="text-xl font-semibold uppercase  py-10 m-6 rounded-3xl border-2 border-primary bg-primary/70">
            <ul className="flex flex-col gap-10 justify-center items-center text-white">
              {Navbarmenu.map((Menu) => (
                <li key={Menu.id} >
                  <a
                    href={Menu.link}
                    className="inline-block py-2 px-3 hover:text-secondary relative group"
                  >
                    <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    {Menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
