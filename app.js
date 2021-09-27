const btnmonthly = document.querySelector(".btnmonthly");
const time = document.getElementById("time");
const views = ["10K pageviews","50K pageviews","100K pageviews","500k pageviews","1M pageviews"]
const money = ["$8.00 ", "$12.00 ", "$16.00 ", "$24.00 ", "$36.00 "]
const moneyId = document.getElementById("money");
const viewamount = document.getElementById("viewamount");
const myRange = document.getElementById("myRange");

// Monthly Billing button function

document.getElementById("monthlybill").addEventListener("click", function() {
  
  document.querySelector(".btnmonthly").removeAttribute("id");
  document.querySelector(".btnmonthly").id = "monthlybilldark";
  document.querySelector(".btnyearly").removeAttribute("id");
  time.innerHTML = " /month";
  const rangeValue = myRange.value;

  const viewValue = views[rangeValue - 1];
  viewamount.innerHTML =`${viewValue}`;
  const moneyValue = money[rangeValue - 1];
   moneyId.innerHTML =`${moneyValue}`;



  function updateTextInput() {
    time.innerHTML = " /month";
   const rangeValue = myRange.value;
    const moneyValue = money[rangeValue - 1];
    const viewValue = views[rangeValue - 1];
    moneyId.innerHTML =`${moneyValue}`;
    viewamount.innerHTML =`${viewValue}`;

  };
  
// Range movement for monthly billing

myRange.addEventListener('mouseup', updateTextInput);
});



// Yearly billing button function

document.getElementById("yearlybill").addEventListener("click", function() {
  document.querySelector(".btnyearly").removeAttribute("id");
  document.querySelector(".btnyearly").id = "monthlybilldark";
  document.querySelector(".btnmonthly").removeAttribute("id");
 time.innerHTML = " /year";
 const money = ["$80.00 ", "$120.00 ", "$160.00 ", "$240.00 ", "$360.00 "]

 const rangeValue = myRange.value;
    const moneyValue = money[rangeValue - 1];
    moneyId.innerHTML =`${moneyValue}`;
    const viewValue = views[rangeValue - 1];
    viewamount.innerHTML =`${viewValue}`;



  function updateTextInput() {
    time.innerHTML = "/year"
    const rangeValue = myRange.value;
    const moneyValue = money[rangeValue - 1];
    const viewValue = views[rangeValue - 1];
  moneyId.innerHTML =`${moneyValue}`;
    viewamount.innerHTML =`${viewValue}`;

  
  };
  
  
// Range movement for yearly billing
  
myRange.addEventListener('mouseup', updateTextInput);
});

document.getElementById("start").addEventListener("click", function(){

  alert("You got scammed ;)")
});