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
  const xxl = useMediaQuery({ minWidth: 1536 });
  const xl = useMediaQuery({ minWidth: 1280 });
  const large = useMediaQuery({ minWidth: 1024 });
  const medium = useMediaQuery({ minWidth: 768 });
  const small = useMediaQuery({ minWidth: 640 });
  const xs = useMediaQuery({ minWidth: 450 });
  const xxs = useMediaQuery({ minWidth: 320, maxWidth: 449 });

  /* Animation */
  const [initY, setInitY] = useState({});
  const [initX, setInitX] = useState({});
  const [animateX, setAnimateX] = useState({});
  /* Images */
  const [heiggtImage, setHeightImage] = useState({});
  const [widthImage, setWidthImage] = useState({});

  /* If Menu List is hovered */
  const [isHovered, setIsHovered] = useState(null);
  /* If input checkbox is checked */
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (id) => {
    // Call the 'setCheckedItems' function to update the 'checkedItems' state.
    // 'prevState' represents the previous state of 'checkedItems'.
    setCheckedItems((prevState) => ({
      // Spread the previous state into a new object. This copies all existing properties
      // from 'prevState' into the new state object.
      ...prevState,
      // Update the property corresponding to the given 'id'.
      // The square brackets '[]' are used to dynamically set the property name using the 'id'.
      // The value is set to the negation of its previous value:
      // If 'prevState[id]' was 'false', it will be set to 'true'.
      // If 'prevState[id]' was 'true', it will be set to 'false'.
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    setCheckedItems({});
  }, []);

  useEffect(() => {
    if (xxl) {
      /* Animation */
      setInitY({ 1: -100, 2: -100, 3: -200 });
      setInitX({ 1: 75, 2: 975, 3: 175 });
      setAnimateX({ 1: 50, 2: 1000, 3: 200 });
      /* Images */
      setHeightImage({ 1: 250, 2: 250, 3: 250 });
      setWidthImage({ 1: 250, 2: 250, 3: 250 });
    } else if (xl) {
      /* Animation */
      setInitY({ 1: -100, 2: -100, 3: -200 });
      setInitX({ 1: 25, 2: 775, 3: 50 });
      setAnimateX({ 1: 0, 2: 800, 3: 75 });
      /* Images */
      setHeightImage({ 1: 250, 2: 250, 3: 250 });
      setWidthImage({ 1: 250, 2: 250, 3: 250 });
    } else if (large) {
      /* Animation */
      setInitY({ 1: -100, 2: -100, 3: -150 });
      setInitX({ 1: 0, 2: 650, 3: 50 });
      setAnimateX({ 1: -25, 2: 675, 3: 75 });
      /* Images */
      setHeightImage({ 1: 200, 2: 200, 3: 200 });
      setWidthImage({ 1: 200, 2: 200, 3: 200 });
    } else if (medium) {
      /* Animation */
      setInitY({ 1: -100, 2: -100, 3: -125 });
      setInitX({ 1: 0, 2: 450, 3: 65 });
      setAnimateX({ 1: -25, 2: 475, 3: 35 });
      /* Images */
      setHeightImage({ 1: 150, 2: 150, 3: 150 });
      setWidthImage({ 1: 150, 2: 150, 3: 150 });
    } else if (small) {
      /* Animation */
      setInitY({ 1: -50, 2: -50, 3: -100 });
      setInitX({ 1: -25, 2: 375, 3: 25 });
      setAnimateX({ 1: -50, 2: 400, 3: 0 });
      /* Images */
      setHeightImage({ 1: 150, 2: 150, 3: 150 });
      setWidthImage({ 1: 150, 2: 150, 3: 150 });
    } else if (xs) {
      /* Animation */
      setInitY({ 1: -50, 2: -50, 3: -75 });
      setInitX({ 1: -15, 2: 250, 3: 35 });
      setAnimateX({ 1: -35, 2: 275, 3: 15 });
      /* Images */
      setHeightImage({ 1: 100, 2: 100, 3: 100 });
      setWidthImage({ 1: 100, 2: 100, 3: 100 });
    } else {
      /* Animation */
      setInitY({ 1: -50, 2: -50, 3: -75 });
      setInitX({ 1: -15, 2: 250, 3: 35 });
      setAnimateX({ 1: -35, 2: 275, 3: 15 });
      /* Images */
      setHeightImage({ 1: 100, 2: 100, 3: 100 });
      setWidthImage({ 1: 100, 2: 100, 3: 100 });
    }
  }, [xxl, xl, large, medium, small, xs]);

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
                <div className="collapse overflow-visible grid text-center 2xs:text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl place-items-center">
                  <input
                    type="checkbox"
                    name="my-accordion-1"
                    onMouseOver={() => setIsHovered(item.id)}
                    onMouseOut={() => setIsHovered(false)}
                    onChange={() => handleCheckboxChange(item.id)}
                    checked={checkedItems[item.id] || false}
                    className="xs:w-6/12"
                  />
                  <span
                    className="collapse-title w-full 2xs:text-end xs:text-center px-4"
                    style={{ cursor: "default" }}
                  >
                    {item.title}
                    <AnimatePresence>
                      {isHovered === item.id && !xxs && (
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
                            className="absolute"
                            height={heiggtImage[item.id]}
                            width={widthImage[item.id]}
                            class="-z-10"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </span>
                  <div className="collapse-content w-full xl:px-44 lg:px-20">
                    <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
                      <AnimatePresence>
                        {checkedItems[item.id] &&
                          item.products.map((product, index) => (
                            <motion.div
                              key={index}
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 1 }}
                              className="p-5 rounded-lg z-10"
                            >
                              <Image
                                src={product.productImage}
                                height={486}
                                width={486}
                                className="aspect-square rounded object-cover"
                              />
                              <div className="mt-3 text-start">
                                <h3 className="font-medium 2xs:text-base sm:text-xl lg:text-2xl text-primary">
                                  {product.productName}
                                </h3>
                                <p className="mt-1 2xs:text-sm sm:text-lg lg:text-xl text-primary">
                                  ₱&nbsp;{product.productPrice}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                      </AnimatePresence>
                    </div>
                  </div>
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
