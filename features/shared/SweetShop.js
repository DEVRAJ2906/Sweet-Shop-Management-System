class SweetShop {
  constructor() {
    this.sweets = [];
  }

  addSweet(id, name, category, price, quantity) {
    this.sweets.push({ id, name, category, price, quantity });
  }

  deleteSweet(id) {
    this.sweets = this.sweets.filter((sweet) => sweet.id !== id);
  }

  getSweets() {
    return this.sweets;
  }
}

module.exports = { SweetShop };
