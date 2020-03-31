document.addEventListener("DOMContentLoaded", function() {
  const input_in_form = document.querySelector(".input_personal");
  input_in_form.addEventListener("click", function() {
    const div = this.firstElementChild.firstElementChild;
    if (div.style.display !== "block") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
  const input_account = document.querySelector(".choose_option:first-of-type");
  const account_pricing_space = document.querySelector(".account-space");

  input_account.addEventListener("click", function() {
    const account = this.firstElementChild.nextElementSibling;
    if (account.style.display !== "block") {
      account.style.display = "block";
      account_pricing_space.style.display = "flex";
    } else {
      account.style.display = "none";
      account_pricing_space.style.display = "none";
    }
  });

  const input_rental = document.querySelector(".choose_option:nth-of-type(2)");
  const rental_pricing_space = document.querySelector(".rental-space");

  input_rental.addEventListener("click", function() {
    const rental = this.firstElementChild.nextElementSibling;
    if (rental.style.display !== "block") {
      rental.style.display = "block";
      rental_pricing_space.style.display = "flex";
    } else {
      rental.style.display = "none";
      rental_pricing_space.style.display = "none";
    }
  });

  function sum() {}

  const quantity = document.querySelector(
    ".inputs_section input:first-of-type"
  );
  quantity.addEventListener("input", function() {
    const quantityInput = quantity.value;
    const products = document.querySelector(".products");
    products.innerHTML = quantityInput;
    if (quantity.value == "") {
      products.innerHTML = "0";
    }
    const productsSum = document.querySelector(
      ".summary-space:first-of-type .price span"
    );
    const productsNumber = parseInt(productsSum.innerText);
    const newProductsSum = 0.5 * quantityInput;
    productsSum.innerHTML = newProductsSum;
  });


  const orders = document.querySelector(".inputs_section input:nth-of-type(2)");
  orders.addEventListener("input", function() {
    const ordersInput = orders.value;
    const monthly = document.querySelector(".orders");
    monthly.innerHTML = ordersInput;
    if (orders.value == "") {
      monthly.innerHTML = "0";
    }
    const ordersSum = document.querySelector(
      ".summary-space:nth-of-type(2) .price span"
    );
    const ordersNumber = parseInt(ordersSum.innerText);
    const newOrdersSum = 0.25 * ordersInput;
    ordersSum.innerHTML = newOrdersSum;
  });


  const packageSelect = document.querySelector("#package");
  console.log(packageSelect);
  packageSelect.addEventListener("change", function() {
    const packageName = document.querySelector(
      ".summary-space:nth-of-type(3) p:first-of-type"
    );

    const packageSum = document.querySelector(
      ".summary-space:nth-of-type(3) .price span"
    );
let newPackageSum=0;
    switch (this.value) {
      case "basic":
        packageName.innerHTML = "Basic";
        packageSum.innerText = "0";
        newPackageSum= parseInt(packageSum.innerText);
        break;
      case "professional":
          packageName.innerHTML = "Professional";
          packageSum.innerText = "25";
          newPackageSum= parseInt(packageSum.innerText);
          break;
      case "premium":
          packageName.innerHTML = "Premium";
          packageSum.innerText = "60";
          newPackageSum= parseInt(packageSum.innerText);
          break;

    }
  });
});
