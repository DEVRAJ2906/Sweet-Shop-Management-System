class SweetShop {
  constructor() {
    this.sweets = [];
  }

  addSweet(id, name, category, price, quantity) {
    this.sweets.push({ id, name, category, price, quantity });
  }

  getSweets() {
    return this.sweets;
  }
}

module.exports = { SweetShop };
