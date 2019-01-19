

function loginPageLoad()
{   

    removeSignupScript();
    var generatedHtml = document.querySelector("#generated_html");
    var loginPage = document.createElement('div');
    loginPage.setAttribute('class','login');
    loginPage.innerHTML = " <div class='login'>"+
    "<div class='login__logo'>"+
        "<img class='login__logo-img' src='https://resources.lookback.io/images/name-badge.svg' alt=''>"+
    "</div>"+
    "<h1 class='login__title'>Hey, good to see you, Are your ready?</h1>"+
    "<h2 class='login__sub-title'>Sign in to start your exam.</h2>"+
    "<div class='login__box'>"+
        "<form method='POST' name='loginform' id='login-form' class='login__form' onsubmit='return ValidateLogin()'>"+
            "<div class='login__text-field'>"+
                "<label class='login__field-label' for='studentID-login'>Student Username</label>"+
                "<input name='studentID' class='login__field-input' type='text' placeholder='E.g. OsamaAllam' "+
                "id='studentID-login' autocomplete='name'>"+
            "</div>"+
            "<div class='login__text-field'>"+
                "<label class='login__field-label' for='password-login'>Password</label>"+
                "<input name='password'  class='login__field-input' placeholder='********' type='password' "+
                "id='password-login'>"+
            "</div>"+
            "<button class='btn login__sign-btn' type='submit'>Sign in</button>"+
        "</form>"+
    "</div>"+
    "<a class='login__signup' >Not Registered? (Create an account)</a>"+
"</div>";

generatedHtml.after(loginPage);

    addLoginScript();
}

function removeLoginPage()
{
    var body = document.querySelector("body");
    var element = document.querySelector(".login");
    if(element !== null)
    {
        body.removeChild(element);
    }
}




function signupPageLoad()
{
    removeLoginScript();
    var generatedHtml = document.querySelector("#generated_html");
    var signupPage = document.createElement('div');
    signupPage.setAttribute('class','signup');
    signupPage.innerHTML = "<div class='signup'>"+
        "<div class='signup__logo'>"+
            "<img class='signup__logo-img' src='https://resources.lookback.io/images/name-badge.svg' alt=''>"+
        "</div>"+
        "<h1 class='signup__title'>Hey, welcome!</h1>"+
        "<h2 class='signup__sub-title'>Tell us a little about yourself.</h2>"+
        "<div class='signup__box'>"+
            "<form class='signup__form' method='POST' onsubmit='return ValidateSignup()' >"+
                "<div class='signup__text-field'>"+
                    "<label class='signup__field-label' for='fullname-signup'>Full Name</label>"+
                    "<input  name='fullname' class='signup__field-input' type='text' placeholder='E.g. Osama Shawky Mohammed' id='fullname-signup'"+
                        "autocomplete='name'>"+
                "</div>"+
                "<div class='signup__text-field'>"+
                    "<label class='signup__field-label' for='gender-signup'>Gender</label>"+
                    "<select  name='gender' id='gender-signup' class='signup__field-input'>"+
                        "<option value=''>Select A Gender</option>"+
                        "<option value='1'>Male</option>"+
                        "<option value='2'>Female</option>"+
                    "</select>"+
                "</div>"+
                "<div class='signup__text-field'>"+
                    "<label class='signup__field-label' for='studentId-signup'>Student Username</label>"+
                    "<input name='studentId'  class='signup__field-input' type='text' placeholder='E.g. osamaallam' id='studentId-signup'"+
                        "autocomplete='name'>"+
                "</div>"+
                "<div class='signup__text-field'>"+
                    "<label class='signup__field-label' for='password-signup'>Password</label>"+
                    "<input name='password' class='signup__field-input' placeholder='********' type='password' id='password-signup'>"+
                "</div>"+
                "<div class='signup__text-field'>"+
                    "<label class='signup__field-label' for='con-password-signup'>Confirm Password</label>"+
                    "<input name='conpassword' class='signup__field-input' placeholder='********' type='password' id='con-password-signup'>"+
                "</div>"+
                "<button  class=' btn signup__sign-btn ' type='submit'>Sign Up</button>"+
            "</form>"+
        "</div>"+
        "<a class='signup__login' >Already have an account? (Login)</a>"+
    "</div>"+
"</div>";

    generatedHtml.after(signupPage);
    addSignupScript();
}

