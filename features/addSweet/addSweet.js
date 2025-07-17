function handleAddSweet(shop, sweetData) {
  const { id, name, category, price, quantity } = sweetData;
  shop.addSweet(id, name, category, price, quantity);
}

module.exports = { handleAddSweet };
