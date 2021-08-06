export default class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._elements = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(item => { 
      this._renderer(item)
    })
  }

  addItem(element) {
    this._elements.append(element);
  }

  dataItem(element) {
    this._elements.prepend(element);
  }
}