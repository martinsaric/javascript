function convertor(dollars) {
    let gbp = dollars * 0.81545;
    console.log(gbp);
}

convertor(5);

console.log("***********************************")

function radiansToDegrees(radians) {
    let degree = radians * 180 / Math.PI
    console.log(degree);
}

radiansToDegrees(5);



console.log("***********************************")



function depositCalculator(depositedAmount, term, rate) {
    let deposit = depositedAmount;
    let termOfTheDeposit = term;
    let annualInterestRate = depositedAmount * (rate / 100) ;
    let monthInterestRate = annualInterestRate / 12;
   
    let total = deposit + termOfTheDeposit * monthInterestRate;
    console.log(total);
}

depositCalculator(200, 3, 5.7);


console.log("***********************************")

function calculate(currentPages, pagesPerHour, days) {
    
    let numberOfPages = currentPages
    let pages = pagesPerHour;
    let numberOfDays = days;
    let totalTimeToRead = numberOfPages / pages;
    let numberOfHoursEachDay = totalTimeToRead / numberOfDays;
    
    console.log(numberOfHoursEachDay);
}

calculate(200, 10, 5);


console.log("***********************************")


function calculate(penPackets, markerPackets, boardCleanerLiters, discountPercentage) {
    let packetsOfPen = penPackets * 5.8;
    let packetsOFMarkers = markerPackets * 7.2;
    let boardCleaner = boardCleanerLiters * 1.2;
    let discount = discountPercentage;
    let sum = (packetsOfPen + packetsOFMarkers + boardCleaner);
    let amount = (packetsOfPen + packetsOFMarkers + boardCleaner) - ( sum * discount / 100)
    console.log(amount);
}   

calculate(10, 4, 6, 5);


console.log("***********************************")      


function calculate(nylon, paint, thinner, hours) {
    let amountOfNylon = nylon
    let amountOfPaint = paint
    let qualityOfThinner = thinner
    let sumMaterial = (amountOfNylon + 2) * 1.5 + amountOfPaint * 1.1 * 14.5  + qualityOfThinner * 5 + 0.4;
    let priceOfHours = sumMaterial * 0.3;

    let sumOfAllCost = sumMaterial + priceOfHours * hours;
    console.log(sumOfAllCost);
}

calculate(10, 11, 4, 8);



console.log("***********************************") 


function calculate(chicken, fish, vegetarian) {

    let chickenMenu = chicken * 10.35;
    let fishMenu = fish * 12.4;
    let vegeMenu = vegetarian * 8.15;
    let total = chickenMenu + fishMenu + vegeMenu
    let desertPrice = total * 0.2;
    let priceOfOrder = total + desertPrice + 2.5;

    console.log(priceOfOrder);
}

calculate(2, 4, 3);

console.log("***********************************") 



function calculate(annualFee)  {
   let sneakers = annualFee * 0.6;
   let suit = sneakers - (sneakers * 0.2);
   let basketball = suit * 0.25;
   let accessories = basketball * 0.2;
    let total = annualFee + sneakers + suit + basketball + accessories;

    console.log(total);
}

calculate(365);

console.log("***********************************") 



function calculate(length, width, height, percentage) {
    let volume = length * width * height;
    let volumeWater = volume * 0.001;
    let volumeSand = percentage / 100;
    let litersNeeded = volumeWater * (1 - volumeSand);
    console.log(litersNeeded);
}

calculate(85, 75, 47, 17);
