export default class Section {
  constructor({renderer}, elements) {
    this._renderer = renderer;
    this._elements = elements;
  }

  renderItems(items) {
    items.forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._elements.append(element);
  }

  dataItem(element) {
    this._elements.prepend(element);
  }
}