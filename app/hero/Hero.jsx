import React, { useEffect, useState, forwardRef } from "react";
import { useMediaQuery } from "react-responsive";

import Image from "next/image";
import { Cinzel_Decorative } from "next/font/google";
import SpanishLatte from "../../public/images/cofees/spanish_latte_2.png";
import { SiBuymeacoffee } from "react-icons/si";

import { motion } from "framer-motion";

const cinzel_dec = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const coffee =
  "opacity-40 inline-block 2xs:-mt-1 2xs:text-sm xs:text-base sm:text-xl md:text-2xl md:-mt-2 lg:text-3xl lg:-mt-3 xl:text-4xl xl:-mt-4";

const Hero = forwardRef((props, ref) => {
  const twoxlAndXl = useMediaQuery({ minWidth: 1200 });
  const large = useMediaQuery({ minWidth: 768 });
  const medium = useMediaQuery({ minWidth: 480 });
  const small = useMediaQuery({ minWidth: 400 });

  const [size, setSize] = useState(569);
  useEffect(() => {
    if (twoxlAndXl) {
      setSize(569);
    } else if (large) {
      setSize(469);
    } else if (medium) {
      setSize(369);
    } else if (small) {
      setSize(200);
    } else {
      setSize(200);
    }
  }, [twoxlAndXl, large, medium, small]);

  /* Discover a world of rich flavors and handcrafted beverages at Menu 4
          You. Whether you're looking for a classic espresso, a refreshing iced
          latte, or a sweet treat to complement your drink, we've got something
          to satisfy every craving.
           */
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-5 hero relative -z-10"
      >
        <div className="hero-content" ref={ref}>
          <div>
            <p
              className={`select-none text-center 2xs:text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#B63D0E] ${cinzel_dec.className} font-bold`}
            >
              Your Perfect Brew Awaits
            </p>
          </div>
        </div>
      </motion.div>
      <div className="mx-auto 2xs:-mt-7 md:-mt-8 lg:-mt-9 xl:-mt-10 relative">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={SpanishLatte}
            alt="Spanish Latte"
            className="mx-auto select-none"
            height={size}
          />
        </motion.div>
        {/* Front */}
        <motion.marquee
          initial={{ y: 100, opacity: 0, rotate: 6 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          direction="right"
          className="text-[#e7845d] bg-[#EAE6DE] rotate-6 select-none absolute 2xs:h-7 2xs:text-xl 2xs:bottom-7 xs:h-8  xs:text-2xl xs:bottom-12 sm:h-10 sm:text-4xl sm:bottom-14 md:h-12 md:text-5xl md:bottom-20 lg:h-16 lg:text-6xl lg:bottom-20 lg:pt-1 xl:h-20 xl:text-7xl xl:bottom-24"
        >
          <span className="mr-5">Mazagran</span>
          <span className="mr-5 ">
            <SiBuymeacoffee className={coffee} />
          </span>
          <span className="mr-5">Café au lait</span>
          <span className="mr-5 ">
            <SiBuymeacoffee className={coffee} />
          </span>
          <span className="mr-5">Espresso con Panna</span>
        </motion.marquee>
        {/* Back */}
        <motion.marquee
          initial={{ y: 100, opacity: 0, rotate: -6 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          direction="left"
          className="text-[#e7845d] -z-10 -rotate-6 select-none absolute 2xs:h-7 2xs:text-xl 2xs:bottom-7 xs:h-8  xs:text-2xl xs:bottom-12 sm:h-10 sm:text-4xl sm:bottom-14 md:h-12 md:text-5xl md:bottom-20 lg:h-16 lg:text-6xl lg:bottom-20 lg:pt-1 xl:h-20 xl:text-7xl xl:bottom-24"
        >
          <span className="mr-5">Spanish Latte</span>
          <span className="mr-5 ">
            <SiBuymeacoffee className={coffee} />
          </span>
          <span className="mr-5">Caramel Macchiato</span>
          <span className="mr-5 ">
            <SiBuymeacoffee className={coffee} />
          </span>
          <span className="mr-5">Java Chip</span>
        </motion.marquee>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        class="grid grid-cols-12"
      >
        <div class="2xs:col-span-12 sm:col-span-6 sm:col-end-13 lg:col-span-6 lg:col-end-13 xl:col-span-4 xl:col-end-13 card bg-base-100">
          <div class="card-body 2xs:text-xs md:text-base">
            <p className="text-[#2D2D2B] text-right">
              Come in and see where every cup is a masterpiece of flavor.
              Enjoy our meticulously crafted coffees, from bold richness to
              velvety smoothness, complemented by delectable sweet offerings.
              Experience perfection in every sip.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
});

export default Hero;
