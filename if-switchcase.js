function isStoreOpen(day, time) {
    day = String(day);
    time = parseInt(time);

    if(
        (day === "Monday" || 
        day === "Tuesday" || 
        day === "Wednesday" || 
        day === "Thursday" || 
        day === "Friday") && 
        (time >= 10 && 
        time <= 14)) {
        console.log("Prodavnica je otvorena");
    } else {
        console.log("Prodavnica je zatvorena");
    }
}

isStoreOpen("Monday", 10);



function solve(time, day) {
    time = parseInt(time);
    day = String(day);

    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if(time >= 10 && time < 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
            default:
                console.log("closed");
                break;
    }
}

solve(11, "Monday");




function solve(day) {
    day = String(day);

    switch(day) {
        case "Monday":
            price = 12;
        case "Tuesday":
            price = 12;
        case "Wednesday":
            price = 14;
        case "Thursday":
            price = 14;
        case "Friday":
            price = 12;
        case "Saturday":
            price = 16;
        case "Sunday":
            price = 16;
    console.log(price);
    break;
    default:
        console.log("uknown");
        break;
        }
}

solve("Thursday");



function solve(productName) {
    productName = String(productName);

    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
    let vegetable = ["tomato", "cucumber", "pepper", "carrot"];

    if(fruits.includes(productName)) {
        console.log("fruit");
    } else if(vegetable.includes(productName)) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}

solve("carrot");




function solve(fruit, day, quantity) {

    fruit = String(fruit);
    day = String(day);
    quantity = Number(quantity);

   switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            bananaPrice = 2.5;
            applePrice = 1.2;
            orangePrice = 0.85;
            grapefruitPrice = 1.45;
            kiwiPrice = 2.7;
            pineapplePrice = 5.5;
            grapesPrice = 3.85;

            switch(fruit) {
                case "banana":
                    console.log((bananaPrice * quantity).toFixed(2));
                    break;
                case "apple":
                    console.log((applePrice * quantity).toFixed(2));
                    break;
                case "orange":
                    console.log((orangePrice * quantity).toFixed(2));
                    break;
                case "grapeFruit":
                    console.log((grapefruitPrice * quantity).toFixed(2));
                    break;
                case "kiwi":
                    console.log((kiwiPrice * quantity).toFixed(2));
                    break;
                case "pineapple":
                    console.log((pineapplePrice * quantity).toFixed(2));
                    break;
                case "grapes":
                    console.log((grapesPrice * quantity).toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            
            }
            break;
            case "Saturday":
            case "Sunday":
                bananaPrice = 2.7;
                applePrice = 1.25;
                orangePrice = 0.9;
                grapefruitPrice = 1.60;
                kiwiPrice = 3.0;
                pineapplePrice = 5.6;
                grapesPrice = 4.20;

                switch(fruit) {
                    case "banana":
                        console.log((bananaPrice * quantity).toFixed(2));
                        break;
                    case "apple":
                        console.log((applePrice * quantity).toFixed(2));
                        break;
                    case "orange":
                        console.log((orangePrice * quantity).toFixed(2));
                        break;
                    case "grapefruit":
                        console.log((grapefruitPrice * quantity).toFixed(2));
                        break;
                    case "kiwi":
                        console.log((kiwiPrice * quantity).toFixed(2));
                        break;
                    case "pineapple":
                        console.log((pineapplePrice * quantity).toFixed(2));
                        break;
                    case "grapes":
                        console.log((grapesPrice * quantity).toFixed(2));
                        break;
                    default:
                        console.log("error");
                        break;
                    
                }
                break;
            default:
                console.log("error");
                break;    
    }
}

solve("grapefruit", "Saturday", 1.25);




function solve(projectionType, numRows, numCols) {
    projectionType = String(projectionType);
    numRows = Number(numRows);
    numCols = Number(numCols);

    switch(projectionType) {
        case "Premiere":
            income = numRows * numCols * 12.0;
            break;
        case "Normal":
            income = numRows * numCols * 7.5;
            break;
        default:
            income = numRows * numCols * 5.0;
            break;
    }

    console.log(`${income.toFixed(2)} USD`)
}

solve("Premiere", 10, 12);



function calculate(degrees, timeOfDay) {
    degrees = Number(degrees);
    timeOfDay = String(timeOfDay);
    let outfit;
    let shoes;

    if(10<= degrees <= 18) {

        switch(timeOfDay) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

    } else if(18 < degrees <=24) {
        
        switch(timeOfDay) {
            case "Morning":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

    } else if(degrees >= 25) {

        switch(timeOfDay) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
        console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    }
}


calculate(28, "Morning");




function solve(flower, number, budget ) {
    
    flower = String(flower);
    number = Number(number);
    budget = Number(budget);

    let price = 0;

    if(flower === "Roses") {
        price = number * 5.0;
        if(number > 80) {
            price = price * 0.9;
        }
    } else if( flower === "Dahlias") {
        price = number * 3.8;
        if(number > 90) {
            price = price * 0.85;
        }
    } else if( flower === "Tulips") {
        price = number * 2.8;
        if(number > 80) {
            price = price * 0.85;
        }
    } else if( flower === "Narcissus") {
        price = number * 3.0;
        if(number < 120) {
            price = price * 1.15;
        }
    } else if( flower === "Gladiolus") {
        price = number * 2.5;
        if(number < 80) {
            price = price * 1.2;
        }
    }
    
    if(budget >= price) {
        let left = budget - price;
        console.log(`Hey, you have a great garden with ${number} ${flower} and ${left.toFixed(2)} USD left.`)
    } else {
        let need = price - budget;
        console.log(`Not enough money, you need ${need.toFixed(2)} USD more.`);
    }
}

solve("Tulips", 88, 260);





























