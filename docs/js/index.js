//miniatures click
const cerealsMin = document.querySelector('.cerealsMin');
const scrambledEggsMin = document.querySelector('.scrambledEggsMin');
const friedEggMin = document.querySelector('.friedEggMin');
const pancakesMin = document.querySelector('.pancakesMin');
const cottageCheeseMin = document.querySelector('.cottageCheeseMin');
const drinkMin = document.querySelector('.drinkMin');

const sectionMealsDetails = document.querySelector('.sectionMealsDetails');

const cerealsMax = document.querySelector('.cerealsMax');
const scrambledEggsMax = document.querySelector('.scrambledEggsMax');
const friedEggMax = document.querySelector('.friedEggMax');
const pancakesMax = document.querySelector('.pancakesMax');
const cottageCheeseMax = document.querySelector('.cottageCheeseMax');
const drinkMax = document.querySelector('.drinkMax');

cerealsMin.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'flex';
    cerealsMax.style.display = 'flex';
});

scrambledEggsMin.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'flex';
    scrambledEggsMax.style.display = 'flex';
});

friedEggMin.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'flex';
    friedEggMax.style.display = 'flex';
});

pancakesMin.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'flex';
    pancakesMax.style.display = 'flex';
});

cottageCheeseMin.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'flex';
    cottageCheeseMax.style.display = 'flex';
});

drinkMin.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'flex';
    drinkMax.style.display = 'flex';
});
