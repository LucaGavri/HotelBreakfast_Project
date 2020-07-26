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
const cerealsProdAdded = document.querySelector('.cerealsMax .productAdded');

cerealsAddBtn.addEventListener('click', function (e) {
    if (cerealsAdd.value > 0) {
        e.preventDefault();
        var cerealsToList = document.createElement("p");
        cerealsToList.classList.add('cerealsToList');
        cerealsToList.innerHTML = "Cereals with fresh fruits x " + cerealsAdd.value + " " + '<i class="fas fa-times"></i>';
        cartList.appendChild(cerealsToList.cloneNode(true));
        cerealsAdd.value = 0;
        cerealsProdAdded.style.display = 'flex';
        window.setTimeout("cerealsProdAdded.style.display ='none'", 2000);
    }
});

//scrambled eggs

const scrambledEggsAdd = document.querySelector('.numberScrambledEggsInput');
const scrambledEggsAddBtn = document.querySelector('.scrambledEggsMax .orderBtn');
const scrambledEggsProdAdded = document.querySelector('.scrambledEggsMax .productAdded');

scrambledEggsAddBtn.addEventListener('click', function (e) {
    if (scrambledEggsAdd.value > 0) {
        e.preventDefault();
        var scrambledEggsToList = document.createElement("p");
        scrambledEggsToList.classList.add('scrambledEggsToList');
        scrambledEggsToList.innerHTML = "Scrambled eggs with toast bread x " + scrambledEggsAdd.value + " " + '<i class="fas fa-times"></i>';
        cartList.appendChild(scrambledEggsToList.cloneNode(true));
        scrambledEggsAdd.value = 0;
        scrambledEggsProdAdded.style.display = 'flex';
        window.setTimeout("scrambledEggsProdAdded.style.display ='none'", 2000);
    }
});

//fried egg

const friedEggAdd = document.querySelector('.numberFriedEggInput');
const friedEggAddBtn = document.querySelector('.friedEggMax .orderBtn');
const friedEggProdAdded = document.querySelector('.friedEggMax .productAdded');

friedEggAddBtn.addEventListener('click', function (e) {
    if (friedEggAdd.value > 0) {
        e.preventDefault();
        var friedEggToList = document.createElement("p");
        friedEggToList.classList.add('friedEggToList');
        friedEggToList.innerHTML = "Fried eggs with bacon x " + friedEggAdd.value + " " + '<i class="fas fa-times"></i>';
        cartList.appendChild(friedEggToList.cloneNode(true));
        friedEggAdd.value = 0;
        friedEggProdAdded.style.display = 'flex';
        window.setTimeout("friedEggProdAdded.style.display ='none'", 2000);
    }
});

//pancakes

const pancakesAdd = document.querySelector('.numberPancakesInput');
const pancakesAddBtn = document.querySelector('.pancakesMax .orderBtn');
const pancakesProdAdded = document.querySelector('.pancakesMax .productAdded');

pancakesAddBtn.addEventListener('click', function (e) {
    if (pancakesAdd.value > 0) {
        e.preventDefault();
        var pancakesToList = document.createElement("p");
        pancakesToList.classList.add('pancakesToList');
        pancakesToList.innerHTML = "Pancakes with maple syrup x " + pancakesAdd.value + " " + '<i class="fas fa-times"></i>';
        cartList.appendChild(pancakesToList.cloneNode(true));
        pancakesAdd.value = 0;
        pancakesProdAdded.style.display = 'flex';
        window.setTimeout("pancakesProdAdded.style.display ='none'", 2000);
    }
});

//cottage cheese

const cottageCheeseAdd = document.querySelector('.numberCottageCheeseInput');
const cottageCheeseAddBtn = document.querySelector('.cottageCheeseMax .orderBtn');
const cottageCheeseProdAdded = document.querySelector('.cottageCheeseMax .productAdded');

cottageCheeseAddBtn.addEventListener('click', function (e) {
    if (cottageCheeseAdd.value > 0) {
        e.preventDefault();
        var cottageCheeseToList = document.createElement("p");
        cottageCheeseToList.classList.add('cottageCheeseToList');
        cottageCheeseToList.innerHTML = "Cottage cheese with radish and chives x " + cottageCheeseAdd.value + " " + '<i class="fas fa-times"></i>';
        cartList.appendChild(cottageCheeseToList.cloneNode(true));
        cottageCheeseAdd.value = 0;
        cottageCheeseProdAdded.style.display = 'flex';
        window.setTimeout("cottageCheeseProdAdded.style.display ='none'", 2000);
    }
});

