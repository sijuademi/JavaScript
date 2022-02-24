// /*
// Variables and data types
// */ 
// // Strings - Sequence of characters, used for text
// var firstName = 'Ibrahim';
// console.log(firstName); 

// // Numbers - Floating point numbers, for decimals and integers
// var lastName = 'Adebayo'
// var age = 21;

// // Boelean - Logical data type that can only be true or false
// var fullAge = true;
// console.log(fullAge);

// // Undefined - Data type of a variable that does not have a value yet 
// var job;
// console.log(job);

// job = 'Teacher'
// console.log(job);

// // N.B - variables cannot start with a number or sign
// // Reserved javascript keywords cannot be used as variable names in javascript

// var firstName = 'Khalil';
// var age = 25;

// // Type coercion
// console.log(firstName + ' ' + age)

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + 'year old ' + job + ' . Is he married? ' + isMarried);

// // Variable mutation
// age = 'twenty eight'
// job = 'driver'

// //alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// //var lastName = prompt( 'what is his Name?' );
// console.log(firstName + ' ' + lastName);

// /*
// Basic operators
// */

// var yearKhalil, year, yearIbrahim;
// now = 2022;
// ageKhalil = 21;
// ageIbrahim = 25;

// // Math operators
// yearKhalil = now - ageKhalil;
// yearIbrahim = now - ageIbrahim;

// console.log(yearIbrahim);

// console.log(now + 4)
// console.log(now * 5)
// console.log(now / 6)

// // Logical operators
// var ibrahimOlder = ageIbrahim < ageKhalil;
// console.log(ibrahimOlder);

// // Typeof operator
// console.log(typeof ibrahimOlder);
// console.log(typeof ageIbrahim);
// console.log(typeof 'Ibrahim is older than khalil');
// var a;
// console.log(typeof a);


// /*
// operator precedence
// */

// var now = 2022
// var yearKhalil = 2000;
// var fullAge = 21;

// // Multiple oprerators
// var isFullAge = now - yearKhalil >= fullAge;
// console.log(isFullAge)

// // Grouping
// var ageKhalil = now - yearKhalil;
// var ageIbrahim = 30;
// var average = (ageKhalil + ageIbrahim) / 2;
// console.log(average);

// // Multiple Assignments
// var x, y
// x = y = (3 + 5) * 4 -6;
// console.log(x, y)
// var b, c, d, e
// b = (4 + 5)
// c = (4 * 5)
// d = (8 / 3)
// e = (10 / 3)

// console.log(b,c,d,e);

// // more operators
// x *=2;
// console.log(x);
// x +=10;
// console.log(x);
// x++;
// console.log(x);

// /*
// Mark and john are trying to compare their BMI, which is calc. using the formula: BMI = mass / height^2 = mass / (height * height).
//  */

// var markHeight = 1.60;
// var johnHeight = 1.80;
// var markWeight = 70;
// var johnWeight = 90;

// var bmiMark, bmiJohn
// bmiMark = ( markWeight / (markHeight * markHeight));
// bmiJohn = ( johnWeight / (johnHeight * johnHeight));

// console.log(bmiJohn, bmiMark);

// var bmiHigher = bmiMark > bmiJohn;
// console.log('is mark\'s BMI higher than john\'s? '+  bmiHigher);


// /*****************
//  * Boolean logic
//  * && = and
//  * || = or
//  * ! = not
//  */

// var firstName = 'Khalil'
// var age = 21;

// if (age < 18) {
//     console.log(firstName + ' is a boy. ');
// } else if (age >= 18 && age < 30){
//     console.log(firstName + ' is a young man');
// } else {
//     console.log(firstName + ' is a man. ')
// }

// /*********************
//  * The ternary operator and switch statements
//  */

// var firstName = 'Khalil';
// var age = 25;

// age >= 23 ? console.log(firstName + ' drinks energy drink.')
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 23 ? 'energy drink' : 'juice';
// console.log(drink);


// /********** 
//  * Switch Statement 
//  * Switch statement is a better alternative to if else statement
//  * ***********/
// var job = 'language';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches me how to code.');
//         break;
//     case 'developer':
//         console.log(firstName + ' develops responsive website.');
//         break;
//     case 'language':
//         console.log(firstName + ' speaks basic spanish.');
//         break;
//     default:
//         console.log(firstName + 'does other things');
// }


// switch (true) {
//     case age < 18:
//         console.log(firstName + ' is a boy. ');
//         break;
//     case age >= 18 && age < 30:
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man. ');
// }

// /****************************************
//  * Truthy and Falsy values and Equality operators
//  */

// // Falsy values: undefined, null, 0, '', NaN
// // Truthy values: NOT falsy values

// var height;
 
// height =  10;

// if (height) {
//     console.log('variable is defined');

// } else {
//     console.log('variable has NOT been defined');
// }

// var weight;

// weight = 0;

