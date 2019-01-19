
var fullName = document.getElementById("fullname-signup");
var gender = document.getElementById("gender-signup");
var studentID = document.getElementById("studentId-signup");
var password = document.getElementById("password-signup");
var conPassword = document.getElementById("con-password-signup");

var haveAccountLink = document.querySelector(".signup__login");
var signupBtn = document.querySelector(".signup__sign-btn");

var errorType = 0;
function validateSignup()
{
    while ( fullName.value === null||fullName.value.length < 5 || !isNaN(fullName.value))
    {
        addNewAlert("Full Name mustn't be less than 5 char, empty OR not a number");
        
        return false;
    }
    while ( gender.value === "")
    {
        addNewAlert("You must select a gender");
        
        return false;
    }

    while ( studentID.value === null||studentID.value.length < 5
         || !isNaN(studentID.value)|| studentID.value.match(' '))
    {
        addNewAlert("Student ID cannot be less than 5 char, a number, empty OR contain any spaces");
        
        return false;
    }
    
    while (password.value === null || password.value.length < 8)
    {
        addNewAlert("Password cannot be less than 8 characters or empty");
        
        return false;
    }
    
    while (password.value !== conPassword.value)
    {
        addNewAlert("Password and Confirm Password Not Matching!");
        
        return false;
    }

    var newUser = new User(fullName.value,gender.value,studentID.value,password.value);
    users.push(newUser);
    return true;

};

haveAccountLink.addEventListener("click",function()
{
    loginPageLoad();
    removeSignupPage();
    document.title = "Log in";
});
signupBtn.addEventListener("click",function(e)
{
    e.preventDefault();
    if(validateSignup())
    {
        loginPageLoad();
        removeSignupPage();
        removeAllAlert();
    }
    
});