var alertsCounter = 0;
var alerts = document.querySelector(".alert");

function addNewAlert(message)
{
    var newAlert = document.createElement('div');
    alertsCounter++;
    newAlert.setAttribute('class','alert__content');
    newAlert.setAttribute('id','alert'+alertsCounter);
    newAlert.innerHTML = "<div class='alert__info'>"+message+"</div>"+
    "<div class='alert__close' ><i class='far fa-window-close'></i> </div>";
    alerts.appendChild(newAlert);
    
    newAlert.addEventListener("click",function()
    {
        removeNewAlert(newAlert.id);
    });
    
    var a = document.getElementsByClassName("alert__content");

    if(a.length >= 0)
    {
        autoRemoveAllAlert();
    }

}
function removeNewAlert(elementId)
{
    var element = document.getElementById(elementId);
    alerts.removeChild(element);
    alertsCounter--;
}

function removeAllAlert()
{
    var a = document.getElementsByClassName("alert__content");
    while(a.length > 0 )
    {
        alerts.removeChild(a[0]);
        alertsCounter--;
    }
}
function autoRemoveAllAlert()
{
    var alertAutoTimer= setInterval(function(){
        var a = document.getElementsByClassName("alert__content");
        if(a.length != 0)
        {
            alerts.removeChild(a[0]);

        }
        alertsCounter--;
        if (alertsCounter < 0) 
        {
            clearInterval(alertAutoTimer);
        }
    },3000);
}

//*********************Modal******************

var btnCloseModal = document.querySelector(".modal__close-btn");
var modal = document.querySelector(".modal");
var modalHeading = document.querySelector(".modal__heading");
var modalContent = document.querySelector(".modal__content");
var modalSaveBtn = document.querySelector(".modal__save-btn");
var modalCloseBtn = document.querySelector(".modal__close-btn");

modal.addEventListener("click", function (e) {
    if (e.target === btnCloseModal) {
        modal.style.display = 'none';
    }
    if (e.target === modalSaveBtn) {
        showResult();
    }
});
