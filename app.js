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
  const account_pricing_space=document.querySelector(".account-space");
  console.log(account_pricing_space)
  input_account.addEventListener("click", function() {
    const account = this.firstElementChild.nextElementSibling;
    if (account.style.display !== "block") {
      account.style.display = "block";
      account_pricing_space.style.display="flex";
    } else {
      account.style.display = "none";
      account_pricing_space.style.display="none";
    }
  });

  const input_rental = document.querySelector(".choose_option:nth-of-type(2)");
  const rental_pricing_space=document.querySelector(".rental-space");
  
  input_rental.addEventListener("click", function() {
    const rental = this.firstElementChild.nextElementSibling;
    if (rental.style.display !== "block") {
      rental.style.display = "block";
      rental_pricing_space.style.display="flex";
    } else {
      rental.style.display = "none";
      rental_pricing_space.style.display="none";
    }
  });



});
