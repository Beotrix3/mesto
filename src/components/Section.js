export default class Section {
  constructor({items, renderer}, elements) {
    this._items = items;
    this._renderer = renderer;
    this._elements = elements;
  }

  renderItems() {
    this._items.forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._elements.append(element);
  }

  dataItem(element) {
    this._elements.prepend(element);
  }
}