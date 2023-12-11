function solve(first, second, third) {
    
    let firstSeconds = Number(first);
    let secondSeconds = Number(second);
    let thirdSeconds = Number(third);
}
let totalTime = firstSeconds + secondSeconds + thirdSeconds;

let minutes = totalTime / 60;

let totalMinutes = Math.floor(minutes);

let seconds = totalTime % 60;

if(seconds<10) {
    console.log(`${totalMinutes}:0${seconds}`);
} else{
    console.log(`${totalMinutes}:${seconds}`);
}



function solve(num) {
    let number = Number(num);
    let bonus = 0;

    if(number <=100) {
        bonus = 5;
    } else if(number <= 1000) {
        bonus = number * 0.2;
    } else {
        bonus = number * 0.1;
    }

    if(number % 2 === 0) {
        bonus +=1;
    }

    if(number % 10 === 5) {
        bonus +=2;
    }

    console.log(bonus);
    console.log(number + bonus);
}
