var intervalId;
var countdownId;
var correct = 0;
var wrong = 0;
var timer = 15;
var count = 0;

var questions = [
             {  q: "question", 
             	a1: "right", 
             	a2: "wrong", 
             	a3: "wrong", 
             	a4: "wrong", 
             	correct: "a1"},
             {	q: "question2", 
             	a1: "wrong",
             	a2: "wrong", 
             	a3: "wrong", 
             	a4: "right", 
             	correct: "a4"},
             {	q: "question3", 
             	a1: "wrong",
             	a2: "wrong", 
             	a3: "right", 
             	a4: "wrong", 
             	correct: "a3"},
             {	q: "question4", 
             	a1: "wrong",
             	a2: "right", 
             	a3: "wrong", 
             	a4: "wrong", 
             	correct: "a2"},
             {	q: "question5", 
             	a1: "wrong",
             	a2: "right", 
             	a3: "wrong", 
             	a4: "wrong", 
             	correct: "a2"},
             { q: "Game Over",
             	a1: "You got " + correct + " questions correct.",
             	a2: "",
             	a3: "You got " + wrong + " questions wrong.",
             	a4: ""}
             ];

$(".start").on("click" , function(event){
    event.preventDefault();
question();
countdown();
updateTimer();
final();
})	

$(".skip").on("click", function(event){
	event.preventDefault();
question();
countdown();
updateTimer();
wrong++;
console.log(wrong);
})

$(".guess").on("click" , function(event){
        response = $(this).attr("value");
        console.log(response)
        console.log(count)
        console.log(questions)
        console.log(questions[count])
    if (response == questions[count].correct) {
            correct++;
            console.log(correct)
        	alert("That is correct!");
        }
    else {
    	wrong++;
    	console.log(wrong)
    	alert("That is wrong! The correct answer is " + correct)
    	}
        timerSet = 15;
question();
})

function countdown(){
    countdownId = setInterval(timeUp, 15000);
  	intervalId = setInterval(updateTimer, 1000);
}

function resetTimer(){
	countdownId = setInterval(timeUp, 15000);
	timer= 15;
}

function timeUp(){
	$(".answer").html(questions[5]);
	wrong++;				
	clearInterval(intervalId);
}

function updateTimer(){
	timer --;
	if (timer < 0){
		resetTimer();				
	}
	else {
	 $(".timer").html(timer);
	}
}

function question(){
    $(".question").html(questions[count].q);
    $(".button1").html(questions[count].a1);
    $(".button2").html(questions[count].a2);
    $(".button3").html(questions[count].a3);
    $(".button4").html(questions[count].a4);
    count++;
	timeUp();
	
}

function final(){
	if (questions = 5){
    $(".final-screen").html("<p>Correct Answers: " + correct + "</p>");
    $(".final-screen").append("<p>Incorrect Answers: " + wrong + "</p>");    
    }
}