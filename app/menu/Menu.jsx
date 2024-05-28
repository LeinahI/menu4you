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
      <section ref={ref} className="grid grid-cols-12 mt-20 ">
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
        <div className="col-span-12 mt-20 mb-20 px-20">
          <div class="flex flex-col w-full text-primary">
            <div class="grid pb-5 text-5xl place-items-center border-b-2 border-[#b8926b]">
              Hot Beverages
            </div>
            <div class="divider"></div>
            <div class="grid pb-5 text-5xl place-items-center border-b-2 border-[#b8926b]">
              Cold Beverages
            </div>
            <div class="divider"></div>
            <div class="grid  text-5xl place-items-center">
              Sweet Pastries
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Menu;
