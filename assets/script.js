
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
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];




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


$("#button").on("click", function () {
    $("#button").hide();
    console.log("Button hidden");
    startGame();
    countdown();


    var timerId = setInterval(countdown,
        1000);
    function countdown() {

        if (timeLeft == 0) {
            clearTimeout(timerId);
            alert("Sorry Time's Up!")
            $(".container").hide();
            $(".container").prepend("<img src= 'assets/loseimage.png'/>");
        } else {
            secondsLeft = $("#time");
            timeLeft--;
            $("#time").text(timeLeft);
            console.log(timeLeft);

        }
        // function restart() {
        //     timeLeft = setInterval(countdown.secondsLeft, 1000);
        // }
        // function stop() {
        //     clearInterval(timerId);
        // }

    }
})



// first question appears 
function startGame() {
    $("#question").text(q1.question)
    $("#option1").text(q1.options[0])
    $("#option2").text(q1.options[1])
    $("#option3").text(q1.options[2])
    $("#option4").text(q1.options[3])


    $(".options").on("click", function () {
        if (userGuess == q1.options[2]) {
            alert("Correct");
        }
        else {
            alert("Incorrect");
        }

    })

}

//4 Options are selectable on the screen
//A select box appears over the item that is scrolled over

//If the correct answer is selected, a picture of the movie appears
//on a page that says Correct!

//If the correct answer is NOT selected, a picture of the correct 
//movie appears on the page and says the correct answer was...

//A round has 10 questions
//At the end of the round the game tells you how many out of 10 
//you got correctly
