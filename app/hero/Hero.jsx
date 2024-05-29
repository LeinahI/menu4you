import React, { useEffect, useState, forwardRef } from "react";
import { useMediaQuery } from "react-responsive";

import Image from "next/image";
import SpanishLatte from "../../public/images/cofees/spanish_latte.png";
import Circle from "../../public/images/cofees/dark_circle.png";
import { SiBuymeacoffee } from "react-icons/si";

import { motion } from "framer-motion";

import { Cinzel_Decorative } from "next/font/google";
const cinzel_dec = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const coffee =
  "opacity-40 inline-block 2xs:-mt-1 2xs:text-sm xs:text-base sm:text-xl md:text-2xl md:-mt-2 lg:text-3xl lg:-mt-3 xl:text-4xl xl:-mt-4";

const Hero = forwardRef((props, ref) => {
  const twoxlAndXl = useMediaQuery({ minWidth: 1280 });
  const large = useMediaQuery({ minWidth: 1024 });
  const medium = useMediaQuery({ minWidth: 768 });
  const small = useMediaQuery({ minWidth: 640 });
  const xs = useMediaQuery({ minWidth: 450 });

  const [coffeeSize, setCoffeeSize] = useState(569);
  const [circleSize, setCircleSize] = useState(456);

  useEffect(() => {
    if (twoxlAndXl) {
      setCoffeeSize(569); //coffee 569 and circle 456
      setCircleSize(456); //coffee 569 and circle 456
    } else if (large) {
      setCoffeeSize(469); //coffee 469 and circle 375.86
      setCircleSize(375.86);
    } else if (medium) {
      setCoffeeSize(369);
      setCircleSize(295.72);
    } else if (small) {
      setCoffeeSize(269);
      setCircleSize(215.96);
    } else if (xs) {
      setCoffeeSize(200);
      setCircleSize(160.28);
    } else {
      setCoffeeSize(200);
      setCircleSize(160.28);
    }
  }, [twoxlAndXl, large, medium, xs]);

  return (
    <>
      {/* Hero Text  */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-5 hero relative z-10"
      >
        <div className="hero-content" ref={ref}>
          <div>
            <p
              className={`select-none text-center 2xs:text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary ${cinzel_dec.className} font-bold`}
            >
              Your Perfect Brew Awaits
            </p>
          </div>
        </div>
      </motion.div>
      {/* Hero Image & Marquee */}
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
            height={coffeeSize}
          />
          <div className="flex justify-center">
            <Image
              src={Circle}
              alt="Spanish Latte"
              className="select-none -z-20 absolute bottom-0"
              height={circleSize}
              width={circleSize}
            />
          </div>
        </motion.div>
        {/* Front */}
        <motion.marquee
          initial={{ y: 100, opacity: 0, rotate: 6 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          direction="right"
          className="text-primary bg-[#EAE6DE] rotate-6 select-none absolute 2xs:h-7 2xs:text-xl 2xs:bottom-7 xs:h-8  xs:text-2xl xs:bottom-12 sm:h-10 sm:text-4xl sm:bottom-14 md:h-12 md:text-5xl md:bottom-20 lg:h-16 lg:text-6xl lg:bottom-20 lg:pt-1 xl:h-20 xl:text-7xl xl:bottom-24"
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
          className="text-primary -z-10 bg-[#EAE6DE] -rotate-6 select-none absolute 2xs:h-7 2xs:text-xl 2xs:bottom-7 xs:h-8  xs:text-2xl xs:bottom-12 sm:h-10 sm:text-4xl sm:bottom-14 md:h-12 md:text-5xl md:bottom-20 lg:h-16 lg:text-6xl lg:bottom-20 lg:pt-1 xl:h-20 xl:text-7xl xl:bottom-24"
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
      {/* Hero Description */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        class="grid grid-cols-12"
      >
        <div class="2xs:col-span-12 sm:col-span-6 sm:col-end-13 lg:col-span-4 lg:col-end-13 xl:col-span-4 xl:col-end-13 card bg-base-100">
          <div class="card-body 2xs:text-xs md:text-base lg:absolute lg:bottom-44 xl:bottom-64">
            <p className="text-primary text-right">
              Come in and see where every cup is a masterpiece of flavor. Enjoy
              our meticulously crafted coffees, from bold richness to velvety
              smoothness, complemented by delectable sweet offerings. Experience
              perfection in every sip.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
});

export default Hero;
