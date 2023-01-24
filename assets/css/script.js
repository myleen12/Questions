var buttonA = document.getElementById('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');
var buttonD = document.getElementById('d');
var quizTimer = document.getElementById('timer');
var startbtn = document.getElementById('start-btn');
var finalscore = document.getElementById('final score');
var endbtn = document.getElementById('endbtn');
var answerEl = document.getElementById('answer')
var submitbtn = document.getElementById('submitbtn');
var testQuestions = document.getElementById('testquestions');
var countText = document.getElementById('countText');
var questionText = document.getElementById('question');
var currentQuestion;
var timer; 
var count;
startbtn.addEventListener('click', startGame);


var testQuestions = [
{
    question:'What tags are used to put in HTML for Javascript?',
    answer: [
      {text: '<JS>'},
      {text: '<scripting>'},
      {text: '<HTML>'},
      {text: '<script>'}],
    correctAnswer: '<script>'
    },
    {
    question: 'Who invented javascript?',
    answer: [
      {text: 'Brendan Eich'},
      {text: 'Beyonce'},
      {text: 'Jay Z'},
      {text: 'Elon Musk'}],
    correctAnswer: 'Brendan Eich'
 },
 {
    question: 'What does DOM stand for?',
    answer: [
      {text: 'Document Object Model'},
      {text: 'Document object mood'},
      {text: 'Document or miles'},
      {text: 'Double stuff oreos and milk'}],
    correctAnswer: 'Document Object Model'
 },
 {
    question: 'How many element can you use in HTML?',
    answer: [
      {text: 'One million'},
      {text: '500'},
      {text: 'unlimited'},
      {text: 'Only 5'}],
    correctAnswer: 'unlimited'
},
{   
    question:'What is the prompt() used for?',
    answer: [
      {text: 'Ask user for input'},
      {text: 'To prompt user for to call a function'},
      {text: 'To make a title for HTML'},
      {text: 'To style CSS'}],
    correctAnswer: 'Ask user for input'
  }
];






function displayQuestion0(currentQuestion) {
    
    currentQuestion = testQuestions[0].question;
    questionText.innerText = currentQuestion;
    buttonA.innerText = testQuestions[0].answer[0].text;
    buttonB.innerText = testQuestions[0].answer[1].text;
    buttonC.innerText = testQuestions[0].answer[2].text;
    buttonD.innerText = testQuestions[0].answer[3].text;

    buttonA.addEventListener('click', tapTimer);
    buttonB.addEventListener('click', tapTimer);
    buttonC.addEventListener('click', tapTimer);
    buttonD.addEventListener('click', displayQuestion1);
    

};

function displayQuestion1(currentQuestion) {
    
    currentQuestion = testQuestions[1].question;
    questionText.innerText = currentQuestion;
    buttonA.innerText = testQuestions[1].answer[0].text;
    buttonB.innerText = testQuestions[1].answer[1].text;
    buttonC.innerText = testQuestions[1].answer[2].text;
    buttonD.innerText = testQuestions[1].answer[3].text;

    buttonA.addEventListener('click', displayQuestion2);
    buttonB.addEventListener('click', tapTimer);
    buttonC.addEventListener('click', tapTimer);
    buttonD.addEventListener('click', tapTimer);


};
function displayQuestion2(currentQuestion) {
    
    currentQuestion = testQuestions[2].question;
    questionText.innerText = currentQuestion;
    buttonA.innerText = testQuestions[2].answer[0].text;
    buttonB.innerText = testQuestions[2].answer[1].text;
    buttonC.innerText = testQuestions[2].answer[2].text;
    buttonD.innerText = testQuestions[2].answer[3].text;

    buttonA.addEventListener('click', displayQuestion3);
    buttonB.addEventListener('click', tapTimer);
    buttonC.addEventListener('click', tapTimer);
    buttonD.addEventListener('click', tapTimer);

};
function displayQuestion3(currentQuestion) {
    
    currentQuestion = testQuestions[3].question;
    questionText.innerText = currentQuestion;
    buttonA.innerText = testQuestions[3].answer[0].text;
    buttonB.innerText = testQuestions[3].answer[1].text;
    buttonC.innerText = testQuestions[3].answer[2].text;
    buttonD.innerText = testQuestions[3].answer[3].text;

    buttonA.addEventListener('click', tapTimer);
    buttonB.addEventListener('click', tapTimer);
    buttonC.addEventListener('click', displayQuestion4);
    buttonD.addEventListener('click', tapTimer);

};
function displayQuestion4(currentQuestion) {
    
    currentQuestion = testQuestions[4].question;
    questionText.innerText = currentQuestion;
    buttonA.innerText = testQuestions[4].answer[0].text;
    buttonB.innerText = testQuestions[4].answer[1].text;
    buttonC.innerText = testQuestions[4].answer[2].text;
    buttonD.innerText = testQuestions[4].answer[3].text;

    buttonA.addEventListener('click', winGame);
    buttonB.addEventListener('click', tapTimer);
    buttonC.addEventListener('click', tapTimer);
    buttonD.addEventListener('click', tapTimer);

};

function winGame() {
    currentQuestion.classList.add('hide')
    alert('Congrats You Won!')
}

function startGame() {
    isWin = false; 
    count = 60;
    startbtn.disabled = true; 
    startTimer();
    console.log('hello')
    displayQuestion0();
};

function startTimer() {
    timer = setInterval(function () {
        count--;
        countText.textContent = count;
        if (count >= 0) {
            if (count > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (count === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
    console.log('hello again')
}
 function loseGame() {
    alert('YOU ARE FINISHED!!!')

 }


 function tapTimer() {
    if (count < 6) {
        count === 0
    }
    else {
        count = count -5
    }
 }


