var startExamBtn = document.querySelector(".start-exam__start-btn");
startExamBtn.addEventListener("click",function(){
    examPageLoad(noOfQuestions);
    removeStartExamPage();
    document.title = "Exam";

});