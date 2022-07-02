function printHighScores() {

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function(a,b) {
        return b.score - a.score;
    })

    highscores.forEach(score => {
        //create li for each score
        var scoreLI = document.createElement("li");
        scoreLI.textContent = score.initials + " - " + score.score;

    var olEl = document.getElementById("highscores");
    olEl.appendChild(scoreLI);  
    });
}

printHighScores();