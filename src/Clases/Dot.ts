export default class Dot {
  private element: HTMLSpanElement;
  constructor() {
    this.element = document.createElement("span");
    this.element.style.width = "10px";
    this.element.style.height = "10px";
    this.element.style.borderRadius = "50%";
    this.element.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    this.element.style.zIndex = "1000";
    this.element.style.cursor = "pointer";
    this.element.style.display = "inline-block";
  }
  get Element(): HTMLSpanElement {
    return this.element;
  }

  setActive() {
    this.element.style.backgroundColor = "#717171";
  }

  setInactive() {
    this.element.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.element);
  }

  onClick(callback: () => void) {
    this.element.addEventListener("click", callback);
  }
}
