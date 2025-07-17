export class SweetShop {
  constructor() {
    this.sweets = [];
  }

  addSweet(sweet) {
    this.sweets.push(sweet); // Accepts Sweet object
  }

  deleteSweet(id) {
    this.sweets = this.sweets.filter((sweet) => sweet.id !== id);
  }

  purchaseSweet(id, quantity) {
    const sweet = this.sweets.find((s) => s.id === id);
    if (!sweet) throw new Error("Sweet not found");
    if (sweet.quantity < quantity) throw new Error("Insufficient stock");
    sweet.quantity -= quantity;
  }

  restockSweet(id, quantity) {
    const sweet = this.sweets.find((s) => s.id === id);
    if (!sweet) throw new Error("Sweet not found");
    sweet.quantity += quantity;
  }

  searchSweet(id) {
    return this.sweets.find((s) => s.id === id);
  }

  searchSweetsByCriteria(criteria) {
    return this.sweets.filter((sweet) => {
      const matchesName = criteria.name
        ? sweet.name?.toLowerCase().includes(criteria.name.toLowerCase())
        : true;

      const matchesCategory = criteria.category
        ? sweet.category?.toLowerCase() === criteria.category.toLowerCase()
        : true;

    const matchesPrice =
      (criteria.minPrice === undefined || sweet.price >= criteria.minPrice) &&
      (criteria.maxPrice === undefined || sweet.price <= criteria.maxPrice);

      return matchesName && matchesCategory && matchesPrice;
    });
  }

  getSweets() {
    return this.sweets;
  }
}
