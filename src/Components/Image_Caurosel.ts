import DirectionButton from "../Clases/Direction_Button";
import Dot from "../Clases/Dot";
import Wrapper from "../Clases/Wrapper";
import _Image from "../Clases/_Image";

export default class Caurosel {
  private current: number;
  private wrapped_image: Wrapper[] = [];
  private dots: Dot[] = [];
  private dotContainer = document.createElement("div");
  private gap = 50;
  private interval: ReturnType<typeof setInterval> | undefined;
  private left_button = new DirectionButton("left", "<");
  private right_button = new DirectionButton("right", ">");
  private element = document.createElement("div");

  /**
   * @param id - Id of the caurosel
   * @param images - Array of image urls
   * @param width - Width of the caurosel
   * @param height - Height of the caurosel
   * @param delay - Delay between each image change
   */
  constructor(
    private id: string,
    private images: string[],
    private width: number,
    private height: number,
    private delay: number
  ) {
    this.createCaurosel();
    this.current = 0;
    this.dotContainer.classList.add("dot-container");
    this.left_button.positionElementLeft(0);
    this.right_button.positionElementRight(0);
    this.handle_direction_buttons();
    this.element.id = `caurosel-${this.id}`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.position = "relative";
    this.element.style.overflow = "hidden";
    this.element.classList.add("caurosel");
    this.element.style.marginInline = "auto";
    this.startAutoScroll();
  }

  get Element(): HTMLDivElement {
    return this.element;
  }

  createCaurosel() {
    for (let i = 0; i < this.images.length; i++) {
      const wrapper = new Wrapper(this.width - 200, this.height - 100, i);
      const image = new _Image(this.images[i], 1);
      wrapper.wrapElement(image.Element);
      wrapper.Element.style.left = `${100 + i * (wrapper.Width + 50)}px`;
      this.wrapped_image.push(wrapper);

      const dot = new Dot();
      dot.Element.classList.add("dot");
      this.dots.push(dot);
      this.dots[0].setActive();
      dot.appendTo(this.dotContainer);
    }

    this.dots.forEach((dot, index) => {
      dot.onClick(() => {
        clearInterval(this.interval);
        this.current = index;
        this.wrapped_image.forEach((wrapper, i) => {
          wrapper.Element.style.left = `${
            100 + (i - this.current) * (wrapper.Width + this.gap)
          }px`;
        });
        this.updateDots();
        this.startAutoScroll();
      });
    });
  }

  updateDots() {
    this.dots.forEach((dot, index) => {
      if (index === this.current) {
        dot.setActive();
      } else {
        dot.setInactive();
      }
    });
  }

  startAutoScroll() {
    this.interval = setInterval(() => {
      this.current++;
      if (this.current >= this.wrapped_image.length) {
        this.reset();
      } else {
        this.scrollLeft();
      }
      this.updateDots();
    }, this.delay);
  }

  scrollLeft() {
    this.wrapped_image.forEach((wrapper, i) => {
      wrapper.Element.style.left = `${
        100 + (i - this.current) * (wrapper.Width + this.gap)
      }px`;
    });
  }

  scrollRight() {
    this.wrapped_image.forEach((wrapper, i) => {
      wrapper.Element.style.left = `${
        100 + (i - this.current) * (wrapper.Width + this.gap)
      }px`;
    });
  }

  reset() {
    this.current = 0;
    this.wrapped_image.forEach((wrapper, i) => {
      wrapper.Element.style.left = `${100 + i * (wrapper.Width + this.gap)}px`;
    });
  }

  handle_direction_buttons() {
    this.left_button.onClick(() => {
      clearInterval(this.interval);
      this.current++;
      if (this.current >= this.wrapped_image.length) {
        this.reset();
      } else {
        this.scrollLeft();
      }
      this.updateDots();
      this.startAutoScroll();
    });

    this.right_button.onClick(() => {
      clearInterval(this.interval);
      this.current--;
      if (this.current < 0) {
        this.current = this.wrapped_image.length - 1;
        this.scrollRight();
      } else {
        this.scrollRight();
      }
      this.updateDots();
      this.startAutoScroll();
    });
  }

  appendTo(parent: HTMLElement) {
    this.left_button.appendTo(this.Element);
    this.right_button.appendTo(this.Element);
    this.dotContainer.style.left = "50%";
    this.dotContainer.style.transform = "translateX(-50%)";
    this.dotContainer.style.position = "absolute";
    this.Element.appendChild(this.dotContainer);
    this.wrapped_image.forEach((wrapper) => {
      wrapper.appendTo(this.Element);
    });
    parent.appendChild(this.Element);
  }
}
