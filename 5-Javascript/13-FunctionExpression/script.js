function calcAge(BirthYear) {
    return 2022 - BirthYear;
}

console.log('Him: ' + calcAge(1992));
console.log('Her: ' + calcAge(1985));

var calculateAge = function (BirthYear) {
    return 2022 - BirthYear;
}


var HowAreYou = function (name, surName) {
    return (console.log('How are you ' + name + ' ' + surName));
}

HowAreYou('Raheleh', 'Arman');


var age = calculateAge(1985);
console.log('AGE IS : ' + age);

calculateAge = 15;
console.log("AFTER CHANGING calculateAge: " + calculateAge);
calculateAge = 'John';
console.log("AFTER CHANGING calculateAge: " + calculateAge);