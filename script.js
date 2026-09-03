// Reserve a meal
function reserveMeal(mealName) {

  alert(
    "🌱 Harvest PH\n\n" +
    mealName +
    " has been selected!\n\n" +
    "Checkout functionality will be connected here."
  );

}


// Restaurant registration
function restaurantSignup() {

  alert(
    "🏪 Become a Harvest PH Partner\n\n" +
    "Restaurant registration will be connected here."
  );

}


// Meal search
const searchInput = document.getElementById("searchInput");
const mealCards = document.querySelectorAll(".meal-card");

searchInput.addEventListener("input", function () {

  const search = this.value.toLowerCase();

  mealCards.forEach(function (card) {

    const text = card.innerText.toLowerCase();

    if (text.includes(search)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }

  });

});
