const { Sweet } = require('../shared/Sweet');
const { SweetShop } = require('../shared/SweetShop');
const { handleRestockSweet } = require('./restockSweet');

test('should increase quantity of sweet when restocked', () => {
  const shop = new SweetShop();

  // ✅ Create a Sweet instance properly
  const sweet = new Sweet(1, 'Barfi', 'Milk-Based', 25, 10);
  shop.addSweet(sweet);

  // Restock 15 units
  handleRestockSweet(shop, 1, 15);

  const sweets = shop.getSweets();
  expect(sweets.length).toBe(1);
  expect(sweets[0].quantity).toBe(25); // 10 + 15 = 25
});
