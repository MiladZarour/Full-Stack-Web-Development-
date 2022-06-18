

var button = document.querySelector('#btn1');
var title = document.querySelector('#OAKtitle')

// this will happened when I cleck the button
button.addEventListener('click', function () {
    console.log('You Clicked The Button');

    title.style.backgroundColor = 'red'
});