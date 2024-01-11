// Import custom scss
import '../scss/main.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { Tooltip, Toast, Popover } from 'bootstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".trigger",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=150%"
    }
  })
  .to(".box", {
    force3D: true,
    duration: 1,
    xPercent: 100,
    ease: "power1.inOut",
    stagger: { amount: 1 }
  })
  .to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
  .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);