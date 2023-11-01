//! ================================
//* ========= Filters ==============
//! ================================
let filters = document.querySelectorAll(".filter");
let meals = document.querySelectorAll(".meal");

filters.forEach((filter) => {
    filter.addEventListener("click", removeClass);
    filter.addEventListener("click", manageMeals);
});

function removeClass() {
    filters.forEach((filter)=>{
        filter.classList.remove("active");
        this.classList.add("active");
    });
}

function manageMeals() {
    meals.forEach((meal) => {
        meal.style.display = 'none';
    });
    let dataFood = document.querySelectorAll(this.dataset.food);
    dataFood.forEach((element) => {
        element.style.display = 'block';
    })
}

