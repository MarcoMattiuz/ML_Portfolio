let game = document.getElementById("game");
let vw = window.screen.width;

document.addEventListener("load", () => {
    vw = window.screen.width;
    console.log("vw inside------------>"+vw);
});


console.log("vw------------>"+vw);

if(vw<=750){
    game.src = "BallGame/BallGameML2LowRes/game.html";
}