//DRY = Dont Repeat yourself

console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log('7');
console.log('8');
console.log('9');

var number = 1;
while (number < 10) {
    console.log(number);
    number++;
}

var num = 132;
while (num <= 148 && num >= 132) {
    if (num % 2 == 0) {
        console.log('the number is even : ' + num);
    }
    num++;
}

var num7 = 25;
while (num7 >= 25 && num7 <= 100) {
    if (num7 % 7 == 0) {
        console.log(num7);
    }
    num7++;
}

for (var number = 1; number < 11; number++) {
    console.log(number);
}

for (var num = 132; num <= 148; num++) {
    if (num % 2 === 1) {
        console.log('num is odd : ' + num);

    }
}

for (var num = 25; num <= 100; num++) {
    if (num % 5 === 0 && num % 7 === 0) {
        console.log('num is divisible by 7 and 5 : ' + num);
    }
}