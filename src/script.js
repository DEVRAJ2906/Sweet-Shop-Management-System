import { Sweet } from "../features/shared/Sweet.browser.js";
import { SweetShop } from "../features/shared/SweetShop.browser.js";

const shop = new SweetShop();

// DOM Elements
const addForm = document.getElementById("addSweetForm");
const searchForm = document.getElementById("searchForm");
const sweetTableBody = document.querySelector("#sweetTable tbody");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = Number(document.getElementById("sweetId").value);
  const name = document.getElementById("sweetName").value.trim();
  const category = document.getElementById("sweetCategory").value;
  const price = Number(document.getElementById("sweetPrice").value);
  const quantity = Number(document.getElementById("sweetQuantity").value);

  if (!/^[A-Za-z ]+$/.test(name)) {
    alert("Sweet name must contain only letters and spaces.");
    return;
  }

  const existing = shop.getSweets();
  const duplicateId = existing.some((s) => s.id === id);
  const duplicateName = existing.some(
    (s) => s.name.toLowerCase() === name.toLowerCase()
  );

  if (duplicateId) {
    alert("A sweet with this ID already exists. Please use a different ID.");
    return;
  }

  if (duplicateName) {
    alert(
      "A sweet with this name already exists. Please use a different name."
    );
    return;
  }

  const sweet = new Sweet(id, name, category, price, quantity);
  shop.addSweet(sweet);

  addForm.reset();
  renderTable(shop.getSweets());

  addForm.reset();
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("searchName").value;
  const category = document.getElementById("searchCategory").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;

  if (minPrice && maxPrice && Number(maxPrice) < Number(minPrice)) {
    alert("Maximum price must be greater than or equal to minimum price.");
    return;
  }

  const criteria = {
    name: name || undefined,
    category: category || undefined,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
  };

  const results = shop.searchSweetsByCriteria(criteria);
  renderTable(results);

  searchForm.reset();
});

function renderTable(sweets) {
  sweetTableBody.innerHTML = "";

  if (sweets.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 6;
    cell.style.textAlign = "center";

    if (shop.getSweets().length === 0) {
      cell.textContent = "No data available. Please add sweets.";
    } else {
      cell.textContent = "No sweets found.";
    }

    row.appendChild(cell);
    sweetTableBody.appendChild(row);
    return;
  }

  sweets.forEach((sweet) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${sweet.id}</td>
      <td>${sweet.name}</td>
      <td>${sweet.category}</td>
      <td>${sweet.price}</td>
      <td>${sweet.quantity}</td>
      <td>
        <button class="purchase" data-id="${sweet.id}">Purchase</button>
        <button class="restock" data-id="${sweet.id}">Restock</button>
        <button class="delete" data-id="${sweet.id}">Delete</button>
      </td>
    `;

    sweetTableBody.appendChild(row);
  });

  attachActionHandlers();
}

function attachActionHandlers() {
  document.querySelectorAll(".delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      shop.deleteSweet(id);
      renderTable(shop.getSweets());
    });
  });

  document.querySelectorAll(".purchase").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const input = prompt("Enter quantity to purchase:");
      if (input === null) return;

      const quantity = Number(input);
      if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity greater than 0.");
        return;
      }

      try {
        shop.purchaseSweet(id, quantity);
        renderTable(shop.getSweets());
      } catch (err) {
        alert(err.message);
      }
    });
  });

  document.querySelectorAll(".restock").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const input = prompt("Enter quantity to restock:");
      if (input === null) return;

      const quantity = Number(input);
      if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity greater than 0.");
        return;
      }

      try {
        shop.restockSweet(id, quantity);
        renderTable(shop.getSweets());
      } catch (err) {
        alert(err.message);
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderTable([]);
});
