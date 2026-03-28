import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother?.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  const isCompact = window.matchMedia("(max-width: 1024px)").matches;
  const textLift = 80;
  const textBlur = 5;
  const textStagger = 0.025;
  const textDuration = 1.2;

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: textLift, filter: `blur(${textBlur}px)` },
    {
      opacity: 1,
      duration: textDuration,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: textStagger,
      delay: 0.25,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: textLift, filter: `blur(${textBlur}px)` },
    {
      opacity: 1,
      duration: textDuration,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: textStagger,
      delay: 0.28,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      y: 0,
      delay: 0.8,
    }
  );

  if (isCompact) {
    gsap.fromTo(
      ".character-container",
      { opacity: 0, y: 28, filter: "blur(8px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.05,
        delay: 0.35,
        ease: "power3.out",
      }
    );
  }
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);

  const loopTravel = 80;
  const loopStagger = 0.1;
  const loopDuration = 1.2;
  LoopText(landingText2, landingText3, loopTravel, loopStagger, loopDuration);
  LoopText(landingText4, landingText5, loopTravel, loopStagger, loopDuration);
}

function LoopText(
  Text1: SplitText,
  Text2: SplitText,
  travel: number,
  stagger: number,
  duration: number
) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: travel },
    {
      opacity: 1,
      duration,
      ease: "power3.inOut",
      y: 0,
      stagger,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: travel },
      {
        duration,
        ease: "power3.inOut",
        y: 0,
        stagger,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -travel,
        duration,
        ease: "power3.inOut",
        stagger,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -travel,
        duration,
        ease: "power3.inOut",
        stagger,
        delay: delay2,
      },
      1
    );
}
