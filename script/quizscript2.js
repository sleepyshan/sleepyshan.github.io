const quizquestions = [
    {
        question: "is this a question?",
        optiona: "yes",
        optionb: "no"
    },
    {
        question: "is this another question?", 
        optiona: "ya lah", 
        optionb: "no lah"
    }
]

function questionload(number) {
    const questions = quizquestions[number].question;
    const optionsa = quizquestions[number].optiona;
    const optionsb = quizquestions[number].optionb;

    document.getElementById('bigquestion').innerText = questions;
    document.getElementById('optiona').innerText = optionsa;
    document.getElementById('optionb').innerText = optionsb;
}

var count = 0;

function nextquestionload() {

    questionload(count);

    count++;
}