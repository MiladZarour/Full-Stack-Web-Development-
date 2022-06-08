var numbers = [0];
for (var i = 1; i <= 20; i++) {
    numbers.push(i);
}

console.log(numbers);

numbers.forEach(function (number) {
    if (number % 5 == 0) {
        console.log(number);
    }
});