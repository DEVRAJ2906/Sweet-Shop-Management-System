const { Sweet } = require('../shared/Sweet');
const { SweetShop } = require('../shared/SweetShop');
const { handleDeleteSweet } = require('./deleteSweet');

test('should delete a sweet by ID', () => {
  const shop = new SweetShop();

  const sweet1 = new Sweet(1, 'Rasgulla', 'Syrup-Based', 20, 10);
  const sweet2 = new Sweet(2, 'Ladoo', 'Flour-Based', 15, 5);

  shop.addSweet(sweet1);
  shop.addSweet(sweet2);

  handleDeleteSweet(shop, 1);

  const sweets = shop.getSweets();

  expect(sweets.length).toBe(1);
  expect(sweets[0].id).toBe(2);
});
