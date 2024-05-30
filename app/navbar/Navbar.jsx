import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import logo2xl_xl from "/public/images/logo/logo_2xl_xl.svg";
import logolg from "/public/images/logo/logo_lg.svg";
import logomd from "/public/images/logo/logo_md.svg";
import logosm from "/public/images/logo/logo_sm.svg";

import Image from "next/image";

export default function Navbar({ onclickAbout, onclickHero, onclickMenu }) {
  const xxl = useMediaQuery({ minWidth: 1536 });
  const xl = useMediaQuery({ minWidth: 1280 });
  const large = useMediaQuery({ minWidth: 1024 });
  const medium = useMediaQuery({ minWidth: 768 });
  const small = useMediaQuery({ minWidth: 640 });
  const xs = useMediaQuery({ minWidth: 450 });

  const [image, setImage] = useState(logo2xl_xl);
  useEffect(() => {
    if (xxl) {
      setImage(logo2xl_xl); /* xxl */
    } else if (xl) {
      setImage(logo2xl_xl); /* xl */
    } else if (large) {
      setImage(logolg); /* lg */
    } else if (medium) {
      setImage(logomd); /* md */
    } else if (small) {
      setImage(logosm); /* sm */
    } else if (xs) {
      setImage(logosm); /* xs */
    } else {
      setImage(logosm);
    }
  }, [xxl, xl, large, medium, small, xs]);

  const [height, setHeight] = useState("h-12");
  useEffect(() => {
    if (xxl) {
      setHeight("h-12");
    } else if (xl) {
      setHeight("h-12");
    } else if (large) {
      setHeight("h-6");
    } else if (medium) {
      setHeight("h-8");
    } else if (small) {
      setHeight("h-10");
    } else {
      setHeight("h-10");
    }
  }, [xxl, xl, large, medium, small]);
  return (
    <div className="navbar sticky top-0 z-50 bg-main sticky-navbar">
      <div className="navbar-center mx-auto">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              onClick={() => onclickAbout()}
              className="btn btn-ghost text-primary text-xl"
            >
              About
            </a>
          </li>
          <li>
            <a onClick={() => onclickHero()} className="btn btn-ghost">
              <Image className={`${height} w-auto`} alt="Logo" src={image} />
            </a>
          </li>
          <li>
            <a
              onClick={() => onclickMenu()}
              className="btn btn-ghost text-primary text-xl"
            >
              Menu
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