function removeSignupPage()
{
    var body = document.querySelector("body");
    var element = document.querySelector(".signup");
    if(element !== null)
    {
        body.removeChild(element);
    }
}


function startExamPageLoad()
{
    addStartExamScript();
    var generatedHtml = document.querySelector("#generated_html");
    var startExam = document.createElement('div');
    startExam.setAttribute('class','start-exam');
    startExam.innerHTML = "<div class='start-exam'>"+
    "<div class='start-exam__header'>"+
        "<i class='start-exam__header-logo fas fa-file-alt'></i>"+
        "<a href='#' class='start-exam__header-title'>Online Multiple Choice Question Quiz Test</a>"+
    "</div>"+
    "<div class='start-exam__details'>"+
        "<h3 class='start-exam__details-title'>STUDENT DETAILS</h3>"+
        "<p class='start-exam__details-data'><strong>Student Name: "+loggedUser.FullName+"</strong></p>"+
        "<p class='start-exam__details-data'><strong>Student Id : "+loggedUser.StudentID+"</strong></p>"+
        "<p class='start-exam__details-data'><strong>Exam Duration : "+(examDuration/60) +"min"+"</strong></p>"+
        "<p class='start-exam__details-data'><strong>Total No. Of Questions : "+noOfQuestions+"</strong></p>"+
                "<button class='btn start-exam__start-btn'>Start My Online Test</button>"+
    "</div>"+
    
    "<div class='start-exam__footer'>"+
        "<p class='start-exam__credits'>© 2019 All Rights Reserved.</p>"+
    "</div>"+
"</div>";

generatedHtml.after(startExam);

}
function removeStartExamPage()
{
    var body = document.querySelector("body");
    var element = document.querySelector(".start-exam");
    if(element !== null)
    {
        body.removeChild(element);
    }
}



function examPageLoad(noOfQuestions)
{
    
    addExamScript();
    var panelItems = createPanelItems(noOfQuestions); // creates panel items corresponding to No of questions
    var generatedHtml = document.querySelector("#generated_html");
    var Exam = document.createElement('div');
    Exam.setAttribute('class','exam-page');
    Exam.innerHTML = "<div class='exam-page'> "+
    "<div class='exam-page__header'>"+
        "<i class='exam-page__header-logo fas fa-file-alt'></i>"+
        "<a href='#' class='exam-page__header-title'>Online Multiple Choice Question Quiz Test</a>"+
    "</div>"+
    "<div class='exam-page__panels'>"+
        "<div class='exam-page__left-panel'>"+
            "<div class='exam-page__details'>"+
                "<h3 class='start-exam__details-title'>QUESTIONS FOR EXAM</h3>"+
                "<div class='exam-page__ques-header'>"+
                    "<h3 class='exam-page__ques-header-title'>Question No. </h3>"+
                "</div>"+
                "<div class='exam-page__ques-body'>"+
                    "<div class='exam-page__ques-text'>"+
                    examQuestions[0].Header+
                    "</div>"+
                    "<div class='exam-page__ques-answers'>"+
                        "<label class='exam-page__ques-answer' id='optionsLabel1' for='optionsRadios1'>"+
                            "<input type='radio' name='answer-options' id='optionsRadios1' value='0'>"+
                            examQuestions[0].Answers[0]+
                        "</label>"+
                        "<label class='exam-page__ques-answer'id='optionsLabel2' for='optionsRadios2'>"+
                            "<input type='radio' name='answer-options' id='optionsRadios2' value='1'>"+
                            examQuestions[0].Answers[1]+
                        "</label>"+
                        "<label class='exam-page__ques-answer'id='optionsLabel3' for='optionsRadios3'>"+
                            "<input type='radio' name='answer-options' id='optionsRadios3' value='2'>"+
                            examQuestions[0].Answers[2]+
                        "</label>"+
                        "<label class='exam-page__ques-answer'id='optionsLabel4' for='optionsRadios4'>"+
                            "<input type='radio' name='answer-options' id='optionsRadios4' value='3'>"+
                            examQuestions[0].Answers[3]+
                        "</label>"+
                    "</div>"+
                "</div>"+
                "<div class='exam-page__ques-footer'>"+
                    "<div class='exam-page__ques-footer-left'>"+
                        "<button class='btn exam-page__ques-nav-btn' id='previous-btn'>Previous Question</button>"+
                        "<button class='btn exam-page__ques-nav-btn' id='skip-next-btn'>Skip & Next</button>"+
                    "</div>"+
                    "<div class='exam-page__ques-footer-right'>"+
                        "<button class='btn exam-page__ques-nav-btn' id='save-next-btn'>Save & Next</button>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>"+


        "<div class='exam-page__right-panel'>"+
            "<div class='exam-page__student-info'>"+
                "<i class='exam-page__user-logo fa fa-user'></i>"+
                "<div class='exam-page__student-info-data'>"+
                    "<h3 class='exam-page__timer-title'>time left</h3>"+
                    "<h3 class='exam-page__exam-timer'>00:00</h3>"+
                    "<div class='exam-page__username'>"+
                        loggedUser.FullName+
                    "</div>"+
                "</div>"+
            "</div>"+

            "<div class='exam-page__question-panel'>"+
                "<div class='exam-page__question-panel-title'>"+
                    "View Question Panel:"+
                "</div>"+
                "<div class='exam-page__question-panel-items'>"+
                    panelItems+ // generated panel items 
                "</div>"+
                "<div><strong>*Only <span style='color:red'>"+
                "Skipped</span> and <span style='color:green'>Answered</span>"+
                " Questions are clickable</strong></div>"+
            "</div>"+
            "<div class='exam-page__question-panel-keys'>"+
                "<div class='exam-page__question-panel-title'>"+
                    "Question Panel Keys:"+
                "</div>"+
                "<div class='exam-page__question-key'>"+
                        "<span class='exam-page__current-key'></span>"+
                   "<p>Current Question</p> "+
                "</div>"+
                "<div class='exam-page__question-key'>"+
                    "<span class='exam-page__visited-key'></span>"+
                    "<p>Skipped Question</p> "+
                "</div>"+
                "<div class='exam-page__question-key'>"+
                        "<span class='exam-page__answered-key'></span>"+
                    "<p>Answered Question</p> "+
                "</div>"+
                "<div class='exam-page__question-key'>"+
                        "<span class='exam-page__not-answered-key'></span>"+
                   "<p>Not Answered Question</p> "+
                "</div>"+
            "</div>"+
        "</div>"+
    "</div>"+
"</div>";

generatedHtml.after(Exam);

}
function removeExamPage()
{
    var body = document.querySelector("body");
    var element = document.querySelector(".exam-page");
    if(element !== null)
    {
        body.removeChild(element);
    }
}

