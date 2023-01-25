var quizTimer = document.getElementById('timer');
var startbtn = document.getElementById('start-btn');
var endingScore = document.getElementById('endingScore');
var endbtn = document.getElementById('endbtn');
var answerEl = document.getElementById('answer')
var submitbtn = document.getElementById('submitbtn');
var testQuestions = document.getElementById('testquestions');
var countText = document.getElementById('countText');
var questionText = document.getElementById('question');
var result = document.querySelector('.result');

var quizWrapper = document.querySelector('.quizWrapper');
var gameOverContainer = document.querySelector('.gameOverContainer')

var currentQuestion;
var timer; 
var count;

var score = 0; 

startbtn.addEventListener('click', startGame);

gameOverContainer.style.display = 'none';

var currentIndex = 0;

var testQuestions = [
{
    question:'What tags are used to put in HTML for Javascript?',
    answer: [
      {text: '<JS>'},
      {text: '<scripting>'},
      {text: '<HTML>'},
      {text: '<script>'}],
    correctAnswer: 'd'
},
{
    question: 'Who invented javascript?',
    answer: [
      {text: 'Brendan Eich'},
      {text: 'Beyonce'},
      {text: 'Jay Z'},
      {text: 'Elon Musk'}],
    correctAnswer: 'a'
 },
 {
    question: 'What does DOM stand for?',
    answer: [
      {text: 'Document Object Model'},
      {text: 'Document object mood'},
      {text: 'Document or miles'},
      {text: 'Double stuff oreos and milk'}],
    correctAnswer: 'a'
 },
 {
    question: 'How many element can you use in HTML?',
    answer: [
      {text: 'One million'},
      {text: '500'},
      {text: 'unlimited'},
      {text: 'Only 5'}],
    correctAnswer: 'c'
},
{   
    question:'What is the prompt() used for?',
    answer: [
      {text: 'Ask user for input'},
      {text: 'To prompt user for to call a function'},
      {text: 'To make a title for HTML'},
      {text: 'To style CSS'}],
    correctAnswer: 'a'
} 
];

function displayQuestion() {

    if (currentIndex === testQuestions.length) {
        return showGameOverContainer();
    }

    questionText.innerText = testQuestions[currentIndex].question;
    buttonA.innerText = testQuestions[currentIndex].answer[0].text;
    buttonB.innerText = testQuestions[currentIndex].answer[1].text;
    buttonC.innerText = testQuestions[currentIndex].answer[2].text;
    buttonD.innerText = testQuestions[currentIndex].answer[3].text;

};

function showGameOverContainer() {
    endingScore.textContent = score;

    quizWrapper.style.display = 'none';
    gameOverContainer.style.display = 'block';
}

function checkAnswer(response) {

    console.log("checking answer...")

    var correctAnswer = testQuestions[currentIndex].correctAnswer;

    if (correctAnswer === response) {
        score++;
        result.textContent = "Correct!";
    } else {
        count -= 5;
        result.textContent = "Wrong!";
    }

    currentIndex++;
    displayQuestion();

    setTimeout(function() {
        result.textContent = "";
    }, 1000);

}
function startGame() {
    isWin = false; 
    count = 60;
    startbtn.disabled = true; 
    displayQuestion();
    startTimer();
};

function startTimer() {
    timer = setInterval(function () {
        count--;
        countText.textContent = count;
        
        if (count < 0 && currentIndex !== testQuestions.length) {
            clearInterval(timer);
        }
    }, 1000);
    console.log('hello again')
}




 function tapTimer() {
    if (count < 6) {
        count = 0
    }
    else {
        count = count -5
    }
 }


