let questionsEl = document.querySelector("#quiz-question")
let questionTitle = document.querySelector("#question-title")
let questionOptions = document.querySelector("#options")
let questionDiv = document.createElement("div");
let timeEl = document.querySelector("#timer")
let startDiv = document.querySelector("#start")
let timer = 75; 
let counter = 0;
let questionIndex =0;



var onClickHandler = function(event){
    let targetEl = event.target.getAttribute("id");

    switch(targetEl){
        case "start-btn":
            startQuiz();
        break;
    }

    // if(targetEl.matches("#start-btn")){
    //     countDown();
    //     createQuestion(targetEl)
    // }
    // else if(targetEl.matches(".btn")){
    //     answerQuestion(targetEl)
    // }
    
        
        // console.log(targetEl)
    }

   


let allQuestions = [
    {
        question: "Common used data types DO not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _______",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to a variable.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugges is: ",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
]

const startQuiz = () => {
    countDown();
    createQuestion();
}

var createQuestion = function(){
        //clear question content
        questionTitle.textContent = "";
        questionOptions.textContent="";

        let title = document.createElement("h3")
        //get currrent Questions from allQuestions array
        let currentQuestion =  allQuestions[counter]
        title.textContent = allQuestions.question;
        questionTitle.append(title);

        currentQuestion.choices.forEach(function (choice, i){

            let questionBtns = document.createElement("button");
            questionBtns.className ="btn";
            questionBtns.setAttribute("value", choice);
            questionBtns.textContent = [i +1] + ".  " + choice;
            questionOptions.append(questionBtns);
        });

}


var answerQuestion = function(targetEl){
    let buttonText = targetEl.textContent.slice(4);
    console.log(buttonText)
    console.log(allQuestionsObj[0].answer)
    
        if(buttonText === allQuestionsObj[0].answer){
            console.log("correct")
        }
        else{
            console.log("incorrect")
        }
        questionIndex++
        createQuestion(allQuestionsObj)
    // }
     
}

var countDown = function(){
    var startTime = setInterval(function(){
        timer--;
        if(timer===0){
            clearInterval(startTime)
            timeEl.textContent = "Times Up!"
        }
        else{
            timeEl.textContent = "Time: " + timer;
        }
    },1000)  
}

document.addEventListener("click", onClickHandler)