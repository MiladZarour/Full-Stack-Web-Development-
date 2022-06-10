// OBJECT METHODS

var Sheldon = {
    name: 'Sheldon',
    age: 35,
    hasGone: true,
    friends: ['Penny', 'Raj'],
    say: function () {
        console.log('say hi Sheldon');
    }
}

// say(); // it is not define outside from the object Sheldon
Sheldon.say();

var Leonard = {
    name: 'Leonard',
    say: function () {
        console.log('Say Hi Leonard');
    }
}

Leonard.say();

function say() {
    console.log('Say Hi Outside');
}
say();

function say() {
    console.log('say hi 23222');
}
say();
console.log('----------------------');

customElements.deletePost
customElements.deleteUser
user.delete
postMessage.delete