//drinks
const drinkAddBtn = document.querySelector('.drinkMax .order .orderBtn');
const drinkProdAdded = document.querySelector('.drinkMax .productAdded');
const blackTeaAdd = document.querySelector('.numberBlackTeaInput');
const greenTeaAdd = document.querySelector('.numberGreenTeaInput');
const coffeeAdd = document.querySelector('.numberCoffeeInput');
const cocoaAdd = document.querySelector('.numberCocoaInput');
const waterAdd = document.querySelector('.numberWaterInput');
const redWineAdd = document.querySelector('.numberRedWineInput');
const whiteWineAdd = document.querySelector('.numberWhiteWineInput');


drinkAddBtn.addEventListener('click', function (e) {
    e.preventDefault();
    //black tea
    var blackTeaF = function () {
        if (blackTeaAdd.value > 0) {
            var blackTeaToList = document.createElement("p");
            blackTeaToList.classList.add('blackTeaToList');
            blackTeaToList.innerHTML = "Black tea x " + blackTeaAdd.value + " " + '<i class="fas fa-times"></i>';
            cartList.appendChild(blackTeaToList.cloneNode(true));
            blackTeaAdd.value = 0;
        }
    };
    blackTeaF();

    //green tea
    var greenTeaF = function () {
        if (greenTeaAdd.value > 0) {
            var greenTeaToList = document.createElement("p");
            greenTeaToList.classList.add('greenTeaToList');
            greenTeaToList.innerHTML = "Green tea x " + greenTeaAdd.value + " " + '<i class="fas fa-times"></i>';
            cartList.appendChild(greenTeaToList.cloneNode(true));
            greenTeaAdd.value = 0;
        }
    };
    greenTeaF();

    //coffee
    var coffeeF = function () {
        if (coffeeAdd.value > 0) {
            var coffeeToList = document.createElement("p");
            coffeeToList.classList.add('coffeeToList');
            coffeeToList.innerHTML = "Coffee x " + coffeeAdd.value + " " + '<i class="fas fa-times"></i>';
            cartList.appendChild(coffeeToList.cloneNode(true));
            coffeeAdd.value = 0;
        }
    };
    coffeeF();

    //cocoa
    var cocoaF = function () {
        if (cocoaAdd.value > 0) {
            var cocoaToList = document.createElement("p");
            cocoaToList.classList.add('cocoaToList');
            cocoaToList.innerHTML = "Cocoa x " + cocoaAdd.value + " " + '<i class="fas fa-times"></i>';
            cartList.appendChild(cocoaToList.cloneNode(true));
            cocoaAdd.value = 0;
        }
    };
    cocoaF();

    //water
    var waterF = function () {
        if (waterAdd.value > 0) {
            var waterToList = document.createElement("p");
            waterToList.classList.add('waterToList');
            waterToList.innerHTML = "Water x " + waterAdd.value + " " + '<i class="fas fa-times"></i>';
            cartList.appendChild(waterToList.cloneNode(true));
            waterAdd.value = 0;
        }
    };
    waterF();

    //red wine
    var redWineF = function () {
        if (redWineAdd.value > 0) {
            var redWineToList = document.createElement("p");
            redWineToList.classList.add('redWineToList');
            redWineToList.innerHTML = "Red wine x " + redWineAdd.value + " " + '<i class="fas fa-times"></i>';
            cartList.appendChild(redWineToList.cloneNode(true));
            redWineAdd.value = 0;
        }
    };
    redWineF();

    //white wine
    var whiteWineF = function () {
        if (whiteWineAdd.value > 0) {
            var whiteWineToList = document.createElement("p");
            whiteWineToList.classList.add('whiteWineToList');
            whiteWineToList.innerHTML = "White wine x " + whiteWineAdd.value + " " + '<i class="fas fa-times"></i>';
            cartList.appendChild(whiteWineToList.cloneNode(true));
            whiteWineAdd.value = 0;
        }
    };
    whiteWineF();

    //add anim
    drinkProdAdded.style.display = 'flex';
    window.setTimeout("drinkProdAdded.style.display ='none'", 2000);
});

//removing from cart
// const removeCartBtns = document.querySelector('.toOrderCart .whiteWineToList .fas');
//
// removeCartBtns.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('dsd');
// });

