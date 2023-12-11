function inchToCm(inch) {
    let cm = inch * 2.54;
    console.log(cm);
}

inchToCm(5);


function greetings(name) {
    console.log(`Hello, ${name}`);
}

greetings("Martin");



//"You are <firstName> <lastName>, a <age>-years old person from <town>."

function solve(firstName, lastName, age, town) {
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

solve("Martin", "Saric", 29 , "Subotica");



//•	"The architect {name of architect} will need {numbers of hour needed} hours to complete {number of projects} project/s."

function solve(architect, projects) {
    let nameOfArchitect = architect;
    let numberOfProjects = projects;
    let numberOfHours = projects * 3;

    console.log(`The architect ${nameOfArchitect} will need ${numberOfHours} hours to complete ${numberOfProjects} project/s.`);
}

solve("Martin", 3);



function calculate(dogPackages, catPackages) {
    dogFood = dogPackages * 2.5;
    catFood = catPackages * 4;

    let finalAmount = dogFood + catFood;
    console.log(finalAmount);
}

calculate(5, 4);



function calculate(meters) {
    let squareMeter = meters * 7.61;
    let discount = squareMeter * 0.18;
    let finalPrice = squareMeter - discount;

   console.log(`THe final price is : ${finalPrice}`);
   console.log(`THe discount is : ${discount}`);

}   

calculate(550);



function converter(dollars) {
    let gbp = dollars * 0.81545;
    console.log(gbp);
}

converter(22);




function radiansToDegrees(radians) {
    let degree = radians * 180 / Math.PI;
    console.log(degree);
}

radiansToDegrees(3.1416);



function depositCalculator(depositedAmount, term, rate) {
    let annualRate = depositedAmount * rate/100;
    let monthRate = annualRate / 12;
    let termOfDeposit = term;

    let amount = depositedAmount + termOfDeposit * (monthRate);
    console.log(amount);
}

depositCalculator(200, 3, 5.7);



function calculate(currentPages, pagesPerHour, days) {
    let numberOfPages = currentPages;
    let pages = pagesPerHour * 1;
    let numberOfDays = days;

    let totalTime = numberOfPages / pages;
    let pagesPerDay = totalTime / numberOfDays

    console.log(pagesPerDay);        
}

calculate(100, 10, 5);


function calculate(penPackets, markerPackets, boardCleanerLiters, discountPercentage) {
    let pens = penPackets * 5.8;
    let markers = markerPackets * 7.2;
    let board = boardCleanerLiters * 1.2;
    let discount = discountPercentage;
    let totalMaterial = pens + markers + board;
    let totalPrice = totalMaterial - (totalMaterial * discount/100);
    
    console.log(totalPrice);
}

calculate(2, 3, 4, 25);



function calculate(nylon, paint, thinner, hours) {
    let amountNylon = (nylon + 2)* 1.5;
    let amountPaint = (paint + 1.1) * 14.5;
    let amountThinner = thinner * 5;
    let amountHours = hours;

    let material = amountNylon + amountPaint + amountThinner + 0.4;
    let craftsmen = (material * 0.3) * amountHours;
    let total = material + craftsmen;

    console.log(total);

}
calculate(10, 11, 4, 8);



function calculate(chicken, fish, vegetarian) {
    let chickenMenu = chicken * 10.35;
    let fishMenu = fish * 12.4;
    let vegeMenu = vegetarian * 8.15;

    let total = chickenMenu + fishMenu + vegeMenu + 2.5;
    let desert = total * 0.2;
    let priceOfOrder = total + desert;

    console.log(priceOfOrder);
}

calculate(2, 4, 3);



function calculate(annualFee) {
    let sneakers = annualFee * 0.6;
    let suit = sneakers - (sneakers * 0.2);
    let basketball = suit * 0.25;
    let accessories = basketball * 0.2;

    let totalCoast = annualFee + sneakers + suit + basketball + accessories;
    console.log(totalCoast);
}

calculate(365);



function calculate(length, width, height, percentage) {
    let pesak = percentage/100;
    let zapreminaAkvarijuma = length * width * height;
    let zapreminaVode = zapreminaAkvarijuma / 1000;
    
    let potrebnoLitara = zapreminaVode * ( 1 - pesak);

    console.log(potrebnoLitara);
}

calculate(85, 75, 47, 17);
