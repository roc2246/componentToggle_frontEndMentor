const toggle = document.querySelector("input");

const monthlyCost = document.querySelectorAll(".plan__cost--monthly");
const yearlyCost = document.querySelectorAll(".plan__cost--annually");

const togglePrice = () => {
  Object.keys(monthlyCost).forEach((cost) => {
    if (toggle.checked === false) {
      monthlyCost[cost].style.display = "none";
      yearlyCost[cost].style.display = "inline";
    } else {
      monthlyCost[cost].style.display = "inline";
      yearlyCost[cost].style.display = "none";
    }
  });
};
