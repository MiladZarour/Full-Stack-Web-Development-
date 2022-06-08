// var student1 = ['Sheldon', 36, 'calTeck'];
// var student2 = [35, 'MIT', 'Leonard'];
// // var student2 = [35, 'MIT', 'Leonard'];

// student1[2]; // to reach the school
// student2[1]; // to reach the school

// a better data structur is called Objects

// var student = new Object();
// student.school

var schoolName2 = 'schoolkjk';

var student = {
    name: 'Sheldon',
    age: 36,
    school: 'calTech',
    schoolkjk: 'calTech233',
    school_2: 'MIT'
}; // in an object we use {} and we use three different properties
// it stored 'Sheldon' under the key name
// it stored 36 under the key age

console.log(student['name']);
console.log(student.school);  // prefer . casue it's shorter and much better

var schoolName2 = 'school';

console.log(student.schoolName2);
console.log(student[schoolName2]);