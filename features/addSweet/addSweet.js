const { Sweet } = require("../shared/Sweet");

function handleAddSweet(shop, sweetData) {
  const { id, name, category, price, quantity } = sweetData;
  const sweet = new Sweet(id, name, category, price, quantity); // Create Sweet object
  shop.addSweet(sweet); // Add Sweet object to shop
}

module.exports = { handleAddSweet };
