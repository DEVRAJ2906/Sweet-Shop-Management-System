const { SweetShop } = require('../shared/SweetShop');
const { handleAddSweet } = require('./addSweet');

test('should add a sweet using the wrapper function', () => {
  const shop = new SweetShop();
  
  handleAddSweet(shop, {
    id: 1,
    name: 'Kaju Katli',
    category: 'Nut-Based',
    price: 50,
    quantity: 10
  });

  const sweets = shop.getSweets();

  expect(sweets.length).toBe(1);
  expect(sweets[0].name).toBe('Kaju Katli');
});
