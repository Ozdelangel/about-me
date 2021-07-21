'use strict';

// function nameQuestion(){
//   let userName = prompt('Hi, whats your name?');
//   //console.log (userName);

//   alert('Hello ' + userName);
// }
// nameQuestion();

// function questionTwo(){
//     let questionOne = prompt('Do I Have a Wife and daughter Answer yes or no').toLowerCase();
//     //console.log('user entered to question 1 ' + questionOne);
//     if (questionOne === 'yes' || questionOne === 'y'){
//         alert('yes, I love them very much! ');
//     }
//     else if (questionOne === 'no' || questionOne === 'n'){
//         alert('Sorry, wrong answer');
//     }else{
//         alert('please answer yes or no')
//     }
// }
// questionTwo();


// function questionThree(){
// let questionTwo = prompt('Did I go to college?').toLowerCase();
// //console.log('user entered question 2 ' + questionTwo);
// if (questionTwo === 'no' || questionTwo === 'n'){
//     alert('yes I DID NOT');
// }else if (questionTwo === 'yes' || questionTwo === 'y'){
//     alert('Wrong answer but I probably should of');
// }else{
//     alert('please answer yes or no')
// }
// }
// questionThree();


// function questionFour(){
// let questionThree = prompt('Did I work in construction?').toLowerCase();
// //console.log('user entered question 3 ' + questionThree);
// if (questionThree === 'yes' || questionThree === 'y'){
//     alert('you are right. I Love hard work');
// }else if (questionThree === 'no' || questionThree === 'n'){
// alert('wrong answer');
// }else{
//     alert('please answer yes or no')
// }
// }
// questionFour();


// function questionFive(){
// let questionFour = prompt('Do I got to Code Fellows?').toLowerCase();
// //console.log('User entered question four ' + questionFour);
// if (questionFour === 'yes' || questionFour === 'y'){
//     alert('yes you are correct.');
// }else if (questionFour === 'no' || questionFour === 'n'){
//     alert('wrong');
// }else{
//     alert('please answer yes or no')
// }
// }
// questionFive();



// //user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
// //Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// //Indicates through an alert if the guess is “too high” or “too low”.
// //It should give the user exactly four opportunities to get the correct answer.
// //After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.


// function questionSix(){
// let correctAnswer = 10;
// console.log(correctAnswer)
// let userAttempts = 4;

//     for(let i = 0; i < userAttempts; i++){
//         let userGuess = prompt('how many movies did i list as my favorites?');
//         while(userGuess < 1 || userGuess > 100){
//             userGuess = prompt('wrong range.');

//         } if (userGuess == correctAnswer){
//         alert('you got it right!');
//         break;
//         }else if(userGuess< correctAnswer){
//             alert('too low. try again')
//         }else if(userGuess > correctAnswer){
//             alert('too high')
//         }else{
//             alert('what?')
//         }
//         console.log(i);
//         if (i == userAttempts - 1){
//             alert('you did not win. correct answer is ' + correctAnswer);
//         }
//     }
// }
// questionSix();


//     As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question





// let attempts = 7;
// for (let i = 0; i < attempts; i++) {
//   console.log(`For loop: You have ${attempts - i - 1} attempts remaining.`);
//   for (let j = 0; j < myFavColors.length; j++) {
//     if (userResponse === myFavColors[j]) {
//       console.log('You are correct!');
//       // something that will stop the loop if it is correct.
//     }
//   }

// }

// let myFavColors = ['blue', 'cream', 'gold'];
// let userResponse = 'cream';
// let guessIsCorrect = false;

let movieDetails = ['the other side of the door', 'the audition', 'old boy', 'i saw the devil', 'the grudge', 'blood in blood out','menace 2 society'];

let attempts = 7;
let guessIsCorrect = false;
    // let correctAnswer = ('old boy')
    
    
while(attempts > 0){

    console.log(movieDetails.length);
    
    let userAnswer = prompt('what do you think are my favorite movies?').toLowerCase();
    
    for(let j = 0; j < movieDetails.length; j++){
            console.log (`${userAnswer} ${movieDetails[j]}`)
        if (userAnswer === movieDetails[j]){
            guessIsCorrect = true;
            console.log(`${guessIsCorrect}`)
            break;
        }
    }
    console.log(`${guessIsCorrect}`)
    if(guessIsCorrect === true){
        break;
    }

    if (guessIsCorrect === false){
        attempts--;
        alert(`sorry try again you have ${attempts} remaining.`);
        
    }
}
        
        // if (userAnswer != movieDetails[i]){
        //     alert('sorry try again')
        // }
        
        // for (let j = 0; j < movieDetails.length; j++){
        //     if (userAnswer === movieDetails[i].toLowerCase()); {
        //         alert('you are correct!');
        //         guessIsCorrect = true;
        //     }
            
        // }
        // if(guessIsCorrect){
        //     break;
        
    

  
    