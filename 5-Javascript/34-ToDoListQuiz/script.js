// var button = document.querySelector('#btn1');
// var title = document.querySelector('#OAKtitle')

// this will happened when I cleck the button
// button.addEventListener('click', function () {
//     console.log('You Clicked The Button');

//     title.style.backgroundColor = 'red'
// });

// var listParent = document.querySelector('ul');

// listParent.addEventListener('click', function () {
//     console.log('You clicked the ul');

//     listParent.style.backgroundColor = 'Blue';
// })

// Quiz Solution //

// var listItems = document.querySelectorAll('li');
// console.log('listItems', listItems);

// for (var i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('click', function () {
//         this.style.color = 'white';
//         listItems[i].style.color = 'white';
//     })
// }

// var oakParagraph = document.querySelector('#oakParagraph');

// function toggleBackground() {
//     // oakParagraph.classList.toggle('oakParagraph');
//     oakParagraph.classList.toggle('toggleBackground');
// }

// oakParagraph.addEventListener('click', toggleBackground); //callback function is without ()
// // oakParagraph.addEventListener('click', toggleBackground());


// var listParent = document.querySelector('ul');

// listParent.addEventListener('click', function (event) {
//     console.log('You clicked the ul');

//     event.target.style.backgroundColor = 'blue';
// })



// var firstTodoItem = document.querySelector('.todoItem');

// firstTodoItem.addEventListener('mouseover', function () {
//     firstTodoItem.style.backgroundColor = 'blue';
//     firstTodoItem.style.color = 'white';
// })

// firstTodoItem.addEventListener('mouseout', function () {
//     firstTodoItem.style.backgroundColor = 'white';
//     firstTodoItem.style.color = 'black';
// })

var todoListItems = document.querySelectorAll('.todoItem');

for (var i = 0; i < todoListItems.length; i++) {
    todoListItems[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = 'blue';
        this.style.color = 'white';
    })

    todoListItems[i].addEventListener('mouseout', function () {
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
    })

    todoListItems[i].addEventListener('click', function () {
        this.classList.add('okay');
    })
}