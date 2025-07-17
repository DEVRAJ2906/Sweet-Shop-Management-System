const { Sweet } = require('../shared/Sweet');
const { SweetShop } = require('../shared/SweetShop');
const { handleSearchSweet } = require('./searchSweet');

test('should return the sweet object with matching ID', () => {
  const shop = new SweetShop();

  // ✅ Add sweets using Sweet instances
  shop.addSweet(new Sweet(1, 'Ladoo', 'Flour-Based', 15, 10));
  shop.addSweet(new Sweet(2, 'Kaju Katli', 'Nut-Based', 50, 5));

  // Search by ID
  const sweet = handleSearchSweet(shop, 2);

  expect(sweet).toBeDefined();
  expect(sweet.name).toBe('Kaju Katli');
  expect(sweet.id).toBe(2);
});
