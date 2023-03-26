const username =document.getElementById("username");
const saveScoreBtn=document.getElementById("saveScoreBtn");
const finalScore=document.getElementById("finalScore");
const highScores=JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES=5;

finalScore.innerText=mostRecentScore;

username.addEventListener("keyup",()=>{
    saveScoreBtn.disapled=!username.value;
});

saveHighScore=(e)=>{
    e.preventDefault();

    const SCORE ={
        score: mostRecentScore,
        name :username.value,

    };
    highScores.push(score);
    highScores.sort((a,b)=>b.score-a.score);
    highScores.splice(5);

    localStorage.setItem("highScores",JSON.stringify(highScores));
    window.location.assign("/");
};  