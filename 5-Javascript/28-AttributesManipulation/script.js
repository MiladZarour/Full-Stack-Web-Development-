var myLink = document.querySelector('a');


// myLink.getAttribute('href'); // gets the value of the specific attribute that we have just asked for
console.log(myLink.getAttribute('href'));

myLink.setAttribute('href', 'https://www.facebook.com/'); // changing the attribute
console.log(myLink.getAttribute('href'));

myLink.textContent = 'go to facebook';