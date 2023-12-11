function solve(seconds1, seconds2, seconds3) {
    
    let totalTime = seconds1 + seconds2 + seconds3;
    let totalMinutes = Math.floor(totalTime / 60);
    let totalSeconds = totalTime % 60;
    let formatSeconds = totalSeconds.toString().padStart(2, `0`);

    if(totalTime < 10) {
        console.log(`${totalMinutes}:0${formatSeconds}`);
    } else {
        console.log(`${totalMinutes}:${formatSeconds}`)
    }
}

solve(50, 50, 49);



console.log("*********************")



function bonus (points) {

    let number = Number(points);
    let bonus = 0;
    
    if(number <= 100) {
        bonus = 5;
    } else if(number > 100) {
        bonus = number * 0.2;
    } else if(number > 1000 ) {
        bonus = number * 0.1;
    }

    if(number % 2 === 0) {
        bonus += 1;
    } else if(number % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(number + bonus);
}

bonus(20);


console.log("*********************")


function solve(hours, minutes) {
    
    let totalMinutes = hours * 60 + minutes;
    totalMinutes += 15;
    let newHours = Math.floor(totalMinutes / 60);
    let newMinutes = totalMinutes % 60;
    newHours %= 24;
    console.log(`${newHours}:${newMinutes.toString().padStart(2, `0`)}`);
}

solve(0, 0o1);


console.log("*********************")


function solve(price, puzzles, dolls, bears, minions, trucks) {
    
    let cenaPuta = Number.parseFloat(price);
    let puzle = Number(puzzles);
    let lutke = Number(dolls);
    let medvedi = Number(bears);
    let minioni = Number(minions);
    let kamioni = Number(trucks);

    const cenaPuzli = 2.6;
    const cenaLutki = 3.0;
    const cenaMedveda = 4.1;
    const cenaMiniona = 8.2;
    const cenaKamiona = 2.0;

    let ukupnaCena = 
    puzle * cenaPuzli + 
    lutke * cenaLutki + 
    medvedi * cenaMedveda +
    minioni * cenaMiniona + 
    kamioni * cenaKamiona;

    let porudzbina = 
    puzle +
    lutke +
    medvedi +
    minioni +
    kamioni;

    if(porudzbina >= 50) {
        ukupnaCena = ukupnaCena * 0.75;
    }

    ukupnaCena = ukupnaCena * 0.9;

    if(ukupnaCena > cenaPuta) {
        let ostatakNovca = ukupnaCena - cenaPuta;
        console.log(`Yes! ${ostatakNovca.toFixed(2)} USD left.`)
    } else {
        let potrebnoNovca = cenaPuta - ukupnaCena;
        console.log(`Not enough money! ${potrebnoNovca.toFixed(2)} USD needed.`)
    }

}

solve(40.8, 20, 25, 30, 50, 10);


console.log("*********************")


function solve(budget, people, pricePerClothes) {

    let budzet = Number.parseFloat(budget);
    let statisti = Number(people);
    let cenaOdece = Number.parseFloat(pricePerClothes);

    let scenario = budzet * 0.1;

    if(statisti > 150) {
        cenaOdece = cenaOdece * 0.9;
    }

    let cenaStatista = statisti * cenaOdece;
    let ukupnaCena = cenaStatista + scenario;

    if(ukupnaCena > budzet) {
        let potrebanNovac = ukupnaCena - budzet;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${potrebanNovac.toFixed(2)} USD more.`)
    } else {
        let ostatakNovca = budzet - ukupnaCena;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${ostatakNovca.toFixed(2)} USD left.`)
    } 
}

solve(15437.62, 186, 57.99);


console.log("*********************")


function calculate(budget, videoCards, processors, RAMs)  {

    let budzet = Number.parseFloat(budget);
    let brojVideoKarti = Number(videoCards);
    let brojProcesora = Number(processors);
    let brojRama = Number(RAMs);

    const cenaVideoKarte = 250.00;
    const cenaProcesora = brojVideoKarti * cenaVideoKarte * 0.35;
    const cenaRama = brojVideoKarti * cenaVideoKarte * 0.1;

    let ukupniRacun = 
    brojVideoKarti * cenaVideoKarte +
    brojProcesora * cenaProcesora + 
    brojRama * cenaRama;


    if(brojVideoKarti > brojProcesora) {
        ukupniRacun = ukupniRacun * 0.85;
    }

    if(budzet >= ukupniRacun) {
        let ostaliNovac = budzet - ukupniRacun;
        console.log(`You have ${ostaliNovac.toFixed(2)} USD left!`);
    }   else {
        let potrebanNovac = ukupniRacun - budzet;
        console.log(`Not enough money! You need ${potrebanNovac.toFixed(2)} USD more!`)
    }
}

calculate(900, 2, 1, 3);


console.log("*********************")



function solve(name, episodeDuration, breakDuration) {

    let imeSerije = String(name);
    let trajanjeEpizode = Number(episodeDuration);
    let trajanjePauze = Number(breakDuration);

    let vremeRucka = trajanjePauze * 1/8;
    let vremeRelaksacije = trajanjePauze * 1/4;
    let ukupanOdmor = vremeRucka + vremeRelaksacije;

    if(trajanjePauze >= trajanjeEpizode) {
        let preostaloVreme = trajanjePauze - ukupanOdmor - trajanjeEpizode;
        console.log(`You have enough time to watch ${imeSerije} and left with ${preostaloVreme} minutes free time.`)
    } else {
        let potrebnoVreme = trajanjeEpizode - ukupanOdmor;
        console.log(`You don't have enough time to watch ${imeSerije}, you need ${potrebnoVreme} more minutes.`)
    }
}


solve("Game of Thrones", 48, 60);















