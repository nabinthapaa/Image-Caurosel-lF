export default class DirectionButton {
  private element: HTMLButtonElement;
  constructor(private id: string, private direction: string) {
    this.element = document.createElement("button");
    this.element.style.width = "50px";
    this.element.style.height = "50px";
    this.element.style.borderRadius = "50%";
    this.element.style.position = "absolute";
    this.element.style.top = "50%";
    this.element.style.transform = "translateY(-50%)";
    this.element.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    this.element.style.border = "none";
    this.element.style.outline = "none";
    this.element.style.color = "white";
    this.element.style.fontSize = "1.5rem";
    this.element.style.transition = "all 0.5s";
    this.element.id = `direction-button-${this.id}`;
    this.element.innerHTML = this.direction;
    this.element.style.cursor = "pointer";
    this.element.style.zIndex = "1000";
  }

  get Direction(): string {
    return this.direction;
  }

  get Element(): HTMLButtonElement {
    return this.element;
  }

  set Direction(direction: string) {
    this.direction = direction;
  }

  positionElementLeft(x: number) {
    this.element.style.left = `${x}px`;
  }

  positionElementRight(x: number) {
    this.element.style.right = `${x}px`;
  }

  onClick(callback: () => void) {
    this.element.addEventListener("click", callback);
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.element);
  }
}
