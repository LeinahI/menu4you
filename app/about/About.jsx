import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="grid grid-cols-12">
      <div className="col-span-12 text-left">
        <p className="ml-20 text-9xl text-[#B63D0E] font-bold">About Us</p>
        <div class="my-20">
          <p className="text-center text-[#B63D0E] text-6xl tracking-widest px-44">
            Welcome to Menu 4 You, where each sip is a luxurious pleasure.
            Experience our handcrafted coffees; every last drop serves as an
            excellent symphony. Discover the richness of our drinks and the
            lavish taste of our sweets, which are made for clever tastes.
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