// if (weight || weight === 0) {
//     console.log('variable is defined');

// } else {
//     console.log('variable has NOT been defined');
// }
// // Strict Equality Operator ===
// // Equality Operator ==
// // Equality operators
// if (height == '10') {
//     console.log('the == operator does type coercion');
// }


// var johnOne = 89;
// var johnTwo = 120;
// var johnThree = 103;

// var johnAverage, mikeAverage
// johnAverage = ((johnOne + johnTwo + johnThree)/ 3);
// console.log(johnAverage);

// var mikeOne, mikeTwo, mikeThree

// mikeOne = 116;
// mikeTwo = 94;
// mikeThree = 123;
 
// mikeAverage = ((mikeOne + mikeTwo + mikeThree)/ 3);
// console.log(mikeAverage);

// // N.B: you can add as many else ifs as you want
// if (johnAverage > mikeAverage) {
//     console.log(' John\'s team wins with ' + johnAverage + ' points');
// } else if (mikeAverage > johnAverage) {
//     console.log(' Mike\'s team wins with ' + mikeAverage + ' points');
// } else {
//     console.log('There is a draw ')
// }

// var scoreJohn = (89 + 120 + 103)/ 3;
// var scoreMike = (116 + 94 + 123)/ 3;
// var scoreMary = (97 + 134 + 105)/ 3;
// console.log(scoreJohn, scoreMary, scoreMike);

// if (scoreJohn > scoreMike && scoreJohn > scoreMary)
// {
//     console.log(' John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary)
// {
//     console.log(' Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//     console.log(' mary\'s team wins with ' + scoreMary + ' points');
// }

// /*************************
//  *  Functions
//  */

// function calculateAge(birthYear) {
//     return 2022 - birthYear;
// }

// var ageKhalil = calculateAge(2000);
// var ageIbrahim = calculateAge(1990);
// var ageTiti = calculateAge(2001);
// console.log(ageKhalil, ageTiti, ageIbrahim);

// function yearsUntillRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 -age;
    
//     if (retirement > 0) {
//         console.log(firstName + ' retires n ' + retirement + ' years ');
//     } else {
//         console.log(firstName + ' is already retired. ')
//     }
// }

// yearsUntillRetirement(2000, 'Ibrahim');
// yearsUntillRetirement(1990, 'Titi');
// yearsUntillRetirement(1950, 'Khalil');

// /***********************************
//  * Functions Statements and Expressions
//  */

// // Function declaration
// // function whatDoYouDo(job, firstName) {}
// // Function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + 'drives a cab in Lisbon.'
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'Khalil'))
// console.log(whatDoYouDo('designer', 'Titi'))
// console.log(whatDoYouDo('retired', 'Ibrahim'))

// /***************
//  * Arrays
//  */

// // Initialize new array
// var names = ['Ibrahim', 'Opeyemi', 'Khalil' ];
// var years = new Array(1990, 1960, 1900);

// console.log(names);
// console.log(names[2]);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Siju';
// //console.log(names[names.length]);
// names[3] = 'Dara';
// console.log(names)

// // Different data types
// var ibrahim = ['Ibrahim', 'Adebayo', 2000, 'Student', false];

// ibrahim.push('none');
// ibrahim.unshift('SeNor.');
// console.log(ibrahim);

// // pop removes the last element and shift removes the first element
// ibrahim.pop();
// ibrahim.shift();
// console.log(ibrahim);
// // N.B it will return -1 when the element is not in the array
// console.log(ibrahim.indexOf('Student'));
// console.log(ibrahim.indexOf('chemist'));

// var isDesigner = ibrahim.indexOf('designer') === -1 ? 'Ibrahim is NOT a designer' : 'Ibrahim IS a designer';
// console.log(isDesigner)
// var isStudent = ibrahim.indexOf('Student') === -1 ? 'Ibrahim is NOT a Student' : 'Ibrahim IS a Student';
// console.log(isStudent)

// // Challenge

// function tipCalculator(bill) {
//     var percentage;

//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

// var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(tips, finalValues)


// /****************************
//  * Objects and Properties
//  */

// // Object literal
// var ibrahim = {
//     firstName: 'Ibrahim',
//     lastName: 'Adebayo',
//     birthYear: 2000,
//     family: ['Sidiq', 'Ghaniyah', 'Abdul Jeleel', 'Hassan'],
//     job: 'emgineer',
//     isMarried: false

// };

// console.log(ibrahim.firstName);
// console.log(ibrahim['lastName']);
// var x = 'birthYear';
// console.log(ibrahim[x]);
// console.log(ibrahim.job)

// // Mutate data

// ibrahim.job = 'developer'
// ibrahim['isMarried'] = true;
// console.log(ibrahim);

// // New Object syntax
// var khalil = new Object();
// khalil.firstName = 'Khalil';
// khalil.birthYear = 2005;
// khalil['lastName'] = 'Opeyemi'
// console.log(khalil);

