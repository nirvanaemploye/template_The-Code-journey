import { FaBell } from "react-icons/fa";
import BgImg from "../../assets/bg.png";
import { motion } from "motion/react";

const bgStyle = {
  backgroundImage: `url(${BgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const Subscribe = () => {
  return (
    <>
      <section className="bg-[#f7f7f7]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={bgStyle}
          className="container py-24 md:py-48"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className=" flex flex-col justify-center"
          >
            <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
              <h1 className="text-4xl font-bold !leading-snug">
                450+ Students are already learning from us
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                tempora nam vel.
              </p>
              <a
                href="#"
                className="primary-btn !mt-8 inline-flex items-center gap-4 group"
              >
                Subscribe Now{" "}
                <FaBell className="group-hover:animate-bounce group-hover:text-2xl duration-200" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Subscribe;
