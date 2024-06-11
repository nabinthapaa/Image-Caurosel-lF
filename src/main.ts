import Caurosel from "./Components/Image_Caurosel";
import "./style.css";

const app = document.getElementById("app");
if (app) {
  let images: string[] = [];
  for (let i = 0; i < 10; i++) {
    images.push(`image-${i + 1}.jpg`);
  }

  const image_carousel = new Caurosel("caurosel-1", images, 1200, 600);
  image_carousel.appendTo(app);
}
