import DirectionButton from "./Clases/Direction_Button";
import Dot from "./Clases/Dot";
import Wrapper from "./Clases/Wrapper";
import _Image from "./Clases/_Image";
import "./style.css";

const wrapped_image: Wrapper[] = [];
const dotContainer = document.createElement("div");
dotContainer.id = "dot-container";
const dots: Dot[] = [];

for (let i = 0; i < 10; i++) {
  const wrapper = new Wrapper(1000, 500, i);
  const image = new _Image(`image-${i + 1}.jpg`, 1);
  wrapper.wrapElement(image.Element);
  wrapper.Element.style.left = `${100 + i * (wrapper.Width + 50)}px`;
  wrapped_image.push(wrapper);

  const dot = new Dot();
  dot.Element.classList.add("dot");
  dots.push(dot);
  dot.appendTo(dotContainer);
}

dots.forEach((dot, index) => {
  dot.onClick(() => {
    clearInterval(interval);
    current = index;
    wrapped_image.forEach((wrapper, i) => {
      wrapper.Element.style.left = `${
        100 + (i - current) * (wrapper.Width + gap)
      }px`;
    });
    updateDots();
    startAutoScroll();
  });
});

const left_button = new DirectionButton("left", "<");
const right_button = new DirectionButton("right", ">");
left_button.positionElementLeft(0);
right_button.positionElementRight(0);

let current = 0;
let interval: number | NodeJS.Timer;
let gap = 50;

// Function to update dots
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === current) {
      dot.setActive();
    } else {
      dot.setInactive();
    }
  });
}

// Function to handle the automatic scrolling
function startAutoScroll() {
  interval = setInterval(() => {
    current++;
    if (current >= wrapped_image.length) {
      current = 0;
      wrapped_image.forEach((wrapper, i) => {
        wrapper.Element.style.left = `${100 + i * (wrapper.Width + gap)}px`;
      });
    } else {
      wrapped_image.forEach((wrapper, i) => {
        wrapper.Element.style.left = `${
          100 + (i - current) * (wrapper.Width + gap)
        }px`;
      });
    }
    updateDots();
  }, 2000);
}

// Start automatic scrolling initially
startAutoScroll();
updateDots();

// Button click handlers
left_button.onClick(() => {
  clearInterval(interval);
  current++;
  if (current >= wrapped_image.length) {
    current = wrapped_image.length - 1;
  } else {
    wrapped_image.forEach((wrapper) => {
      wrapper.Element.style.left = `${
        parseInt(wrapper.Element.style.left) - (wrapper.Width + gap)
      }px`;
    });
  }
  updateDots();
  startAutoScroll();
});

right_button.onClick(() => {
  clearInterval(interval);
  current--;
  if (current < 0) {
    current = 0;
  } else {
    wrapped_image.forEach((wrapper) => {
      wrapper.Element.style.left = `${
        parseInt(wrapper.Element.style.left) + (wrapper.Width + gap)
      }px`;
    });
  }
  updateDots();
  startAutoScroll();
});
const app = document.getElementById("app");

if (app) {
  left_button.appendTo(app);
  right_button.appendTo(app);
  app.appendChild(dotContainer);
  wrapped_image.forEach((wrapper) => {
    wrapper.appendTo(app);
  });
}
