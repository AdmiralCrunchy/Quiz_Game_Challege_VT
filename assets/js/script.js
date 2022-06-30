var startBUTTON = document.getElementById("gameSTART");
var textQUEST = document.getElementById("textQUEST");
var choiceA = document.getElementById("textA");
var choiceB = document.getElementById("textB");
var choiceC = document.getElementById("textC");
var choiceD = document.getElementById("textD");
var timeEL = document.getElementById("timeSPOT");
var qNUM = document.getElementById("questNUM");
console.log("Is this even working");
console.log(startBUTTON);

//Question Arrays
questionFORMAT = [
    {
        questionTXT: "If you had a piece of paper; how many times would you have to fold it for it to span the distance between the earth and moon? " ,
        choicesABCD:  ["94", "12","42", "1,000"],
        correctAnswer: 2,
    },
    {
        questionTXT: "What edible food never goes bad?" ,
        choicesABCD:  ["Prunes", "Honey", "Beef Jerky", "Dried Lentils"],
        correctAnswer: 1,
    },
    {
        questionTXT: "What country invented ice cream?" ,
        choicesABCD:  ["Yogoslavia", "Istanbul", "Constantinople", "China"],
        correctAnswer: 3,
    },
    {
        questionTXT: "What animal is on the Porche Logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche Logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche Logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What animal is on the Porche logo?" ,
        choicesABCD:  ["Horse", "Bull", "Platypus", "Lion"],
        correctAnswer: 0,
    },
]

//current question

var currentQUEST;

//score

var playerSCORE;


//startGAME
    //triggered by an event listener

   startBUTTON.addEventListener("click", startGAME);
    //start timer
    //set up 1st question

function startGAME()
{
    var normalGAME;
    console.log(questionFORMAT[0].questionTXT);
    normalGAME = window.confirm("Normal Game");
    if (normalGAME == true)
    {
        console.log("normal")
        maxTIME = 5;
        maxQUEST = 10;
    }
    else
    {
        console.log("Marathon")
        maxTIME = 10;
        maxQUEST = 100;
    }
    setTIMER(maxTIME);
    //MAKE SURE TO SWITCH THIS BACK AFTER WE FIGURE OUT QUESTION SHIT!!!!!
    for (var i = 0; i < maxQUEST; i++)
    {
        qNUM.textContent = "QUESTION:  " + (i+1);

        setQUESTION(questionFORMAT[i]);
    }
    

}


//timer
function setTIMER(timeLEFT)
{
    var timeInterval = setInterval(function(){
        timeLEFT--;
        timeEL.textContent = timeLEFT + " Seconds remaining!";
        
        if(timeLEFT === 0)
        {
            clearInterval(timeInterval)
            youLOSE();
        }
        
    }, 1000 );


}

function youLOSE()
{
    timeEL.textContent = " ";
    window.alert("YOU LOSE!!!");
}

    //setinterval()
    //render to page

//load Question
function setQUESTION(setQUEST)
{
    console.log(setQUEST.questionTXT);
    textQUEST.textContent = setQUEST.questionTXT;
    choiceA.textContent = setQUEST.choicesABCD[0];
    choiceB.textContent = setQUEST.choicesABCD[1];
    choiceC.textContent = setQUEST.choicesABCD[2];
    choiceD.textContent = setQUEST.choicesABCD[3];


}

    //current Question++
    //render the question and multiple choices to the page
    //btn1.textConent = 


// CheckAnswer
    //check which button user clicked
    //COMPARE THE CHOICE WITH CORRECT ANSWER
    //act on right/wrong answer
    //loadQuestion()

function tallySCORE()
{
    var totalRIGHT;
    var streakMULT;
    var timeBONUS;
    var finalSCORE;
    finalSCORE = (totalRIGHT + (10 * timeBONUS)) *  streakMULT;

    return finalSCORE;
}

//endGame
    //called at end of timer of when current question ># questions
    // cancel timer

    //Calculate score

 //tallySCORE();
    

    //prompt for user initials
    //local storage
        //1. read ls and store in js variable
        //2. check if null
        //3. update js variable with our new score
        //4. render to page
        //5. save updated js variable to ls
    //make highscores visible
    //prompt to play again?

    //check 26 from web API section.