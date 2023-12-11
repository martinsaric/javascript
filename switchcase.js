function dan(redniBrojDana) {

    if(redniBrojDana === 1) {
        console.log("Monday")
    } else if(redniBrojDana === 2) {
        console.log("Tuesday");
    } else if(redniBrojDana === 3) {
        console.log("Wednesday");
    } else if(redniBrojDana === 4) {
        console.log("Thursday");
    }else if(redniBrojDana === 5) {
        console.log("Friday");
    } else if(redniBrojDana === 6) {
        console.log("Saturday");
    } else if(redniBrojDana === 7) {
        console.log("Sunday");
    } else {
        console.log("Error");
    }
}

dan(6);




function solve(day) {
    day = +day;

    switch(day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("WSunday");
            break;
        default:
            console.log("Error");
            break;
    }
}



console.log("*********************")



function processFoodOrder(foodType) {
    let food = String(foodType);
    let price;
    let extras;
    let deliveryTime;

    switch(food) {
        case "pizza":
            price = 10;
            deliveryTime = 30;
            extras = "Free Origano";
            break;
        case "burger":
            price = 8;
            deliveryTime = 20;
            extras = "Burger Sos";
            break;
        case "sushi":
            price = 15;
            deliveryTime = 40;
            extras = "Free wasabi";
            break;
        default:
            console.log("Doesn't exist.");
            
    }

    console.log(`Your order: ${food}.`);
    console.log(`Price: ${price} USD.`);
    console.log(`Delivery time: ${deliveryTime} minutes.`);
    console.log(`Extras: ${extras}.`);
}

processFoodOrder("pizza");


console.log("*********************")


function preporuciKnjigu(mood) {

    let raspolozenje = String(mood);
    let zanr;
    let popularBook;

    switch(raspolozenje) {
        case "srecno":
            zanr = "komedija";
            popularBook = "Mali princ";
            break;
        case "tuzno":
            zanr = "drama";
            popularBook = "Ana Karenjina";
            break;
        case "uzbudjenje":
            zanr = "Misterija"
            popularBook = "Davincijev kod";
            break;
        case "znatizeljno":
            zanr = "Naucna fantastika";
            popularBook = "Dina";
            break;
        default:
            console.log(`Nepoznato raspolozenje`);
            return;
    }   

    console.log(`Raspolozenje je: ${raspolozenje}`);
    console.log(`Preporuceni zanr je: ${zanr}`);
    console.log(`Popularna knjiga: ${popularBook}`);
}

preporuciKnjigu("srecno");


