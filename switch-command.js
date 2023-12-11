function kojiJeDan(redniBrojDana) {
    let day = String(redniBrojDana);

    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error")
            break;
    }
}

kojiJeDan("Saturday");





function animals(name) {

    switch(name) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}

animals("dog");



function godine(age, gender) {
    let godine = Number.parseFloat(age);
    let pol = String(gender);

    if(pol === 'm') {
        if(godine >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    }

    if(pol === "f") {
        if(godine >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }
}

godine(12, 'f');



function calculate(product, city, quantity) {

    let proizvod = String(product);
    let grad = String(city);
    let kolicina = Number(quantity);

    const prices = {
        coffee: {London: 0.5, Rome: 0.4, Paris: 0.45},
        water: {London: 0.8, Rome: 0.7, Paris: 0.7},
        beer: {London: 1.2, Rome: 1.15, Paris: 1.1},
        sweets: {London: 1.45, Rome: 1.3, Paris: 1.35},
        peanuts: {London: 1.6, Rome: 1.5, Paris: 1.55},
    };

    
        let cost = prices[proizvod][grad] * kolicina;
        console.log(cost);
    
      
}

calculate("peanuts", "Rome", 1);




function calculate(product, city, quantity) {

    let proizvod = String(product);
    let grad = String(city);
    let kolicina = Number(quantity);

    if(grad === "London") {
        switch(proizvod) {
            case "coffee":
                price = 0.5;
                break;
            case "water":
                price = 0.8;
                break;
            case "beer":
                price = 1.2;
                break;
            case "sweets":
                price = 1.45;
                break;
            case "peanuts":
                price = 1.6;
                break;
        }} else if(city === "Rome") {
            switch(proizvod) {
                case "coffee":
                    price = 0.4;
                    break;
                case "water":
                    price = 0.7;
                    break;
                case "beer":
                    price = 1.15;
                    break;
                case "sweets":
                    price = 1.3;
                    break;
                case "peanuts":
                    price = 1.5;
                    break;
            }} else if(proizvod === "Paris") {
                switch(proizvod) {
                    case "coffee":
                        price = 0.45;
                        break;
                    case "water":
                        price = 0.7;
                        break;
                    case "beer":
                        price = 1.1;
                        break;
                    case "sweets":
                        price = 1.35;
                        break;
                    case "peanuts":
                        price = 1.55;
                        break;
                    }
                }
                
                sum = price * kolicina;
                console.log(sum);
    
}       


