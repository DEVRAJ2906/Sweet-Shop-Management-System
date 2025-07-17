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

  purchaseSweet(id, quantity) {
    const sweet = this.sweets.find((s) => s.id === id);

    if (!sweet) {
      throw new Error("Sweet not found");
    }

    if (sweet.quantity < quantity) {
      throw new Error("Insufficient stock");
    }

    sweet.quantity -= quantity;
  }

  getSweets() {
    return this.sweets;
  }
}

module.exports = { SweetShop };
