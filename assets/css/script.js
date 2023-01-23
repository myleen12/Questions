var buttonA = document.querySelector('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');
var buttonD = document.getElementById('d');
var quizTimer = document.getElementById('timer');
var startbtn = document.querySelector('#start-btn');
var finalscore = document.getElementById('final score');
var endbtn = document.getElementById('endbtn');
var submitbtn = document.getElementById('submitbtn');
var testQuestions = document.getElementById('testquestions');
var countText = document.querySelector('#countText');
var Question = document.querySelector('#Question');
var currentQuestion = 0;
var finalQuestion = testQuestions.length;
var timer; 
var count;
startbtn.addEventListener('click', startGame);




var testQuestions = [{
Question: 'What tags are used to put in HTML for Javascript?',
 answerA: '<JS>',
 answerB: '<scripting>',
 answerC: '<HTML>',
 answerD: '<script>',
correctAnswer: 'D'},
{
Question: 'Who invented javascript?',
 answerA: 'Brendan Eich',
 answerB: 'Beyonce',
 answerC: 'Jay Z',
 answerD: 'Elon Musk',
 correctAnswer: "A"},
 {
Question: 'What does DOM stand for?',
 answerA: 'Document object model',
 answerB: 'Document object mood',
 answerC:'Document or miles',
 answerD: 'Double stuff oreos and milk',
 correctAnswer:'A'},
 {
Question: 'How many element can you use in HTML?',
 answerA:'One million',
 answerB: '500',
 answerC: 'unlimited',
 answerD: 'Only 5',
 correctAnswer:'c'},
 {
Question:'What is the prompt() used for?',
 answerA: 'Ask user for input',
 answerB: 'To prompt user for to call a function',
 answerC: 'To make a title for HTML',
 answerD: 'To style CSS',
 correctAnswer:'a'},

]; 

function startGame(){
    isWin = false; 
    count = 60;
    startbtn.disabled = true; 
    startTimer();
}

function startTimer() {
    timer = setInterval(function () {
        count--;
        countText.textContent = count;
        if (count >= 0) {
            if (isWin && count > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (count === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}