import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Cinzel_Decorative } from "next/font/google";
const cinzel_dec = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const Menu = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="grid grid-cols-12 mt-20">
        <div className="col-span-12 text-right">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={`${cinzel_dec.className} select-none mr-10 2xs:text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary font-bold`}
          >
            Menu
          </motion.p>
        </div>
      </section>
      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </>
  );
});

export default Menu;
