interface PlayFieldConstructor {
  container: HTMLElement;
}

export default class PlayField {
  container: HTMLElement;
  field: HTMLDivElement[][];

  constructor({ container }: PlayFieldConstructor) {
    this.container = container;
    this.field = [];
  }

  makeNewField(size: number) {
    this.container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    this.container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let y = 0; y < size; y++) {
      this.field.push([]);
      for (let x = 0; x < size; x++) {
        const newElement = document.createElement("div");
        newElement.classList.add(`cell_${y}_${x}`);
        this.field[y]?.push(newElement);
        this.container.appendChild(newElement);
      }
    }
  }
}
