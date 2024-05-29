import React, { forwardRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Cinzel_Decorative } from "next/font/google";
import Image from "next/image";
import { MenuList } from "../constants";
const cinzel_dec = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const Menu = forwardRef((props, ref) => {
  const twoxlAndXl = useMediaQuery({ minWidth: 1280 });
  const large = useMediaQuery({ minWidth: 1024 });
  const medium = useMediaQuery({ minWidth: 768 });
  const small = useMediaQuery({ minWidth: 640 });
  const xs = useMediaQuery({ minWidth: 450 });

  /* Animation */
  const [initY, setInitY] = useState({});
  const [initX, setInitX] = useState({});
  const [animateX, setAnimateX] = useState({});
  /* Images */
  const [heiggtImage, setHeightImage] = useState({});
  const [widthImage, setWidthImage] = useState({});

  /* If Menu List is hovered */
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => { 
    if (twoxlAndXl) {
      /* Animation */
      setInitY({ 1: -100, 2: -100, 3: -115 });
      setInitX({ 1: -290, 2: 400, 3: -200 });
      setAnimateX({ 1: -315, 2: 425, 3: -225 });
      /* Images */
      setHeightImage({ 1: 300, 2: 200, 3: 300 });
      setWidthImage({ 1: 300, 2: 200, 3: 300 });
    } else if (large) {
      /* Animation */
      setInitY({ 1: -100, 2: -100, 3: -100 });
      setInitX({ 1: -175, 2: 400, 3: -175 });
      setAnimateX({ 1: -225, 2: 425, 3: -225 });
      /* Images */
      setHeightImage({ 1: 200, 2: 150, 3: 200 });
      setWidthImage({ 1: 200, 2: 150, 3: 200 });
    } else if (medium) {
      /* Animation */
      setInitY({ 1: -100, 2: -100, 3: -75 });
      setInitX({ 1: -190, 2: 300, 3: -150 });
      setAnimateX({ 1: -215, 2: 325, 3: -175 });
      /* Images */
      setHeightImage({ 1: 200, 2: 150, 3: 175 });
      setWidthImage({ 1: 200, 2: 150, 3: 175 });
    } else if (small) {
      /* Animation */
      setInitY({ 1: -50, 2: -50, 3: -50 });
      setInitX({ 1: -135, 2: 250, 3: -95 });
      setAnimateX({ 1: -160, 2: 260, 3: -115 });
      /* Images */
      setHeightImage({ 1: 150, 2: 115, 3: 100 });
      setWidthImage({ 1: 150, 2: 115, 3: 100 });
    } else if (xs) {
      setInitY({ 1: -50, 2: -50, 3: -30 });
      setInitX({ 1: -90, 2: 150, 3: -75 });
      setAnimateX({ 1: -115, 2: 175, 3: -100 });
      /* Images */
      setHeightImage({ 1: 100, 2: 75, 3: 80 });
      setWidthImage({ 1: 100, 2: 75, 3: 80 });
    } else {
      setInitY({ 1: -50, 2: -50, 3: -50 });
      setInitX({ 1: -100, 2: 200, 3: -150 });
      setAnimateX({ 1: -150, 2: 250, 3: -200 });
    }
  }, [twoxlAndXl, large, medium, small, xs]);

  

  return (
    <>
      <section ref={ref} className="grid grid-cols-12 mt-20 overflow-hidden">
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
                <div class="grid text-center 2xs:text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl place-items-center">
                  <span
                    onMouseOver={() => setIsHovered(item.id)}
                    onMouseOut={() => setIsHovered(false)}
                    className="cursor-pointer"
                  >
                    {item.title}
                    <AnimatePresence>
                      {isHovered === item.id && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: initY[item.id],
                            x: initX[item.id],
                            rotate: item.rotate,
                          }}
                          animate={{ opacity: 1, x: animateX[item.id] }}
                          exit={{ opacity: 0, x: initX[item.id] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Image
                            src={item.image}
                            className="mx-auto select-none absolute"
                            height={heiggtImage[item.id]}
                            width={widthImage[item.id]}
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
