let questionsEl = document.querySelector("#quiz-question")
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

   


let allQuestionsObj = [
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
}

var createQuestion = function(targetEl){
        startDiv.classList.add("hide")
        let question = document.createElement("h1");
        question.textContent = allQuestionsObj[counter].question;
        question.setAttribute("data-id", [counter]);
        questionDiv.appendChild(question);
        questionsEl.appendChild(questionDiv);
        console.log(questionDiv)
        createButtons(allQuestionsObj);
}

var createButtons = function(allQuestionsObj){
    allQuestionsObj[questionIndex].choices.forEach(choice => {
        let questionBtns = document.createElement("button");
        questionBtns.textContent = [counter +1] + ".  " + choice;
        questionBtns.setAttribute("data-id", questionIndex);
        questionBtns.className ="btn";
        questionDiv.appendChild(questionBtns);
        questionsEl.appendChild(questionDiv)
        counter++
    })
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