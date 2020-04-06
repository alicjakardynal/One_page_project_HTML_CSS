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
  const account_price=document.querySelector(".account-space span");
  

  input_account.addEventListener("click", function() {
    const account = this.firstElementChild.nextElementSibling;
    if (account.style.display !== "block") {
      account.style.display = "block";
      account_pricing_space.style.display = "flex";
      account_price.innerText="35";
      const new__account_price=parseInt(account_price.innerText);
      
      
    } else {
      account.style.display = "none";
      account_pricing_space.style.display = "none";
      account_price.innerText="0";
      new__account_price=parseInt(account_price.innerText);
      
      

    }
    sum();
  });

  const input_rental = document.querySelector(".choose_option:nth-of-type(2)");
  const rental_pricing_space = document.querySelector(".rental-space");
  const rental_price=document.querySelector(".rental-space span");

  input_rental.addEventListener("click", function() {
    const rental = this.firstElementChild.nextElementSibling;
    if (rental.style.display !== "block") {
      rental.style.display = "block";
      rental_pricing_space.style.display = "flex";
      rental_price.innerText="5"
      const new_rental_price=parseInt(rental_price.innerText);
      
      
    } else {
      rental.style.display = "none";
      rental_pricing_space.style.display = "none";
      rental_price.innerText="0";
      new_rental_price=parseInt(rental_price.innerText);
    
      

    }
    sum();
  });

  const total_price=document.querySelector(".total span");
  const all_prices=document.querySelectorAll(".price span");
  

  
  function sum() {
    let sumary=0;
    
    for (let i=0;i<all_prices.length;i++){
     let rand = all_prices[i];
     const numbers = parseFloat(rand.innerText,4);
     sumary+= numbers;
    }
    
    total_price.innerText=sumary;

    


  }

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
    productsSum.innerText = newProductsSum;

    sum();
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
    sum();
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
    let newPackageSum = 0;
    switch (this.value) {
      case "basic":
        packageName.innerHTML = "Basic";
        packageSum.innerText = "0";
        newPackageSum = parseInt(packageSum.innerText);
        break;
      case "professional":
        packageName.innerHTML = "Professional";
        packageSum.innerText = "25";
        newPackageSum = parseInt(packageSum.innerText);
        break;
      case "premium":
        packageName.innerHTML = "Premium";
        packageSum.innerText = "60";
        newPackageSum = parseInt(packageSum.innerText);
        break;
    }
sum();

  });

  const navigation= document.querySelector(".navigation");
  console.log(navigation)
   const hamburger= document.querySelector(".hamburger");
     hamburger.addEventListener("click",function(){
if(navigation.style.display !== "block"){
  navigation.style.display="block"
}else{
navigation.style.display="none"
}
     })
   

     const navlist=document.querySelectorAll("nav li");
     console.log(navlist)
     for (let i = 0; i < navlist.length; i++) {
       navlist[i].addEventListener("click",function(){
         navigation.style.display="none"
       })
       
     }
});
