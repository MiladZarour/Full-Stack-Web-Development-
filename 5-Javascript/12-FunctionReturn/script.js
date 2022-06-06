function cube(number) {
    return (number * number * number)
}

cube(10); // here we can't see nothing
console.log(cube(10));

var num = cube(15);
console.log(num);

function calcAge(BirthYear) {
    return 2022 - BirthYear;
}

console.log('Him: ' + calcAge(1992));
console.log('Her: ' + calcAge(1985)); 