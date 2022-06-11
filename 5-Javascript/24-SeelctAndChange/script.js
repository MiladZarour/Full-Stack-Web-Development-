var h1Element = document.querySelector('h1');

h1Element.style.color = 'red';

var isYellow = false;

var bodyElement = document.querySelector('p');

setInterval(function () {
    if (isYellow) {
        bodyElement.style.background = 'gray';

    }
    else {
        bodyElement.style.background = 'red';

    }
    isYellow = !isYellow;
}, 500);