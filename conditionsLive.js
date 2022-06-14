// console.log("Hello world");

// //declaring variable randomNumber, using fx of Math.random() to generate a random number when variable is called
// let randomNumber = Math.random();
// //console.log used w/ declared variable to output a random number w/ the fx 
// console.log(randomNumber);

// //practice if Statement, declared variable w/in condition parameters of "randomNumber <0.5
// //condition states that if random number that is generated is less than 0.5, to run code in lines 12 & 13
// if (randomNumber <0.5) {

//     console.log("Hello Sharon");
//     console.log(randomNumber);
// }


// use relational operator of ">=" greater than or equal to for the variable to output line 20
// if (randomNumber >= 0.5){
//     console.log('Random number is greater than 0.5');
//     console.log(randomNumber);
// }   

//declare constant variable as 'dayOfWeek', to put into if/else if statments' conditions
//run console.log message dependent on the variables being run in if/else statements is true to the declared variable
//usage of strict equality comparison operator ===
// const dayOfWeek = 'Thursday';

// if (dayOfWeek === 'Monday') {
    
//     console.log('This is Monday');
    
// }else if (dayOfWeek === 'Thursday') {

//     console.log('This is Thursday');

// }else if (dayOfWeek === 'Saturday') {

//     console.log('Hurray! Today is Saturday');
// }

//declare constant variable of age w/ 'prompt' window object method to show the input string value
// if/else statements user input variables for age, each statement using a relational operator
//dependent on the user input age, console.log will run a different string message
// else statement used if all prior conditions are false, will run a default output
// const age = prompt('Enter an Age to Drive!');

// if (age < 5){

//     console.log("You are less than 5. Cmon bro.");

// }else if (age < 10) {
//     console.log("Still too young!");

// }else if (age >= 16) {

//     console.log("You are able to drive!");
// }else {
//     console.log("Default message if all prior conditions are false/fails")
// }

// const expr = 'Mangoes';

// //switch statements are similar/cleaner way to run if/else type of code
// // declared expr variable w/ constant, and runs each code block dependent on variable value of fruit name
// //break statement used to break execution of code in switch statements, in this situation after each case
// switch (expr) {

//     case 'Oranges':
//         console.log("Oranges are $0.59 a pound");
//         break;    
//     case 'Mangoes':
//         console.log("Hello Mangos!");
//         break;
//     case 'Papayas':
//         console.log("Hello Papayas");
//         break;
//     default:
//         console.log("Sorry, we are out of your asked item.");
    
// }

//declared constant variable of 'password' to create a prompt method to input password w the following string message
// if/else statment used to dictate rules for password input through conditions/properties of password.length & password.indexOf
// run code into console if password dependent on set conditions

const password = prompt("Please Enter A New Password");

if (password.length >= 6) {

    //Nested Condition
    if (password.indexOf(' ') === -1) {

        console.log("Valid Password")
    }else {
        console.log("Password Can't Have Spaces")
    }

} else {

    console.log("Password is Too Short")
}


//function name of 'singSong', () dictates that it is a function, no arguments passed as there it has nothing input in that parameter

function singSong() {
    //function statements of code to be run
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
//function called 3x w/ 'name()'
singSong()
singSong()
singSong()

//practice template literals w syntax of using `${nameOfFx}`, fx parameters: 'firstName' & 'lastName
function greet(firstName) {
    // 
        console.log(`Hey There, ${firstName}`)
    }
    
    greet('Monte')
    
    function greet1(firstName,lastName) {

        //use of calling array in parameter to call the first letter in argument for parameter 'lastName'
        console.log(`Hey There, ${firstName} ${lastName[0]}.`)
    }
    
    greet1('Boomer','Sooner')