//functions constructors
function Result(_user,_answers)
{
    this.User = _user;
    this.Answers = _answers;
    this.Result = 0;
}
function Answer(_questionIndex,_answerIndex,_skipped)
{
    this.QuestionIndex = _questionIndex;
    this.AnswerIndex = _answerIndex;
    this.Skipped = _skipped;
}
//global variables
var currentQuestion = 0;
var timerInterval;
var saveBtn = document.getElementById("save-next-btn");
var skipBtn = document.getElementById("skip-next-btn");
var previousBtn = document.getElementById("previous-btn");
var answers = document.getElementsByName("answer-options");
var questionsHeader = document.querySelector(".exam-page__ques-header-title");
var timerTag = document.querySelector(".exam-page__exam-timer");
var questionPanelItems = document.querySelectorAll(".exam-page__question-panel-item");

questionsHeader.textContent = "Question No. "+(currentQuestion+1)+ " Of "+ examQuestions.length;


var currentPanelItem ;
var userAnswers = new Array();//array takes 2 values question No and user selected answer
var result = new Result(loggedUser,userAnswers);
//functions
function choosedAnswer()
{
    var choosedAns = false;
    answers.forEach(function(v){
        if(v.checked)
        {
            choosedAns =  v.value;
        }
    });
    return choosedAns;
}
function alreadyAnswered()
{
     
    var exist = false;
    result.Answers.forEach(function(v){
        if (currentQuestion === v.QuestionIndex)
        {
            exist = v;
        }
    });
    return exist;
}
function changeQuestion()
{
    var alreadyAns = alreadyAnswered();
    var ans = 0;
    var questionText = document.querySelector(".exam-page__ques-text");
    questionText.textContent = examQuestions[currentQuestion].Header;
    
    answers.forEach(function(v,i){
        v.checked = false;
        document.getElementById("optionsLabel"+(i+1)).lastChild.nodeValue = examQuestions[currentQuestion].Answers[ans];
        ans++;
    });
    if(alreadyAns)
    {
        if(!isNaN(alreadyAns.AnswerIndex))
        {
            answers[alreadyAns.AnswerIndex].checked = true;
        }
    }

    currentPanelItem = document.getElementById("item"+currentQuestion);
    currentPanelItem.classList.add("exam-page__panel-current-ques");
    questionsHeader.textContent = "Question No. "+(currentQuestion+1)+ " Of "+ examQuestions.length;
    if (currentQuestion < examQuestions.length-1)
    {
        saveBtn.textContent = "Save & Next";
        skipBtn.textContent = "Skip & Next";
    }
    else
    {
        saveBtn.textContent = "Save & Finish";
        skipBtn.textContent = "Skip & Finish";
    }

}
function showResult()
{
    result.Answers.forEach(function(v,i)
    {
        if(v.AnswerIndex !== false)
        {
            if( parseInt(v.AnswerIndex) === examQuestions[i].CorrectAnswer)
            {
                result.Result++;
            }
        }
    });
    
    modalHeading.textContent = "Your Result";
    modalHeading.style.fontSize = "4rem";
    modalHeading.style.color = "rgb(34, 139, 34)";
    modalCloseBtn.style.display = 'none';
    modalSaveBtn.style.display = 'none';
    

    modalContent.style.fontSize = "3rem";
    modalContent.textContent = "Final Score "+result.Result+"/10 with Percentage of "+
    (result.Result/examQuestions.length)*100+"%";
    modal.style.display = 'flex';
    clearInterval(timerInterval);
}
function confirmFinish()
{
    var hasSkipped = false;
    result.Answers.forEach(function(v){
        if(v.Skipped)
        {
            hasSkipped = true;
        }
    });

    if(hasSkipped)
    {
        modalHeading.textContent = "Are you sure you want to finish?";
        modalHeading.style.fontSize = "3rem";
        modalHeading.style.color = "rgb(212, 118, 118)";
    
        modalContent.style.fontSize = "1.7rem";
        modalContent.textContent = "If you have any skipped answered questions it will be submited as it is.";
        modal.style.display = 'flex';
        modalSaveBtn.style.display = 'block';
    }
    else
    {
        showResult();
    }

}
function startTimer(duration, timerTag) {
    var timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerTag.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            clearInterval(timerInterval);
            showResult();
        }
    }, 1000);
}  
startTimer(examDuration,timerTag);

//buttons events
saveBtn.addEventListener("click",function()
{
    var choosedAns =parseInt(choosedAnswer());
    if(isNaN(choosedAns))
    {
        modalHeading.textContent = "Warning";
        modalHeading.style.fontSize = "3rem";
        modalHeading.style.color = "rgb(212, 118, 118)";

        modalContent.style.fontSize = "2rem";
        modalContent.textContent = "You must choose an answer";
        modal.style.display = 'flex';
        modalSaveBtn.style.display = 'none';
    }
    else
    {
        if(!alreadyAnswered())
        {
            result.Answers.push(new Answer(currentQuestion,choosedAns,false));
            
        }
        else
        {
            result.Answers[currentQuestion].Skipped = false;
            result.Answers[currentQuestion].AnswerIndex = choosedAns;
        }

        currentPanelItem = document.getElementById("item"+currentQuestion);
        currentPanelItem.classList.add("exam-page__panel-answered-ques");
        currentPanelItem.classList.remove("exam-page__panel-current-ques");
        currentPanelItem.addEventListener("click",function(){});
        currentQuestion++;
        
        if(currentQuestion === examQuestions.length)
        {
            currentQuestion = examQuestions.length-1;
            saveBtn.textContent = "Save & Finish";
            skipBtn.textContent = "Skip & Finish";

            confirmFinish();
        }
        changeQuestion();
    }
});
previousBtn.addEventListener("click",function(){
    currentPanelItem = document.getElementById("item"+currentQuestion);
    currentPanelItem.classList.remove("exam-page__panel-current-ques");

    currentQuestion--;
    if(currentQuestion < 0 )
    {
        currentQuestion = 0;
    }
    changeQuestion();
    currentPanelItem = document.getElementById("item"+currentQuestion);
    currentPanelItem.classList.add("exam-page__panel-current-ques");
});

skipBtn.addEventListener("click",function()
{
    var choosedAns =parseInt(choosedAnswer());
    if(!alreadyAnswered())
    {
        result.Answers.push(new Answer(currentQuestion,choosedAns,true));
    }
    else
    {
        result.Answers[currentQuestion].Skipped = true;
        result.Answers[currentQuestion].AnswerIndex = choosedAns;
    }

    currentPanelItem = document.getElementById("item"+currentQuestion);
    currentPanelItem.classList.remove("exam-page__panel-answered-ques");
    currentPanelItem.classList.remove("exam-page__panel-current-ques");
    currentPanelItem.classList.add("exam-page__panel-visited-ques");

    currentPanelItem.addEventListener("click",function(){});
    currentQuestion++;
    
    if(currentQuestion >= examQuestions.length)
    {
        currentQuestion = examQuestions.length-1;
        confirmFinish();
    }
    changeQuestion();
});

questionPanelItems.forEach(function(v){
    v.addEventListener("click",function(){
        if(v.classList.contains("exam-page__panel-visited-ques")||
        v.classList.contains("exam-page__panel-answered-ques"))
        {
            currentPanelItem.classList.remove("exam-page__panel-current-ques");
            currentQuestion = parseInt(v.textContent)-1;
            
            changeQuestion();
        }
    });
});