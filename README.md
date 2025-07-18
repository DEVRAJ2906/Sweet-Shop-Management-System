# Sweet Shop Management System

A browser-based application for managing sweets in a shop. Users can add, search, restock, purchase, and delete sweets with a clean and interactive interface.

---

## Features

- Add sweets with ID, name, category, price, and quantity.
- Search sweets by name, category, and price range.
- Purchase sweets and decrease stock.
- Restock sweets to increase stock.
- Delete sweets from the system.
- Live sweet list displayed in a table.
- Unit tested backend logic using Jest.

---

## Technologies Used

- HTML5 / CSS3
- JavaScript (ES6+)
- CommonJS & ES Modules
- Jest for testing

---

## Folder Structure

```
sweet-shop-management-system/
└── src/
    ├── index.html
    ├── style.css
    └── script.js
└── features/
    ├── addSweet/
        ├── addSweet.js
        └── addSweet.test.js
    ├── deleteSweet/
        ├── deleteSweet.js
        └── deleteSweet.test.js
    ├── purchaseSweet/
        ├── purchaseSweet.js
        └── purchaseSweet.test.js
    ├── restockSweet/
        ├── restockSweet.js
        └── restockSweet.test.js
    ├── searchSweet/
        ├── searchSweet.js
        ├── searchSweet.test.js
        ├── searchSweetsByCriteria.js
        └── searchSweetsByCriteria.test.js
    └── shared/
        ├── Sweet.js             # Node version (CommonJS)
        ├── SweetShop.js         # Node version (CommonJS)
        ├── Sweet.browser.js      # Browser version (ESM)
        └── SweetShop.browser.js  # Browser version (ESM)
```

---

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/DEVRAJ2906/Sweet-Shop-Management-System.git
cd sweet-shop-management-system
```

### Open in Browser

You can directly open the `index.html` file in your browser to run the UI.

---

## Running Tests

Ensure you have Node.js and npm installed.

### Install Jest

```bash
npm install
```

### Run Tests

```bash
npm test
```

Tests are written for all core features and are located in their respective feature folders.

---

## Notes

- For browser usage, import files ending with `.browser.js` (ES modules).
- For Node.js testing, use files ending with `.js` (CommonJS).
- Keep UI logic and business logic separated for maintainability.

---

## Author

Devraj Tadvi

---

## License

This project is licensed under the MIT License.
