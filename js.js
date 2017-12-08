var intervalId;
var countdownId;
var correct = 0;
var wrong = 0;
var skipped = 0;
var timer = 15;
var count = 0;
var correctanswer = "";

var questions = [
             {  q: "When was I born?", 
             	a1: "1983", 
             	a2: "1985", 
             	a3: "1984", 
             	a4: "1982", 
             	correct: "a1"},
             {	q: "What is my favorite football team?", 
             	a1: "Cowboys",
             	a2: "Texans", 
             	a3: "Rams", 
             	a4: "Chiefs", 
             	correct: "a4"},
             {	q: "What is the oddest job I've had?", 
             	a1: "professional rock climber",
             	a2: "professional dog walker", 
             	a3: "professional video gamer", 
             	a4: "professional poker player", 
             	correct: "a3"},
             {	q: "Where am I originally from?", 
             	a1: "New York City",
             	a2: "Kansas City", 
             	a3: "Dallas", 
             	a4: "Denver", 
             	correct: "a2"},
             {	q: "What grade am I going to get on this project?", 
             	a1: "B",
             	a2: "A", 
             	a3: "C", 
             	a4: "F", 
             	correct: "a2"},
             ];

$(".start").on("click" , function(event){
    event.preventDefault();
question();
countdown();
resetTimer();
updateTimer();
})	

$(".skip").on("click", function(event){
	event.preventDefault();
count++;
skipped++;
final();
question();
countdown();
updateTimer();	
})

$(".guess").on("click" , function(event){
        response = $(this).attr("value");
        
    if (response == questions[count].correct) {
            correct++;
        	alert("That is correct!");
        }
    else {
    	wrong++;
    	alert("That is wrong!")
    	}
        timerSet = 15;
    count++;
final();
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
	$(".answer").html(questions[4]);
		clearInterval(intervalId);
}

function updateTimer(){
	timer --;
	if (timer < 0){
		skipped++;	
		count++;
		final();
		question();
				}
	else {
	 $(".timer").html(timer);
	}
}

function question(){
	console.log(count);
    $(".question").html(questions[count].q);
    $(".button1").html(questions[count].a1);
    $(".button2").html(questions[count].a2);
    $(".button3").html(questions[count].a3);
    $(".button4").html(questions[count].a4);
    $(".questionnumber").html("Question Number " + (count+1) + " of 5!")  
	timeUp();
	resetTimer();
	countdown();
	
}

function final(){
	if (count == 5){
		count =0;
    $(".final-screen").html("<p>Correct Answers: " + correct + "</p>");
    $(".final-screen").append("<p>Incorrect Answers: " + wrong + "</p>"); 
    $(".final-screen").append("<p>Skipped Answers: " + skipped + "</p>");   
    }
}

