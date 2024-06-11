import Caurosel from "./Components/Image_Caurosel";
import "./style.css";

const app = document.getElementById("app");
if (app) {
  let images: string[] = [];
  for (let i = 0; i < 10; i++) {
    images.push(`image-${i + 1}.jpg`);
  }

  const image_carousel_1 = new Caurosel("caurosel-1", images, 1200, 600, 2000);
  image_carousel_1.appendTo(app);
  const image_carousel_2 = new Caurosel("caurosel-1", images, 600, 300, 1000);
  image_carousel_2.appendTo(app);
  const image_carousel_3 = new Caurosel("caurosel-1", images, 800, 500, 500);
  image_carousel_3.appendTo(app);
}
