import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import logo2xl_xl from "/public/images/logo/logo_2xl_xl.svg";
import logolg from "/public/images/logo/logo_lg.svg";
import logomd from "/public/images/logo/logo_md.svg";
import logosm from "/public/images/logo/logo_sm.svg";

import Image from "next/image";

export default function Navbar({ onclickAbout, onclickHero }) {
  const twoxlAndXl = useMediaQuery({ minWidth: 1200 });
  const large = useMediaQuery({ minWidth: 768 });
  const medium = useMediaQuery({ minWidth: 480 });
  const small = useMediaQuery({ minWidth: 400 });

  const [image, setImage] = useState(logo2xl_xl);
  useEffect(() => {
    if (twoxlAndXl) {
      setImage(logo2xl_xl);
    } else if (large) {
      setImage(logolg);
    } else if (medium) {
      setImage(logomd);
    } else if (small) {
      setImage(logosm);
    } else {
      setImage(logosm);
    }
  }, [twoxlAndXl, large, medium, small]);

  const [height, setHeight] = useState("h-12");
  useEffect(() => {
    if (twoxlAndXl) {
      setHeight("h-12");
    } else if (large) {
      setHeight("h-10");
    } else if (medium) {
      setHeight("h-10");
    } else if (small) {
      setHeight("h-10");
    } else {
      setHeight("h-10");
    }
  }, [twoxlAndXl, large, medium, small]);
  return (
    <div className="navbar sticky top-0 z-10 bg-[#EAE6DE] sticky-navbar">
      <div className="navbar-center mx-auto">
        <div class="flex-auto">
          <ul class="menu">
            <li>
              <a
                onClick={() => onclickAbout()}
                className="btn btn-ghost text-[#2D2D2B] text-xl"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <a onClick={() => onclickHero()} className="btn btn-ghost">
          <Image className={`${height} w-auto`} alt="Logo" src={image} />
        </a>
        <div class="flex-auto">
          <ul class="menu">
            <li>
              <a href="#" className="btn btn-ghost text-[#2D2D2B] text-xl">
                Menu
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
