//Create three seperate variables to produce the combination 10-40-39.

//numberOne = 10 with addition.
let numberOne = 8 + 2; //Using addition 8+2=10.

//numberTwo = 40 with multiplication.
let numberTwo = 5 * 8; //Using multiplication 5*8=40.

//numberThree = 39 with subtraction.
let numberThree = 50 - 11; //Using subtraction 50-11=39.

//Create a string stating: 'You have received this message because you have been chosen to open an important vault. Here is the secret combination:'

//String will include the three variables also.
let message = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${numberOne} - ${numberTwo} - ${numberThree}.`;

//Calls the message into a dialogue box.
window.alert(message);
