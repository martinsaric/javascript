function concatenateData(fname, lname, age, town) {
    let firstName = fname;
    let lastName = lname;
    let yourAge = Number(age);
    let yourHomeTown = town;

    console.log(`You are ${firstName} ${lastName}, a ${yourAge}-years old person from ${yourHomeTown}.`);
}

concatenateData("Martin", "Saric", "29", "Subotica");


console.log("***********************************")


function calculate(meters) {
    let price = Number(meters) * 7.61;
    let discount = price * 0.18;
    let finalPrice = price - discount;

    console.log(`The final price is: ${finalPrice} USD.`);
    console.log(`The discount is: ${discount} USD.`);
}

console.log("***********************************")


function projectCreation(architect, projects)  {
    let nameOfArchitect = architect;
    let numberOfProjects = Number(projects);
    let numberOfHours = projects * 3;


    console.log(`The architect ${nameOfArchitect} will need ${numberOfHours} hours to complete ${numberOfProjects} project/s.`);
}

projectCreation("Martin", 4);


console.log("***********************************")


function greetings(name) {
    console.log(`Hello, ${name}!`);
}


greetings("Martin");


console.log("***********************************")


*function calculate(dogPackages, catPackages) {
    let packetOfDogFood = 2.5 * dogPackages;
    let packetOfCatFood = 4 * catPackages;
    let finalAmount = packetOfDogFood + packetOfCatFood;

    console.log(`${finalAmount} USD.`);
}

calculate(5, 3)



