import { handleMobileBtn } from "./JavaScript/burger-menu";
import { setImage } from "./JavaScript/image";

import about_pets from "../public/images/about/about-pets.png";

import katrine from "../public/images/slider/katrine.jpg";
import jennifer from "../public/images/slider/jennifer.jpg";
import woody from "../public/images/slider/woody.jpg";

import "./styles/normalize.scss";
import "./styles/style.scss";
import "./styles/actions.scss";

import "./styles/block/head.scss";
import "./styles/block/nav.scss";

import "./styles/block/main/about.scss";
import "./styles/block/main/pet.scss";

const mobileBtn = window.matchMedia("(max-width: 500px)");

// mobile button, hidden nav links
if (mobileBtn.matches) {
  handleMobileBtn(mobileBtn);
}

// download img
setImage("about-pets", about_pets);
console.log(about_pets);

setImage("katrine", katrine);
setImage("jennifer", jennifer);
setImage("woody", woody);
