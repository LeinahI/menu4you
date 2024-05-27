import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Cinzel_Decorative } from "next/font/google";
const cinzel_dec = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="grid grid-cols-12 mt-20">
      <div className="col-span-12 text-left">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={`${cinzel_dec.className} select-none ml-10 2xs:text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary font-bold`}
        >
          About Us
        </motion.p>
        <div className="2xs:mt-5 lg:mt-10 xl:mt-20 mb-20">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-primary 2xs:text-xs sm:text-sm md:text-base lg:text-2xl xl:text-4xl 2xl:text-6xl tracking-wide leading-loose 2xs:px-8 lg:px-24 xl:px-44"
          >
            Welcome to Menu 4 You, where each sip is a luxurious pleasure.
            Experience our handcrafted coffees; every last drop serves as an
            excellent symphony. Discover the richness of our drinks and the
            lavish taste of our sweets.
          </motion.p>
        </div>
      </div>
    </section>
  );
});

export default About;
