const { SweetShop } = require("../shared/SweetShop");
const { handlePurchaseSweet } = require("./purchaseSweet");

test("should reduce quantity of sweet when purchased", () => {
  const shop = new SweetShop();

  // Add a sweet to purchase
  shop.addSweet(1, "Gulab Jamun", "Syrup-Based", 30, 20);

  // Purchase 5 units
  handlePurchaseSweet(shop, 1, 5);

  const sweets = shop.getSweets();
  expect(sweets.length).toBe(1);
  expect(sweets[0].quantity).toBe(15); // 20 - 5 = 15
});
