export default class _Image {
  private element: HTMLImageElement;
  constructor(private url: string, private id: number | string) {
    this.element = new Image(100, 100);
    this.element.src = this.url;
    this.element.alt = "Image";
    this.element.id = `image-${this.id}`;
    this.element.style.width = "100%";
    this.element.style.height = "100%";
    this.element.style.objectFit = "cover";
    this.element.style.objectPosition = "center";
  }

  get Url(): string {
    return this.url;
  }

  get Id(): number | string {
    return this.id;
  }

  get Element(): HTMLImageElement {
    return this.element;
  }

  set Url(url: string) {
    this.url = url;
  }

  set Id(id: number | string) {
    this.id = id;
  }
}
