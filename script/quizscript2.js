const quizquestions = [
    {
        question: "is shan bebe cute?",
        optiona: "yes",
        optionb: "of course"
    },
    {
        question: "who is the best?",
        optiona: "shan bebe",
        optionb: "jack bebe"
    }
]

const answers = [quizquestions[0].optionb, quizquestions[1].optiona]

function questionload(number) 
{
    //If there are no more questions
    if(count == quizquestions.length)
    {
        //Show result and reload page when alert box is closed
        window.alert("Correct answer(s): " + answeredCorrectly + "\nWrong answer(s): " + answeredWrongly + "\nScore: " + score) ? "" : window.location.reload();
    }
    //Else show next question
    else
    {
        const questions = quizquestions[number].question;
        const optionsa = quizquestions[number].optiona;
        const optionsb = quizquestions[number].optionb;

        document.getElementById('bigquestion').innerText = questions;
        document.getElementById('optiona').innerText = optionsa;
        document.getElementById('optionb').innerText = optionsb;
    }
}

var count = 0, answeredCorrectly = 0, answeredWrongly = 0, score = 0;
var selectedAns, correctAns;
var proceed = false;

function nextquestionload()
{
    //If not loading for the first time
    if(count != 0)
    {
        //Check if there is at least one answer selected
        var ele = document.getElementsByName("radioButton");
        for(var i=0;i<ele.length;i++)
        {
            if(ele[i].checked)
            {
                proceed = true;
                break;
            }
        }

        //Do not proceed if there is no answer selected
        if(proceed)
        {
            //Assign correct answer
            correctAns = answers[count-1];
            //Check which answer is selected
            var ele = document.getElementsByName("radioButton");
            for(var i=0;i<ele.length;i++)
            {
                if(ele[i].checked)
                {
                    var options = document.getElementsByName("radioLabel");
                    selectedAns = options[i].innerText;
                }
            }
            //Check if selected answer is correct
            if(selectedAns == correctAns)
            {
                //Correct answer
                score++;
                answeredCorrectly++;
            }
            else
            {
                //Wrong answer
                score--;
                answeredWrongly++;
            }

            //Reset radio buttons
            for(var i=0;i<ele.length;i++)
            ele[i].checked = false;

            proceed = false;
            questionload(count);
            count++;
        }
    }
    //Else if loading for the first time
    else
    {
        questionload(count);
        count++;
    }
}