
var timeLeft = 10;
var movieTrivia = {
    questions: ['What is Chandlers middle name?', 'What does Joey call his Adams Apple?', 'How does Pheobe run?',
        'What is in Monicas hall closet?', 'Who smoked pot in college?', 'Who is Emma?',
        'Who will not try the breast milk?', 'Which character starts the series in a wedding dress?', 'Who pees on Monica after a jelly fish sting?',
        'How does the show end?']
}

//start game by clicking button that says start
//30 second timer starts running

var correct = 0;
var incorrect = 0;

var usersChoice;
// var wrongAnswer1 = $("#wrong1");
// var correctAnswer1 = $("#correct1");
var timeOut = $("#timeOut");
var currentIndex = 0;
var timerId;
var timeOutId;
var answer = [];

var q1 = {
    question: 'What is Chandlers middle name?',
    options: ['Gene', 'Muriel', 'Christian', 'Joey'
    ],
    answer: 'Muriel'

};


var q2 = {
    question: 'What does Joey call his Adams Apple?',
    options: ['Joeys Apple', 'Bump', 'Large Apple',
        'There is no name', 'Manly Neck'],
    answer: 'Joeys Apple'
};

var q3 = {
    question: 'How does Pheobe run?',
    options: ['Fast', 'Slow', 'Stiff', 'Like she is running away from Satan'],
    answer: 'Like she is running away from Satan'
};


var q4 = {
    question: 'What is in Monicas hall closet?',
    options: ['Nothing', 'Ribbons', 'Things that do not fit in a category', 'Towels'],
    answer: 'Things that do not fit in a category'
};

var q5 = {
    question: 'Who smoked pot in college?',
    options: ['Ross', 'Chandler', 'Joey', 'Monica'],
    answer: 'Ross'
};

var q6 = {
    question: 'Who is Emma?',
    options: ['Joeys girlfriend', 'Ross and Rachels baby', 'Chandler and Monicas baby', 'One of Franks triplets'],
    answer: 'Ross and Rachels baby'
};
var q7 = {
    question: 'Who will not try the breast milk?',
    options: ['Ross', 'Carol', 'Joey', 'Monica'],
    answer: 'Ross'
};

var q8 = {
    question: 'Which character starts the series in a wedding dress?',
    options: ['Monica', 'Phoebe', 'Rachel', 'Julie'],
    answer: 'Rachel'
};

var q9 = {
    question: 'Who pees on Monica after a jelly fish sting?',
    options: ['Ross', 'Chandler', 'Joey', 'She pees on herself'],
    answer: 'Chandler'
};

var q10 = {
    question: 'How does the show end?',
    options: ['Monica and Chandler buy a house and move out', 'Rachel moves to Greece', 'Ross dies', 'Joey gets married'],
    answer: 'Monica and Chandler buy a house and move out'
};

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

$("#button").on("click", function () {
    $("#button").hide();
    console.log("Button hidden");
    startGame();
    countdown();


    timerId = setInterval(countdown, 1000);
})

function countdown() {

    if (timeLeft == 0) {
        clearTimeout(timerId);
        $('audio#timeOut')[0].play();
        $(".qBox").hide();
        //setimout for 3secconds
        timeLeft = 10
        timeOutId = setTimeout(function () {
            //increase current index by one
            ++currentIndex
            //display next questions
            //call generate questions again
            generateQuestion()
            timerId = setInterval(countdown, 1000);
        }, 3000)
    } else {
        secondsLeft = $("#time");
        timeLeft--;
        $("#time").text(timeLeft);
        console.log(timeLeft);

    }


}

// for ()
//var for keeping track of what index we are at in the questionArray

// first question appears 
function startGame() {
    generateQuestion();

};

// function stopCountdown() {
//     clearInterval(timerId);
// }
// function restart() {
//     timeLeft = setInterval(countdown.secondsLeft, 1000);
// }


$(".options").on("click", function (event) {
    event.preventDefault();
    var usersChoice = $(this).text().trim()
    console.log(usersChoice);

    //
    for (var i = 0; i < questionArray[currentIndex].options.length; i++) {
    } if (usersChoice == questionArray[currentIndex].answer) {
        console.log(usersChoice);
        $('audio#correct2')[0].play();
        ++correct
        alert("Correct");
        clearTimeout(timerId);
        timeOutId = setTimeout(function () {
            timeLeft = 10
            //increase current index by one
            ++currentIndex
            //display next questions
            //call generate questions again
            generateQuestion()
            timerId = setInterval(countdown, 1000);
        }, 3000)


    } else {
        console.log(usersChoice);
        ++incorrect
        $('audio#wrong1')[0].play();
        clearTimeout(timerId);
        timeOutId = setTimeout(function () {
            timeLeft = 10
            //increase current index by one
            ++currentIndex
            //display next questions
            //call generate questions again
            generateQuestion()
            timerId = setInterval(countdown, 1000);
        }, 3000)

    }

    //no answer was selected correctly
    //go on to next question

})
//
function generateQuestion() {
    $(".iBox").empty();

    $("#question").text(questionArray[currentIndex].question);
    $("#option1").text(questionArray[currentIndex].options[0]);
    $("#option2").text(questionArray[currentIndex].options[1]);
    $("#option3").text(questionArray[currentIndex].options[2]);
    $("#option4").text(questionArray[currentIndex].options[3]);

    $(".qBox").show();

}

if (questionArray[currentIndex].question.length == 10 && clearTimeout == true) {
    $(".qBox").empty();
    $(".iBox").show();
    $("#correct").text(correct);
    $("#wrong").text(incorrect);
    $("#end").style.visible = "visible";

}
// if (questionArray[currentIndex].question)

//4 Options are selectable on the screen
//A select box appears over the item that is scrolled over

//If the correct answer is selected, a picture of the movie appears
//on a page that says Correct!

//If the correct answer is NOT selected, a picture of the correct 
//movie appears on the page and says the correct answer was...

//A round has 10 questions
//At the end of the round the game tells you how many out of 10 
//you got correctly
