// var divToManipulate = document.querySelector('.background');


// // divToManipulate.style.height = '50px';
// // divToManipulate.style.width = '400px';
// // divToManipulate.style.backgroundColor = 'red';
// // divToManipulate.style.fontSize = '30px';
// // divToManipulate.style.border = '5px solid black';

// // divToManipulate.classList.add('addClass'); // adding the new class in HTML
// // divToManipulate.classList.remove('addClass'); // removing the new Class

// divToManipulate.classList.toggle('addClass');


// var isTrue = false;
// setInterval(function () {
//     if (isTrue) {
//         divToManipulate.classList.toggle('addClass');
//     }
//     isTrue = !isTrue;
// }, 500);

var paragraph = document.querySelector('#oakParagraph');
// console.log(paragraph.textContent);
// paragraph.textContent = 'OAK Academy is the best reallyyyy !!!!!!!';

console.log(paragraph.innerHTML);
paragraph.innerHTML = 'OAK ACADEMY IS <strong> GREEEAAATTTT </strong> REALLY';