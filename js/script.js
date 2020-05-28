import SlideNav from "./slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
console.log(slide);
slide.addArrow(".prev", ".next");
// slide.changeSlide(0);
// slide.activeNextSlide();
