import React, { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cinzel_Decorative } from "next/font/google";
import Image from "next/image";
import { MenuList } from "../constants";
const cinzel_dec = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const Menu = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <section ref={ref} className="grid grid-cols-12 mt-20">
        {/* Menu Text */}
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
        {/* Menu List */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="col-span-12 2xs:mt-3 xs:mt-6 2xs:px-10 md:px-14 mb-14"
        >
          <div class="flex flex-col w-full text-primary">
            {MenuList.map((item) => (
              <div key={item.id}>
                <div class="grid cursor-pointer text-center 2xs:text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl place-items-center">
                  <span
                    onMouseOver={() => setIsHovered(item.id)}
                    onMouseOut={() => setIsHovered(false)}
                  >
                    {item.title}
                    <AnimatePresence>
                      {isHovered === item.id && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: -100,
                            x: item.init,
                            rotate: item.rotate,
                          }}
                          animate={{ opacity: 1, x: item.animate }}
                          exit={{ opacity: 0, x: item.init }}
                          transition={{ duration: 0.5 }}
                        >
                          <Image
                            src={item.image}
                            className="mx-auto select-none absolute"
                            height={item.height}
                            width={item.width}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </span>
                </div>
                <hr className="border-[#b8926b] 2xs:my-0 sm:my-2 md:my-5 lg:my-8 lg:border lg:mx-20 xl:mx-44" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
});

export default Menu;
