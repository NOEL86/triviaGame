
var timeLeft = 30;
var movieTrivia = {
    questions: ['Who plays Batman in the Dark Night Series?', 'What two movies do Julia Roberts and Richard Gere costar in?', 'What toy store does Tom Hanks play chopsticks on the giant piano in?',
        'Who was the villian in Toy Story 1', 'Why was the old man thrown out of the window in The Emporers New Groove?', 'What movie won the Oscar for Best Picture in 2018?',
        'What is the name of the Cafe Ruth and Idgie open in Fried Green Tomatoes', 'Tracy Turnblad in Hairspray lives in what city?', 'Why is Delores, Whoopie Goldberg in Sister Act, hiding in a convent?',
        'Who had it coming in the musical Chicago?']
}

//start game by clicking button that says start
//30 second timer starts running

var correct = 0;
var incorrect = 0;
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var answers = [];


var q1 = {
    question: 'Who plays Batman in the Dark Night Series?',
    options: ['Val Kilmer', 'George Clooney', 'Christian Bale', 'Michael Keaton'
    ],

};


var q2 = {
    question: 'What two movies do Julia Roberts and Richard Gere costar in?',
    options: ['Steel Magnolias and Sleeping With The Enemy', 'Charlie Wilsons War and A Normal Heart',
        'Pretty Woman and Runnaway Bride', 'Shall We Dance and An Officer and A Gentleman'],
    answers: [false, false, true, false]
};

var q3 = {
    question: 'What toy store does Tom Hanks play chopsticks on the giant piano in?',
    options: ['FAO Shwarz', 'Toys R Us', 'Lark Toys', 'Big Toys'],
    answers: [true, false, false, false]
};
q3.options[0] = true;
//q3.option[1,2,3] = false;
var q4 = {
    question: 'Who was the villian in Toy Story 1',
    options: ['The Aliens', 'Sid', 'Andy', 'The Prospector'],
    answers: [false, true, false, false]
};

var q5 = {
    question: 'Why was the old man thrown out of the window in The Emporers New Groove?',
    options: ['He talks too much', 'He asked for money', 'He disobeyed the law', 'He threw off the Emporers Groove'],
    answers: [false, false, false, true]
};

var q6 = {
    question: 'What movie Guillermo Del Toro film won the Oscar for Best Picture in 2018?',
    options: ['The Shape of Water', 'Pans Laborynth', 'Hell Boy', 'Pacific Rim'],
    answers: [true, false, false, false]
};
var q7 = {
    question: 'What is the name of the Cafe Ruth and Idgie open in Fried Green Tomatoes',
    options: ['Ruths Cafe', 'Idgie and Ruths Cafe', 'The Big George Cafe', 'The Whistle Stop Cafe'],
    answers: [false, false, false, true]
};

var q8 = {
    question: 'Tracy Turnblad in Hairspray lives in what city?',
    options: ['Chicago', 'Baltimore', 'Boston', 'New York'],
    answers: [false, true, false, false]
};

var q9 = {
    question: 'Why is Delores, Whoopie Goldberg in Sister Act, hiding in a convent?',
    options: ['She is in Witness Protection', 'She committed a crime', 'She wanted a new life', 'She has amnesia'],
    answers: [true, false, false, false]
};

var q10 = {
    question: 'Who had it coming in the musical Chicago?',
    options: ['Ezekiel Young from Salt Lake City', 'Al Lipshits', 'Wilbur', 'Billy Flinn'],
    answers: [true, true, true, false]
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
            $(".container").prepend("<img src=assets/loseimage.png/>");
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
    q1.options[3] = true;

    $(".options").on("click", function () {
        if (options == true) {
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
