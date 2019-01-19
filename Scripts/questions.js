function Question(_header,_answers,_correctAnswer)
{
    this.Header = _header;
    this.Answers = _answers; // array of answers
    this.CorrectAnswer = _correctAnswer;//0,1,2 or 3
}
var questions = new  Array(
    new Question("How do crickets hear?"
    ,new Array("Through their knees","Through their wings","Through their belly","Through their tongue"),0),

    new Question(" Which American city invented plastic vomit?"
    ,new Array("Detroit","Chicago","Columbus","Baltimore"),1),
    
    new Question(" In ‘Ben Hur’, which modern thing can be seen during the chariot scene?"
    ,new Array("A waitress","A postbox","A car","A street lamp"),2),
    
    new Question("What was Karl Marx’s favorite color?"
    ,new Array("Red","Brown","Blue","Purple"),3),
    
    new Question("What’s the best way to stop crying while peeling onions?"
    ,new Array("Chew gum","Lick almonds","Suck lemons","Eat cheese"),0),
    
    
    new Question("How old was the youngest Pope?"
    ,new Array("17","11","22","29"),1),
    
    new Question("Which animal sleeps for only five minutes a day?",
    new Array("A chameleon","A koala","A giraffe","A beaver"),2),
    
    new Question("How many words in the English language end in ‘dous’?"
    ,new Array("Two","Six","Eight","Four"),3),
    
    new Question("One human hair can support how many kilograms?"
    ,new Array("Three","Five","Seven","Nine"),0),
    
    new Question("The bikini was originally called the what?"
    ,new Array("Poke","Atom","Range","Half"),1),
    
    
    new Question("Which European city is home to the Fairy Investigation Society?"
    ,new Array("Poznan","Bratislava","Dublin","Tallinn"),2),
    
    new Question("What’s a frog’s favorite color?"
    ,new Array("Brown","Yellow","Orange","Blue"),3),
    
    new Question("Which one of these planets rotates clockwise?"
    ,new Array("Uranus","Mercury","Venus","Pluto"),2),
    
    new Question("What perspires half a pint of fluid a day?"
    ,new Array("Your scalp","Your armpits","Your buttocks","Your feet"),3),
    
    new Question("St Stephen is the patron saint of who?"
    ,new Array("Bricklayers","Plumbers","Roofers","Carpenters"),0),
    

    
    new Question("Which country leads the world in cork production?"
    ,new Array("Greece","Australia","Spain","Mexico"),2),
    
    new Question("On average, what do you do 15 times a day?"
    ,new Array("Lick your lips","Break wind","Burp","Laugh"),3),
    
    new Question("What color was Coca-Cola originally?"
    ,new Array("Green","Red","Purple","Beige"),0),
    
    new Question("Bubble gum contains what?"
    ,new Array("Plastic","Rubber","Calcium","Pepper"),1),
    
    new Question("The inventor of the paint roller was of which nationality?"
    ,new Array("Hungarian","Norwegian","Canadian","Argentinian"),2)
    
    );


    function generateRandomQuestions(noOfQuestions,totalQuestions)
    {
       var randomArray = uniqueRandomArray(noOfQuestions,totalQuestions);
        var examQuestions = new Array();
        for (let index = 0; index < randomArray.length; index++) 
        {
            examQuestions.push(questions[randomArray[index]]);
        }
        return examQuestions;
    }
    function uniqueRandomArray(noOfRandoms,range)
    {
       var random ;
       var result = new Array();
       var exist = false;
        for (let index = 0; index < noOfRandoms; ) 
        {
            random = (Math.floor(Math.random() * range) + 1)-1;
            if(result.noOfRandoms != 0)
            {
                result.forEach(function(v){
                    if(v === random)
                    {
                        exist = true;
                    }
                });
                if(!exist)
                {
                    result.push(random);
                    index++;
                }
                exist = false;
            }
            else
            {
                result.push(random);
            }
        }
        return result;
    }
    //Here you can change No of questions and exam duration
    var noOfQuestions = 10;
    var examQuestions = generateRandomQuestions(noOfQuestions,questions.length);
    var examDuration = 30 * 60;