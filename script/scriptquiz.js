// A JavaScript Array is a data structure that contains a group of elements.
// It consists of two square brackets that wrap optional array elements separated by a comma. Array elements can be any type, including number, string, boolean, null, undefined, object, function, regular expression and other arrays.

const quizData = [
    {
        question: "The answer is 1A",
        a: 'This is Answer 1A',
        b: 'This is Answer 1B',
        c: 'This is Answer 1C',
        d: 'This is Answer 1D',
        correct: 'This is Answer 1A'
    }, {
        question: 'The answer is 2B',
        a: 'This is Answer 2A',
        b: 'This is Answer 2B',
        c: 'This is Answer 2C',
        d: 'This is Answer 2D',
        correct: 'This is Answer 2B'
    }, {
        question: 'The answer is 3C',
        a: 'This is Answer 3A',
        b: 'This is Answer 3B',
        c: 'This is Answer 3C',
        d: 'This is Answer 3D',
        correct: 'This is Answer 3C'
    }
]


var H1question = document.getElementById("H1question");
var currentQuiz = 0;
var correctscore = 0;


function startQuiz() {

    loadQuiz();
}

function submitans() {

    if (currentQuiz == quizData.length) {
        location.reload();
        }  
     
    if ($('.quizanswer').is(':checked')) {

        var selection = document.querySelector('input[type="radio"]:checked');
        var selectiontext = ("label" + selection.id + "text")
        var chosenanswer = document.getElementById(selectiontext).innerText;

        if (chosenanswer == quizData[currentQuiz].correct) {
            correctscore++;
        } 

        document.getElementById('tally').innerHTML = "Score: " + correctscore + "/3";

        currentQuiz++;
        loadQuiz();   
        document.getElementById("a").checked = false;
        document.getElementById("b").checked = false;
        document.getElementById("c").checked = false;
        document.getElementById("d").checked = false;


    }
}

function loadQuiz() {


    if (currentQuiz < quizData.length) {
    H1question.innerText = quizData[currentQuiz].question;
    labelatext.innerText = quizData[currentQuiz].a;
    labelbtext.innerText = quizData[currentQuiz].b;
    labelctext.innerText = quizData[currentQuiz].c;
    labeldtext.innerText = quizData[currentQuiz].d;
    } else {
        document.getElementById('submit').innerHTML="Play again?";
        }

    

}