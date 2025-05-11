import { handleMobileBtn } from "./JavaScript/burger-menu";
import { setImage } from "./JavaScript/image";

import "./styles/normalize.scss";
import "./styles/style.scss";
import "./styles/actions.scss";

import "./styles/block/head.scss";
import "./styles/block/nav.scss";

import "./styles/block/main/about.scss";
import "./styles/block/main/pet.scss";

import "./styles/block/main/help.scss";

import "./styles/block/main/donate.scss";

const mobileBtn = window.matchMedia("(max-width: 500px)");

// mobile button, hidden nav links
if (mobileBtn.matches) {
  handleMobileBtn(mobileBtn);
}

// about block
import about_pets from "../public/images/about/about-pets.png";
setImage("about-pets", about_pets);

//slider block
import katrine from "../public/images/slider/katrine.jpg";
import jennifer from "../public/images/slider/jennifer.jpg";
import woody from "../public/images/slider/woody.jpg";

setImage("katrine", katrine);
setImage("jennifer", jennifer);
setImage("woody", woody);

//help block
const svgs = require.context("../public/images/help", false, /\.svg$/);

for (let i = 1; i < 10; i++) {
  const img = svgs(`./${i}.svg`);
  setImage(`svg-${i}`, img);
}
