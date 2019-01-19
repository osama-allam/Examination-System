
var notRegistedLink = document.querySelector(".login__signup");
var signinBtn = document.querySelector(".login__sign-btn");

function validateLogin(e)
{
    
    var studentID = document.getElementById("studentID-login");
    var password = document.getElementById("password-login");
    var checkData = users.filter(function(v){
        return (studentID.value === v.StudentID && password.value === v.Password)
    });
    if(checkData.length != 0)
    { 
        loggedUser = checkData[0];
        return true;
    }
    else
    {
        addNewAlert("We need both StudentID and password, please check again.");
        return false;
    }
}

notRegistedLink.addEventListener("click",function()
{
    signupPageLoad();
    removeLoginPage();
    document.title = "Sign Up";
});
signinBtn.addEventListener("click",function(e)
{
    e.preventDefault();
    if(validateLogin())
    {
        startExamPageLoad();
        removeLoginPage();
        removeAllAlert();
        document.title = "Start Exam";
    }
    
});
