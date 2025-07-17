const { SweetShop } = require('../shared/SweetShop.js');
const { handleAddSweet } = require('./addSweet.js');

test('should add a sweet using the wrapper function', () => {
  const shop = new SweetShop();

  handleAddSweet(shop, {
    id: 1,
    name: 'Kaju Katli',
    category: 'Chocolate',
    price: 50,
    quantity: 10
  });

  const sweets = shop.getSweets();
  expect(sweets.length).toBe(1);
  expect(sweets[0].name).toBe('Kaju Katli');
  expect(sweets[0].category).toBe('Chocolate');
  expect(sweets[0].price).toBe(50);
  expect(sweets[0].quantity).toBe(10);
});
