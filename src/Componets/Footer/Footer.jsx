import { motion } from "motion/react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <footer className="py-28 bg-[#f7f7f7]">
        <motion.div
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
            {/* first Section  */}
            <div className="space-y-4 max-w-[300px]">
              <h1 className="text-2xl font-bold">The Coding Journey</h1>
              <p className="text-dark2">
                TCJ is a platform dedicated to empowering aspiring developers.
                From beginner tutorials to advanced programming concepts, we
                provide a comprehensive learning experience designed to help you
                master coding skills, build projects, and launch your tech
                career.
              </p>
            </div>
            {/* Second Section  */}
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Courses</h1>
                <div className="text-dark2">
                  <ul className="space-y-2 text-lg">
                    <li className="cursor-pointer hover:text-secondary duration-300">
                      Web Development
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-300">
                      Software Development
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-300">
                      Apps Development
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-300">
                      E-learning
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Links</h1>
                <div className="text-dark2">
                  <ul className="space-y-2 text-lg">
                    <li className="cursor-pointer hover:text-secondary duration-300">
                    Home
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-300">
                    Services
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-300">
                    About
                    </li>
                    <li className="cursor-pointer hover:text-secondary duration-300">
                    Contact
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Third Section  */}
            <div className="space-y-4 max-w-[300px]">
                <h1 className="text-2xl font-bold">Get In Touch</h1>
                <div className="flex items-center">
                    <input type="text" placeholder="Enter your email"
                    className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2" />
                    <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">Go</button>
                </div>
            {/* Social Icons  */}
            <div className="flex space-x-6 py-3">
                <a href="#">
                    <FaWhatsapp className=" cursor-pointer hover:text-primary hover:scale-110 duration-300"/>
                </a>
                <a href="#">
                    <FaInstagram className=" cursor-pointer hover:text-primary hover:scale-110 duration-300"/>
                </a>
                <a href="#">
                    <TbWorldWww className=" cursor-pointer hover:text-primary hover:scale-110 duration-300"/>
                </a>
                <a href="#">
                    <FaYoutube className=" cursor-pointer hover:text-primary hover:scale-110 duration-300"/>
                </a>
            </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
