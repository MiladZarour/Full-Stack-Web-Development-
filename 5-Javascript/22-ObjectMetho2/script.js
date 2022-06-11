console.log(this);

function addnumbers(x, y) {
    console.log(x + y);
    console.log(this);
}

addnumbers(10, 20);

var Raj = {
    name: 'Raj',
    year: 1989,
    sayHi: function () {// this is a method
        console.log(this);
        console.log('say hi ' + this.name);
        console.log('say hi ' + Raj.name);
        console.log('say hi ' + this.year);
        console.log('say hi ' + Raj.year);

        function someFunc() { // this is not a method
            console.log(this);
        }
        someFunc();
    }
};

Raj.sayHi();

