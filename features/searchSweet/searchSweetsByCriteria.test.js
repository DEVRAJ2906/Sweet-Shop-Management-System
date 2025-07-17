const { Sweet } = require("../shared/Sweet");
const { SweetShop } = require("../shared/SweetShop");
const { handleSearchSweetByCriteria } = require("./searchSweetsByCriteria");

describe("Search sweets by criteria", () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();

    shop.addSweet(new Sweet(1, "Kaju Katli", "Nut-Based", 50, 10));
    shop.addSweet(new Sweet(2, "Rasgulla", "Syrup-Based", 30, 20));
    shop.addSweet(new Sweet(3, "Ladoo", "Flour-Based", 15, 50));
  });

  test("should search by name", () => {
    const result = handleSearchSweetByCriteria(shop, { name: "kaju" });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Kaju Katli");
  });

  test("should search by category", () => {
    const result = handleSearchSweetByCriteria(shop, {
      category: "Flour-Based",
    });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Ladoo");
  });

  test("should search by price range", () => {
    const result = handleSearchSweetByCriteria(shop, {
      minPrice: 20,
      maxPrice: 40,
    });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Rasgulla");
  });

  test("should match multiple criteria", () => {
    const result = handleSearchSweetByCriteria(shop, {
      name: "kaju",
      category: "Nut-Based",
      minPrice: 40,
      maxPrice: 60,
    });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Kaju Katli");
  });

  test("should return empty array for no matches", () => {
    const result = handleSearchSweetByCriteria(shop, {
      name: "Barfi",
      category: "Dry",
      minPrice: 70,
      maxPrice: 100,
    });
    expect(result.length).toBe(0);
  });
});
