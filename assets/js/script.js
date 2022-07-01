var startBUTTON = document.getElementById("gameSTART");
var textQUEST = document.getElementById("textQUEST");
var choiceA = document.getElementById("textA");
var choiceB = document.getElementById("textB");
var choiceC = document.getElementById("textC");
var choiceD = document.getElementById("textD");
var timeEL = document.getElementById("timeSPOT");
var qNUM = document.getElementById("questNUM");
var topSCORES = [100,90,80,70,60,50,40,30,20,10];
var topNAMES = ["vt", "vt","vt","vt","vt","vt","vt","vt","vt","vt",];
var topALL = {topSCORES, topALL};

var thisQUEST = 0;
var maxQUEST;
var maxTIME;
var winGAME = false;

var totalRIGHT = 0;
var totalWRONG = 0;
var streakMULT = 1;
var timeBONUS;
var finalSCORE;
var timeLEFT;

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
        questionTXT: "What country has the highest life expectancy?" ,
        choicesABCD:  ["Germany", "United Kingdom", "Hong Kong", "United States"],
        correctAnswer: 2,
    },
    {
        questionTXT: "What is the highest rated film on IMDb as of January 1st 2022? " ,
        choicesABCD:  ["Joker", "The Shawshank Redemption", "The Room", "Titanic"],
        correctAnswer: 1,
    },
    {
        questionTXT: "Which planet has the most moons?" ,
        choicesABCD:  ["Saturn", "Pluto", "Jupiter", "Earth"],
        correctAnswer: 0,
    },
    {
        questionTXT: "What is a group of Pandas known as?" ,
        choicesABCD:  ["A Bundle", "A Mob", "A Checkerboard", "An Embarrassment"],
        correctAnswer: 3,
    },
    {
        questionTXT: "Kratos is the main character of what video game series?" ,
        choicesABCD:  ["God of War", "Legend of Zelda", "Minecraft", "Fortnite"],
        correctAnswer: 0,
    },
    {
        questionTXT: "In what country is the Chernobyl nuclear plant located?" ,
        choicesABCD:  ["Bosnia", "Ukraine", "Russia", "Croatia"],
        correctAnswer: 1,
    },
    {
        questionTXT: "Who discovered that the earth revolves around the sun?" ,
        choicesABCD:  ["Leonardo DaVinci", "Sir Issacc Newton", "Ada Lovelace", "Nicolaus Copernicus"],
        correctAnswer: 3,
    },
    {
        questionTXT: "What company was initially know as Blue Ribbon Sports?" ,
        choicesABCD:  ["Adidas", "Nike", "Reebok", "Under Armor"],
        correctAnswer: 1,
    },
    {
        questionTXT: "What is the 4th letter of the Greek alphabet?" ,
        choicesABCD:  ["Omega", "Alpha", "Gamma", "Delta"],
        correctAnswer: 3,
    },
    {
        questionTXT: "What character has both Robert Downey Jr. and Benedict Cumberbatch played?" ,
        choicesABCD:  ["Smaug", "Sherlock Holmes", "Iron Man", "Charlie Chaplin"],
        correctAnswer: 1,
    },
    {
        questionTXT: "How many bones do we have in an ear?" ,
        choicesABCD:  ["0", "1", "2", "3"],
        correctAnswer: 3,
    },
    {
        questionTXT: "How many elements are in the periodic table?" ,
        choicesABCD:  ["72", "365", "118", "146"],
        correctAnswer: 2,
    },
    {
        questionTXT: "Which is not an olympic ring color?" ,
        choicesABCD:  ["Green", "Magneta", "Red", "Black"],
        correctAnswer: 1,
    },
    {
        questionTXT: "What does a Geiger Counter measure?" ,
        choicesABCD:  ["Wind Speeds", "Volumetric Pressure", "Earthquakes", "Radiation"],
        correctAnswer: 2,
    },
    {
        questionTXT: "What year was Google Images invented?" ,
        choicesABCD:  ["2001", "1994", "2004", "1999"],
        correctAnswer: 0,
    },
    {
        questionTXT: "Aside from the six main characters, which character appears the most on Friends?" ,
        choicesABCD:  ["Ben Geller", "Gunther", "Janice", "Richard Burke"],
        correctAnswer: 1,
    },
]

//score


//startGAME
    //triggered by an event listener

   startBUTTON.addEventListener("click", startGAME);

    //start timer
    //set up 1st question

function startGAME()
{
    var normalGAME;
    totalRIGHT = 0;
    totalWRONG = 0;
    streakMULT = 1;
    thisQUEST = 0;
    winGAME = false;
    normalGAME = window.confirm("Normal Game");

    if (normalGAME == true)
    {
        console.log("normal")
        maxTIME = 30;
        maxQUEST = 10;
    }
    else
    {
        console.log("Marathon")
        maxTIME = 60;
        maxQUEST = 20;
    }
    setTIMER(maxTIME);
    //MAKE SURE TO SWITCH THIS BACK AFTER WE FIGURE OUT QUESTION SHIT!!!!!
        
    setQUESTION(questionFORMAT[0], 0); 
    

}

