document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // Remove active class from all tabs and contents
        tabs.forEach((tab) => tab.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));
  
        // Add active class to the clicked tab and the corresponding content
        tab.classList.add("active");
        document.getElementById(tab.dataset.target).classList.add("active");
      });
    });
  
    // Set the default active tab
    tabs[0].classList.add("active");
    tabContents[0].classList.add("active");
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const initialPrice = 5.9;
    const esimInput = document.getElementById("esim");
    const addEsimButton = document.getElementById("add-esim");
    const subtractEsimButton = document.getElementById("subtract-esim");
    const totalPriceElement = document.querySelector(".total-price");
  
    addEsimButton.addEventListener("click", function () {
      esimInput.value = parseInt(esimInput.value) + 1;
      updateTotalPrice();
    });
  
    subtractEsimButton.addEventListener("click", function () {
      if (esimInput.value > 1) {
        esimInput.value = parseInt(esimInput.value) - 1;
        updateTotalPrice();
      }
    });
  
    function updateTotalPrice() {
      const totalPrice = initialPrice * parseInt(esimInput.value);
      totalPriceElement.textContent = `Total Price: €${totalPrice.toFixed(
        2
      )} EUR`;
    }
  });
  