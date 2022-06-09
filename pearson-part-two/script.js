let name = prompt (" Welcome to GC mini golf! What is your name?");
let game = prompt(`(prompt) Hi, ${name}! Would you like to play 3 or 6 holes?`);
let score = 0;
let par = (game * 3);
let answer = 0;
let total = 0;



for (let i = 0; i < game; i++){
    answer = prompt(`How many putts for hole ${i+1}?`);
    score = score + eval(answer); 
    total = par - score 
}


if (score === par) {
    console.log(`Good game, ${name}. Your total par was: 0`);
}

else if (score < par) {
    console.log(`Great job, ${name}! Your total par was: -${total}`);
}

else {
    console.log(`Nice try, ${name}... Your total par was: +${total * (-1)}`)
}



 




