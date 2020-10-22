const random = Math.floor(Math.random() * 100+ 1);
console.log(random);

let user = prompt('What is your name?');

function checkNumber() {
    let number = prompt('Enter a number between 1 and 100');

    if (number > random) {
        console.log('It is less');
    } else if (number < random) {
        console.log('It is more');
    } else if (number == random){
        return console.log(`${user.toUpperCase()} YOU WON!`);
    } else {
        console.log('Choose a number next time!')
    };
    checkNumber();
}
checkNumber();