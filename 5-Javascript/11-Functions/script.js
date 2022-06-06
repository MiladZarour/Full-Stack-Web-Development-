function sayhello() {
    console.log('Hi');
    console.log('Hi');
    console.log('Hi');
    console.log('Hi');
    console.log('Hi');
}
sayhello();

function say(name, age) {
    console.log(name + ' is ' + age + ' years old');
}

say('Roro', 30);

function cube(number) {
    console.log(number * number * number);
}
cube(10)

function checkUser(email, password) {
    if (email == 'asd@hotmail.com' && password == '!#%/)(') {
        console.log('logging...');
    }
}

email = 'asd@hotmail.com';
pass = '!#%/)('

checkUser(email, pass);