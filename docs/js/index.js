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

//meal show hiding
const cerealsMaxQuit = document.querySelector('.cerealsMaxQuit');
const scrambledEggsMaxQuit = document.querySelector('.scrambledEggsMaxQuit');
const friedEggMaxQuit = document.querySelector('.friedEggMaxQuit');
const pancakesMaxQuit = document.querySelector('.pancakesMaxQuit');
const cottageCheeseMaxQuit = document.querySelector('.cottageCheeseMaxQuit');
const drinkMaxQuit = document.querySelector('.drinkMaxQuit');

cerealsMaxQuit.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'none';
    cerealsMax.style.display = 'none';
});

scrambledEggsMaxQuit.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'none';
    scrambledEggsMax.style.display = 'none';
});

friedEggMaxQuit.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'none';
    friedEggMax.style.display = 'none';
});

pancakesMaxQuit.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'none';
    pancakesMax.style.display = 'none';
});

cottageCheeseMaxQuit.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'none';
    cottageCheeseMax.style.display = 'none';
});

drinkMaxQuit.addEventListener('click', function (e) {
    e.preventDefault();
    sectionMealsDetails.style.display = 'none';
    drinkMax.style.display = 'none';
});

//cart open/hiding
const showCart = document.querySelector('.showCart');
const hideCart = document.querySelector('.hideCart');
const sectionCart = document.querySelector('.sectionCart');


showCart.addEventListener('click', function (e) {
    e.preventDefault();
    sectionCart.style.left = '0';
});

hideCart.addEventListener('click', function (e) {
    e.preventDefault();
    sectionCart.style.left = '100vw';
});

