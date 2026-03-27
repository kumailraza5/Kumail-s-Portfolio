import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother | null = null;

const isDesktopSmoother = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(min-width: 1025px)").matches;

const Navbar = () => {
  useEffect(() => {
    let smootherInstance: ScrollSmoother | null = null;

    const createSmoother = () => {
      smootherInstance = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
        smoothTouch: false,
      });
      smoother = smootherInstance;
      smoother.scrollTop(0);
      smoother.paused(true);
    };

    const destroySmoother = () => {
      smootherInstance?.kill();
      smootherInstance = null;
      smoother = null;
    };

    if (isDesktopSmoother()) {
      createSmoother();
    } else {
      smoother = null;
    }

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        let elem = e.currentTarget as HTMLAnchorElement;
        let section = elem.getAttribute("data-href");
        if (window.innerWidth > 1024 && smoother) {
          smoother.scrollTo(section, true, "top top");
        } else {
          document
            .querySelector(section!)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    const onResize = () => {
      const desktop = isDesktopSmoother();
      if (desktop && !smootherInstance) {
        createSmoother();
        const main = document.querySelector("main.main-body");
        if (main?.classList.contains("main-active")) {
          smoother?.paused(false);
        }
      } else if (!desktop && smootherInstance) {
        destroySmoother();
      }
      if (smootherInstance) {
        ScrollSmoother.refresh(true);
      } else {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      destroySmoother();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Muhammad Kumail Raza
        </a>
        <a
          href="mailto:Kumailr436@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          Kumailr436@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
