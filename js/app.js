'use strict';
let userName = prompt('Hi, whats your name?');
//console.log (userName);

alert('Hello ' + userName);

let questionOne = prompt('Do I Have a Wife and daughter Answer yes or no').toLowerCase();
//console.log('user entered to question 1 ' + questionOne);
if (questionOne === 'yes' || questionOne === 'y'){
    alert('yes, I love them very much! ');
}
else if (questionOne === 'no' || questionOne === 'n'){
    alert('Sorry, wrong answer');
}else{
    alert('please answer yes or no')
}

let questionTwo = prompt('Did I go to college?').toLowerCase();
//console.log('user entered question 2 ' + questionTwo);
if (questionTwo === 'no' || questionTwo === 'n'){
    alert('yes I DID NOT');
}else if (questionTwo === 'yes' || questionTwo === 'y'){
    alert('Wrong answer but I probably should of');
}else{
    alert('please answer yes or no')
}
let questionThree = prompt('Did I work in construction?').toLowerCase();
//console.log('user entered question 3 ' + questionThree);
if (questionThree === 'yes' || questionThree === 'y'){
    alert('you are right. I Love hard work');
}else if (questionThree === 'no' || questionThree === 'n'){
alert('wrong answer');
}else{
    alert('please answer yes or no')
}

let questionFour = prompt('Do I got to Code Fellows?').toLowerCase();
//console.log('User entered question four ' + questionFour);
if (questionFour === 'yes' || questionFour === 'y'){
    alert('yes you are correct.');
}else if (questionFour === 'no' || questionFour === 'n'){
    alert('wrong');
}else{
    alert('please answer yes or no')
}



//user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
//Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
//Indicates through an alert if the guess is “too high” or “too low”.
//It should give the user exactly four opportunities to get the correct answer.
//After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

let correctAnswer = 10;
console.log(correctAnswer)
let userAttempts = 4;

    for(let i = 0; i < userAttempts; i++){
        let userGuess = prompt('how many movies did i list as my favorites?');
        while(userGuess < 1 || userGuess > 100){
            userGuess = prompt('wrong range.');

        } if (userGuess == correctAnswer){
        alert('you got it right!');
        break;
        }else if(userGuess< correctAnswer){
            alert('too low. try again')
        }else if(userGuess > correctAnswer){
            alert('too high')
        }else{
            alert('what?')
        }
        console.log(i);
        if (i == userAttempts - 1){
            alert('you did not win. correct answer is ' + correctAnswer);
        }
    }

//     As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question
    // let movieDetails = ['The Other Side Of The Door', 'The Audition', 'Old Boy','The Grudge',];
    
    // console.log(movieDetails.length);
    // for (let i = 0; i < movieDetails.length;){
    //     let movieGuess = prompt('Which of the ten movies I listed take place in Korea? ').toLowerCase();
    //     if(movieGuess === 'Old boy'){
    //         alert('Thats the one!');
    //     }
    //     break;
    // }