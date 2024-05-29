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
      <section ref={ref} className="grid grid-cols-12 my-20">
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
        <div className="col-span-12 2xs:mt-3 xs:mt-6 2xs:px-10 md:px-14">
          <div class="flex flex-col w-full text-primary">
            <div class="grid text-center 2xs:text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl place-items-center border-b">
              Hot Beverages
            </div>
            <hr className="border-[#b8926b] 2xs:my-0 sm:my-2 md:my-4 lg:my-8 lg:border lg:mx-20 xl:mx-44" />
            <div class="grid text-center 2xs:text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl place-items-center border-b">
              Cold Beverages
            </div>
            <hr className="border-[#b8926b] 2xs:my-0 sm:my-2 md:my-5 lg:my-8 lg:border lg:mx-20 xl:mx-44" />
            <div class="grid text-center 2xs:text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl place-items-center">
              Sweet Pastries
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Menu;
