//alert
// alert('hello! This site is in progress. Back in a few days if you want to see all functionalities ;)');

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

//meals counters
const numberCerealsInput = document.querySelector('.numberCerealsInput');
const numberScrambledEggsInput = document.querySelector('.numberScrambledEggsInput');
const numberFriedEggInput = document.querySelector('.numberFriedEggInput');
const numberPancakesInput = document.querySelector('.numberPancakesInput');
const numberCottageCheeseInput = document.querySelector('.numberCottageCheeseInput');
const numberBlackTeaInput = document.querySelector('.numberBlackTeaInput');
const numberGreenTeaInput = document.querySelector('.numberGreenTeaInput');
const numberCoffeeInput = document.querySelector('.numberCoffeeInput');
const numberCocoaInput = document.querySelector('.numberCocoaInput');
const numberWaterInput = document.querySelector('.numberWaterInput');
const numberRedWineInput = document.querySelector('.numberRedWineInput');
const numberWhiteWineInput = document.querySelector('.numberWhiteWineInput');

const cerealsPlus = document.querySelector('.cerealsPlus');
const cerealsMinus = document.querySelector('.cerealsMinus');
const scrambledEggsPlus = document.querySelector('.scrambledEggsPlus');
const scrambledEggsMinus = document.querySelector('.scrambledEggsMinus');
const friedEggPlus = document.querySelector('.friedEggPlus');
const friedEggMinus = document.querySelector('.friedEggMinus');
const pancakesPlus = document.querySelector('.pancakesPlus');
const pancakesMinus = document.querySelector('.pancakesMinus');
const cottageCheesePlus = document.querySelector('.cottageCheesePlus');
const cottageCheeseMinus = document.querySelector('.cottageCheeseMinus');

const blackTeaPlus = document.querySelector('.blackTeaPlus');
const blackTeaMinus = document.querySelector('.blackTeaMinus');
const greenTeaPlus = document.querySelector('.greenTeaPlus');
const greenTeaMinus = document.querySelector('.greenTeaMinus');
const coffeePlus = document.querySelector('.coffeePlus');
const coffeeMinus = document.querySelector('.coffeeMinus');
const cocoaPlus = document.querySelector('.cocoaPlus');
const cocoaMinus = document.querySelector('.cocoaMinus');
const waterPlus = document.querySelector('.waterPlus');
const waterMinus = document.querySelector('.waterMinus');
const redWinePlus = document.querySelector('.redWinePlus');
const redWineMinus = document.querySelector('.redWineMinus');
const whiteWinePlus = document.querySelector('.whiteWinePlus');
const whiteWineMinus = document.querySelector('.whiteWineMinus');

cerealsPlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberCerealsInput.stepUp(1);
});
cerealsMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberCerealsInput.stepDown(1);
});

scrambledEggsPlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberScrambledEggsInput.stepUp(1);
});
scrambledEggsMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberScrambledEggsInput.stepDown(1);
});

friedEggPlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberFriedEggInput.stepUp(1);
});
friedEggMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberFriedEggInput.stepDown(1);
});

pancakesPlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberPancakesInput.stepUp(1);
});
pancakesMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberPancakesInput.stepDown(1);
});

cottageCheesePlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberCottageCheeseInput.stepUp(1);
});
cottageCheeseMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberCottageCheeseInput.stepDown(1);
});

blackTeaPlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberBlackTeaInput.stepUp(1);
});
blackTeaMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberBlackTeaInput.stepDown(1);
});

greenTeaPlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberGreenTeaInput.stepUp(1);
});
greenTeaMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberGreenTeaInput.stepDown(1);
});

coffeePlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberCoffeeInput.stepUp(1);
});
coffeeMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberCoffeeInput.stepDown(1);
});

cocoaPlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberCocoaInput.stepUp(1);
});
cocoaMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberCocoaInput.stepDown(1);
});

waterPlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberWaterInput.stepUp(1);
});
waterMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberWaterInput.stepDown(1);
});

redWinePlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberRedWineInput.stepUp(1);
});

cottageCheesePlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberCottageCheeseInput.stepUp(1);
});
cottageCheeseMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberCottageCheeseInput.stepDown(1);
});
redWineMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberRedWineInput.stepDown(1);
});

whiteWinePlus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberWhiteWineInput.stepUp(1);
});
whiteWineMinus.addEventListener('click', function (e) {
    (e).preventDefault();
    numberWhiteWineInput.stepDown(1);
});

//cart

const cartList = document.querySelector('.toOrderCart');

    //adding to cart
    //cereals

const cerealsAdd = document.querySelector('.numberCerealsInput');
const cerealsAddBtn = document.querySelector('.cerealsMax .orderBtn');

cerealsAddBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var cerealsToList = document.createElement("p");
    cerealsToList.classList.add('cerealsToList');
    cerealsToList.innerHTML = "Cereals with fresh fruits x " + cerealsAdd.value + " " + '<i class="fas fa-times"></i>';
    cartList.appendChild(cerealsToList.cloneNode(true));
});

    //scrambled eggs

const scrambledEggsAdd = document.querySelector('.numberScrambledEggsInput');
const scrambledEggsAddBtn = document.querySelector('.scrambledEggsMax .orderBtn');

scrambledEggsAddBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var scrambledEggsToList = document.createElement("p");
    scrambledEggsToList.classList.add('scrambledEggsToList');
    scrambledEggsToList.innerHTML = "Scrambled eggs with toast bread x " + scrambledEggsAdd.value + " " + '<i class="fas fa-times"></i>';
    cartList.appendChild(scrambledEggsToList.cloneNode(true));
});

    //fried egg

const friedEggAdd = document.querySelector('.numberFriedEggInput');
const friedEggAddBtn = document.querySelector('.friedEggMax .orderBtn');

friedEggAddBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var friedEggToList = document.createElement("p");
    friedEggToList.classList.add('scrambledEggsToList');
    friedEggToList.innerHTML = "Fried eggs with bacon x " + friedEggAdd.value + " " + '<i class="fas fa-times"></i>';
    cartList.appendChild(friedEggToList.cloneNode(true));
});