function addLoginScript()
{
    
    var pages = document.getElementById("pages_script");

    var login = document.createElement('script');
    login.setAttribute('id','login_script');
    login.setAttribute('src','Scripts/login.js');
    pages.after(login);
}
function removeLoginScript()
{
    var body = document.querySelector("body");
    var element = document.getElementById("login_script");
    if(element !== null)
    {
        body.removeChild(element);
    }
}

function addSignupScript()
{
    var login = document.createElement('script');
    var pages = document.getElementById("pages_script");

    login.setAttribute('id','signup_script');
    login.setAttribute('src','Scripts/signup.js');

    pages.after(login);
}
function removeSignupScript()
{
    //   
    var body = document.querySelector("body");
    var element = document.getElementById("signup_script");
    if(element !== null)
    {
        body.removeChild(element);
    }
}

function addStartExamScript()
{
    var startExam = document.createElement('script');
    var login = document.getElementById("login_script");

    startExam.setAttribute('id','start-exam_script');
    startExam.setAttribute('src','Scripts/start-exam.js');

    login.after(startExam);
}
function removeStartExamScript()
{
    //   
    var body = document.querySelector("body");
    var element = document.getElementById("start-exam_script");
    if(element !== null)
    {
        body.removeChild(element);
    }
}


function addExamScript()
{
    var exam = document.createElement('script');
    var startExam = document.getElementById("start-exam_script");

    exam.setAttribute('id','exam_script');
    exam.setAttribute('src','Scripts/exam.js');

    startExam.after(exam);
}
function removeExamScript()
{
    var body = document.querySelector("body");
    var element = document.getElementById("exam_script");
    if(element !== null)
    {
        body.removeChild(element);
    }
}
function createPanelItems(noOfQuestions)
{
    var result = "<button  class='exam-page__panel-current-ques exam-page__question-panel-item' id='item0'>1</button>";
    for (let index = 1; index < noOfQuestions; index++) 
    {
        result += "<button  class='exam-page__question-panel-item' id='item"+index+"'>"+(index+1)+"</button>";
    }
    return result;
}
loginPageLoad();    