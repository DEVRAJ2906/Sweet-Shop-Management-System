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

  restockSweet(id, quantity) {
    const sweet = this.sweets.find((s) => s.id === id);

    if (!sweet) {
      throw new Error("Sweet not found");
    }

    sweet.quantity += quantity;
  }

  searchSweet(id) {
    return this.sweets.find((s) => s.id === id);
  }

  searchSweetsByCriteria(criteria) {
    return this.sweets.filter((sweet) => {
      const matchesName = criteria.name
        ? sweet.name.toLowerCase().includes(criteria.name.toLowerCase())
        : true;

      const matchesCategory = criteria.category
        ? sweet.category.toLowerCase() === criteria.category.toLowerCase()
        : true;

      const matchesPrice =
        criteria.minPrice !== undefined && criteria.maxPrice !== undefined
          ? sweet.price >= criteria.minPrice && sweet.price <= criteria.maxPrice
          : true;

      return matchesName && matchesCategory && matchesPrice;
    });
  }

  getSweets() {
    return this.sweets;
  }
}

module.exports = { SweetShop };
