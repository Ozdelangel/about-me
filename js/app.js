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
//console.log('User entered question four' + questionFour);
if (questionFour === 'yes' || questionFour === 'y'){
    alert('yes you are correct.');
}else if (questionFour === 'no' || questionFour === 'n'){
    alert('wrong');
}else{
    alert('please answer yes or no')
}

// Asking the username counts as a question