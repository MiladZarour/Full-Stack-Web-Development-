var selectWithId = document.getElementById('oakParagraph');
console.log(selectWithId);

var selectWithClass = document.getElementsByClassName('background');
console.log(selectWithClass);

var selectWithTag = document.getElementsByTagName('h1');
console.log(selectWithTag);

// var selectWithquery = document.querySelector('h1');
var selectWithquery = document.querySelector('#oakParagraph');
console.log(selectWithquery);


var selectWithqueryClass = document.querySelector('.background');
console.log(selectWithqueryClass);

var selectWithqueryAllClass = document.querySelectorAll('.background');
console.log(selectWithqueryAllClass);