choiceA.addEventListener('click', function () {checkANSWER(questionFORMAT[thisQUEST],0);});
choiceB.addEventListener('click', function () {checkANSWER(questionFORMAT[thisQUEST],1);});
choiceC.addEventListener('click', function () {checkANSWER(questionFORMAT[thisQUEST],2);});
choiceD.addEventListener('click', function () {checkANSWER(questionFORMAT[thisQUEST],3);});


function sleep(){
    if(buttonPUSHED == false)
    {
        console.log("sleeping");
        setInterval(sleep,20000);
    }
}

//timer
function setTIMER(timeCOUNT)
{
    timeLEFT = timeCOUNT;

    var timeInterval = setInterval(function(){
        timeLEFT--;
        timeEL.textContent = timeLEFT + " Seconds remaining!";
        timeBONUS = timeLEFT;
        if(timeLEFT <= 0)
        {
            clearInterval(timeInterval)
            youLOSE();
            endGAME();
        }
        if(winGAME == true)
        {
            clearInterval(timeInterval)
        }        
    }, 1000 );


}

function youLOSE()
{
    timeEL.textContent = " ";
    window.alert("YOU LOSE!!!");
}

function youWIN(yourSCORE)
{
    timeEL.textContent = " ";
    console.log(yourSCORE);
    window.alert("YOUR SCORE: ", yourSCORE);

}

//load Question
function setQUESTION(setQUEST, i)
{
    
    buttonPUSHED = false;
    console.log("welcome to set Question")
    qNUM.textContent = "QUESTION:  " + (i+1);
    textQUEST.textContent = setQUEST.questionTXT;
    choiceA.style.visibility = "visible";
    choiceB.style.visibility = "visible";
    choiceC.style.visibility = "visible";
    choiceD.style.visibility = "visible";
    choiceA.textContent = setQUEST.choicesABCD[0];
    choiceB.textContent = setQUEST.choicesABCD[1];
    choiceC.textContent = setQUEST.choicesABCD[2];
    choiceD.textContent = setQUEST.choicesABCD[3];
    
}

    //current Question++
    //render the question and multiple choices to the page
    //btn1.textConent = 


// CheckAnswer

function checkANSWER(correct, attempt)
{
    console.log(correct)
    if (attempt == correct.correctAnswer)
    {
        totalRIGHT++
        if (streakMULT < 5)
        {    
            streakMULT++;
        }
    }
    else{
        streakMULT = 1;
        totalWRONG++;
        timeLEFT = timeLEFT - 5;
        console.log(timeLEFT)
    }
    
    if (maxQUEST-1 == thisQUEST)
    {
        endGAME();
    }
    else{
        thisQUEST++;
        setQUESTION(questionFORMAT[thisQUEST], thisQUEST)
    }

}
    //check which button user clicked
    //COMPARE THE CHOICE WITH CORRECT ANSWER
    //act on right/wrong answer
    //loadQuestion()

function tallySCORE()
{
    console.log(timeBONUS);
    console.log(totalRIGHT);
    console.log(totalWRONG);
    console.log(streakMULT);
    var final;
    return  final = (((totalRIGHT * 10) + (timeBONUS * 5)) * streakMULT) - (totalWRONG * 25);

    
}

//endGame
    //called at end of timer of when current question ># questions
    // cancel timer

function endGAME()
{   
    winGAME = true;
    thisQUEST = 0;

    lastSCORE = tallySCORE();
    console.log("last score is ", lastSCORE)

    highSCORE = checkSCORE(lastSCORE);

    if (highSCORE == true)
    {
        youWIN(lastSCORE);
    }
    else
    {
        window.alert("NO HIGHSCORE")
    }

    topALL = localStorage.setItem('topALL', topSCORES)
    topALL = localStorage.setItem('topALL', topNAMES)

}

function checkSCORE(playerSCORE)
{
    var i = topSCORES.length-1;

    if(playerSCORE > topSCORES[9])
    {
        while(playerSCORE > topSCORES[i])
        {
            console.log("Check Score: ", topSCORES[i])
            i--;
            if (playerSCORE <= topSCORES[i])
            {
                nameINPUT = window.prompt("Give Initials");
                topNAMES.splice(i+1, 0, nameINPUT);
                topSCORES.splice(i+1, 0, playerSCORE);
                topNAMES.pop();
                topSCORES.pop();
                console.log(topSCORES);
                console.log(topNAMES);
                return true;
            }
            if (i == 0)
            {
                nameINPUT = window.prompt("Give Initials");
                topNAMES.splice(i, 0, nameINPUT);
                topSCORES.splice(i, 0, playerSCORE);
                topNAMES.pop();
                topSCORES.pop();
                console.log(topSCORES);
                console.log(topNAMES);
                return true;
            }
        }
    }
    return false;
}

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