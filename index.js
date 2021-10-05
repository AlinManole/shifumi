
var rock;
function rockClick() {
    rock = 1
    clickButon();
}

var paper;
function paperClick(){
    paper = 2
    clickButon();
}

var scissors;
function scissorsClick(){
    scissors = 3
    clickButon();
}



function clickButon() {

    var min = 1
    var max = 3
    if ( rock || paper || scissors) {
        var computer = Math.floor(Math.random() * (max - min + 1) + min)
        if ( computer === 1) {
            console.log("Computer chose Rock")
        } else if ( computer === 2) {
            console.log("Computer chose Paper")
        } else {
            console.log("Computer chose Scissors")
        }
        
        var gamerChoice
           
        if ( gamerChoice === computer ) {
            console.log("It`s a Tie !")     
        } else if ( gamerChoice > computer ) { 
            console.log("Scissors cut Paper")
        } else if ( gamerChoice < computer ) {
            console.log("Paper covers Rock")
        } else if ( gamerChoice > computer ) {
            console.log("Rock smash scissors")
        }
            
    } //global if 


} //clickButon close 