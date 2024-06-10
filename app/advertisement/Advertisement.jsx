import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import coffees from "../../public/images/ads/coffees.jpg";
import woman_drinking from "../../public/images/ads/woman_drinking.jpg";
import { Cinzel_Decorative } from "next/font/google";
const cinzel_dec = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

function Advertisement() {
  return (
    <section className="grid grid-cols-12 mt-20">
      <div className="2xs:col-span-12 md:col-span-6 2xs:mt-5 lg:mt-10 xl:mt-20">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="select-none text-primary 2xs:text-xs sm:text-sm md:text-sm tracking-wide xl:leading-relaxed 2xl:leading-relaxed 2xs:px-8 lg:px-24 xl:px-44"
        >
          <div className="w-max float-left sm:text-xs text-right font-bold rotate-12">
            <Image
              src={woman_drinking}
              className="aspect-square rounded object-cover 2xs:h-[200px] 2xs:w-[200px] xs:h-[250px] xs:w-[250px] sm:h-[300px] sm:w-[300px] md:h-[200px] md:w-[200px] xl:h-[250px] xl:w-[250px]"
            />
          </div>
          <div className="2xs:mt-6 xs:mt-8 sm:relative sm:bottom-28 md:bottom-0 w-max md:left-4 lg:left-20 xl:left-36 float-right sm:text-xs lg:text-base lg:bottom-5 xl:bottom-2 text-right font-bold -rotate-6">
            The tasting lasts two hours
            <Image
              src={coffees}
              className="aspect-square rounded object-cover 2xs:h-[200px] 2xs:w-[200px] xs:h-[300px] xs:w-[300px] xl:h-[400px] xl:w-[400px]"
            />
          </div>
        </motion.div>
      </div>
      <div className="2xs:col-span-12 md:col-span-6 2xs:mt-10 xl:mt-20">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-primary 2xs:mx-10 sm:mx-8"
        >
          <div className="2xs:mb-3">
            <span>Our Events</span>
          </div>
          <div
            className={` ${cinzel_dec.className} font-bold 2xs:text-3xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-6xl`}
          >
            Artisanal Coffee Tasting
          </div>
          <div className="font-bold">
            <span className="xs:block sm:inline">Every Saturday 2:00PM</span>
            <span className="2xs:float-left sm:float-right md:float-left lg:float-right">
              Entry Price ₱ 1200
            </span>
          </div>
          <div className="mt-16 grid grid-cols-12 gap-5">
            <div className="2xs:col-span-12 xl:col-span-6">
              Embark on a journey of discovery with our Artisanal Coffee Tasting
              Experience. Delve into the world of coffee craftsmanship as our
              expert baristas guide you through a sensory exploration of our
              finest blends. From the rich and robust notes of our house blend
              to the delicate nuances of single-origin varieties, each cup tells
              a story of origin, flavor profile, and brewing technique.
            </div>
            <div className="2xs:col-span-12 xl:col-span-6">
              Learn about the art of coffee roasting. brewing methods, and the
              importance of ethical sourcing as you savor each distinct cup.
              Accompanied by delectable pairings of artisanal treats, this
              interactive and educational event promises to awaken your palate
              and deepen your appreciation for the complexities of coffee.
              Whether you're a coffee enthusiast or a curious beginner, join us
              for an unforgettable journey into the world of artisanal coffee.
            </div>
          </div>
        </motion.p>
      </div>
    </section>
  );
}

export default Advertisement;
