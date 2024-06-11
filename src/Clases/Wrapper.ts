export default class Wrapper {
  private element: HTMLDivElement;
  constructor(
    private width: number,
    private height: number,
    private id: number
  ) {
    this.element = document.createElement("div");
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.borderRadius = "40px";
    this.element.style.overflow = "hidden";
    this.element.style.position = "absolute";
    this.element.style.top = `6%`;
    this.element.style.boxShadow =
      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px";
    this.element.style.transition = "all 0.5s";
    this.element.id = `wrapper-${this.id}`;
  }

  get Width(): number {
    return this.width;
  }

  get Height(): number {
    return this.height;
  }

  get Element(): HTMLDivElement {
    return this.element;
  }

  get Id(): number {
    return this.id;
  }

  set Width(width: number) {
    this.width = width;
  }

  set Height(height: number) {
    this.height = height;
  }

  wrapElement(element: HTMLElement) {
    this.element.appendChild(element);
  }

  positionElementLeft(x: number) {
    this.element.style.left = `${x}px`;
  }

  positionElementRight(x: number) {
    this.element.style.right = `${x}px`;
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.element);
  }
}
