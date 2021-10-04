
  
// var rock = function rockClick() {
//     return 1
//  }

//  var rock = 1

//  console.log(rock)
// var paper =  function paperClick(){
//     return 2
// }

// var paper = 2
// console.log(paper)
// var scissors = function scissorsClick(){
//     return 3
// }

// var scissors = 3
// console.log(scissors)



// Game 
rock = 1;
paper = 2;
scissors = 3;

var gamer  = rock

min = 1
max = 3

if ( rock || paper || scissors) {
 var computer = Math.floor(Math.random() * (max - min + 1) + min)
    if ( computer === 1) {
        console.log("Computer chose Rock")
    } else if ( computer === 2) {
        console.log("Computer chose Paper")
    } else {
        console.log("Computer chose Scissors")
    }

    
    if ( gamer === computer ) {
        console.log("It`s a Tie !")     
    } else if ( gamer > computer ) { 
        console.log("Scissors cut Paper")
    } else if ( gamer < computer ) {
        console.log("Paper covers Rock")
    } else if ( gamer > computer ) {
        console.log("Rock smash scissors")
    }
        
}