// /*******************************
//  * Objects and Methods
//  */

//  var ibrahim = {
//     firstName: 'Ibrahim',
//     lastName: 'Adebayo',
//     birthYear: 2000,
//     family: ['Sidiq', 'Ghaniyah', 'Abdul Jeleel', 'Hassan'],
//     job: 'emgineer',
//     isMarried: false,
//     calcAge: function(birthYear) {
//         return 2022 - birthYear;
//    }
/**
 * You can also do since the birthYear has been defined earlier
 * calcAge: function() {
 *       return 2022 - this.birthYear;
 * }
 * 
 * console.log(ibrahim.calcAge());
 *               
 *             OR
 * 
 * calcAge: function() {
 *       this.age = 2022 - this.birthYear;
 * }
 * 
 * ibrahim.calcAge();
 * console.log(john);
 * 
 * N.B This above stands for 'ibrahim'
 * 
 */
//};

// console.log(ibrahim.calcAge(2000));

// // Coding Challenge

// var ibrahim = {
//     fullName: ' Ibrahim Adebayo',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }

// }

// var opeyemi = {
//     fullName: ' Opeyemi Khalil',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }

// }

// // I will be putting this directly in the if else statement below
// // ibrahim.calcBMI();
// // opeyemi.calcBMI();

// if ( ibrahim.calcBMI() > opeyemi.calcBMI()){
//     console.log(ibrahim.fullName + ' has a larger BMI of ' + ibrahim.bmi);
// } else if (opeyemi.bmi > ibrahim.bmi){
//     console.log(opeyemi.fullName + ' has larger BMI of ' + opeyemi.bmi)
// } else {
//     console.log('They have the same BMI')
// }

// var khalil = {
//     fullName: ' sijuade adebayo',
//     // fullAge: 25,
//     height: 1.78,
//     weight: 60,
//     calcBMI: function() {
//         this.bmi = this.weight / (this.height * this.height);
//         return this.bmi;
//     }
// }

// khalil.calcBMI();
// console.log(khalil);


/************
 *  Loops and iteration
 */

// // // for loop
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// var ibrahim = ['Ibrahim', 'Adebayo', 2000, 'Student', false];
// for (var i = 0; i < ibrahim.length; i++) {
//     console.log(ibrahim[i]);
// }

// // // We can also do it this way
// // // while loop
// var i = 0;
// while(i < ibrahim.length) {
//     console.log(ibrahim[i]);
//     i++;
// }

// Continue and break statements

var ibrahim = ['Ibrahim', 'Adebayo', 2000, 'Student', false];
for (var i = 0; i < ibrahim.length; i++) {
    if (typeof ibrahim[i] !== 'string') continue;
    console.log(ibrahim[i]);
}

for (var i = 0; i < ibrahim.length; i++) {
    if (typeof ibrahim[i] !== 'string') break;
    console.log(ibrahim[i]);
}

// Looping backwards

for (var i = ibrahim.length -1; i >= 0; i--) {
    console.log(ibrahim[i]);
}


// Coding challenge

var ibrahim = {
    fullName: 'Ibrahim Opeyemi',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50){
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}



var khalil = {
    fullName: 'Khalil Opeyemi',
    bills: [77, 475,  110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++)
        {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100){
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .15;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
ibrahim.calcTips();
khalil.calcTips();

ibrahim.average = calcAverage(ibrahim.tips);
khalil.average = calcAverage(khalil.tips);
console.log(ibrahim, khalil);

if (ibrahim.average > khalil.average) {
    console.log(ibrahim.fullName + '\'s family pays higher tips, with an average of $' + ibrahim.average);
} else if (khalil.average > ibrahim.average) {
    console.log(khalil.fullName + '\'s family pays higher tips, with an average of $' + khalil.average);
}


/// Hoisting
// This works on functional declaration alone and not on functional expression

calculateAge(1980);

function calculateAge(year) {
    console.log(2016 - year);
}

// Code as fnc expression

// retirement(1990); doesn't work because it is an expression
var retirement = function(year) {
    console.log(65 - (2022 - year));
} 

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 30;
    console.log(age);
}

foo();
console.log(age);


/////////////////////////////////
///  Lecture: Scoping

///////////////////////////////////////
var a = 'Hello! ';
first();

function first() {
    var b = 'Hi! ';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c ); 
        third();
    }
}

function third() {
    var d = 'Khalil';
    console.log(a+d);
}

//The 'This' keyword

calculateAge(2000);

function calculateAge(year) {
    console.log(2022 - year);
    console.log(this);
}

var khalil = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2022 - this.yearOfBirth)

    /* function innerFunction() {
        console.log(this);
    }
    innerFunction(); */
    }
}

khalil.calculateAge();


var ibrahim = {
    name: 'Ibrahim',
    yearOfBirth: 2000
};

ibrahim.calculateAge = khalil.calculateAge;
ibrahim.calculateAge();































