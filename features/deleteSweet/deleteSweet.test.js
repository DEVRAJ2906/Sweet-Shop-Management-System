const { SweetShop } = require('../shared/SweetShop');
const { handleDeleteSweet } = require('./deleteSweet');

test('should delete a sweet by ID', () => {
  const shop = new SweetShop();

  shop.addSweet(1, 'Rasgulla', 'Syrup-Based', 20, 10);
  shop.addSweet(2, 'Ladoo', 'Flour-Based', 15, 5);

  handleDeleteSweet(shop, 1);

  const sweets = shop.getSweets();

  expect(sweets.length).toBe(1);
  expect(sweets[0].id).toBe(2);
});
