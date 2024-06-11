import Caurosel from "./Components/Image_Caurosel";
import "./style.css";

let images: string[] = [];
for (let i = 0; i < 10; i++) {
  images.push(`image-${i + 1}.jpg`);
}

const app = document.getElementById("app");
const flexCaurosel = document.querySelector<HTMLDivElement>(
  ".image-caurosel-flex"
);
if (app) {
  const image_carousel_1 = new Caurosel("caurosel-1", images, 1200, 600, 2000);
  image_carousel_1.appendTo(app);
}

if (flexCaurosel) {
  const image_carousel_2 = new Caurosel("caurosel-1", images, 600, 300, 1000);
  image_carousel_2.appendTo(flexCaurosel);
  const image_carousel_3 = new Caurosel("caurosel-1", images, 600, 300, 500);
  image_carousel_3.appendTo(flexCaurosel);
}
