// TODO: What does 'this' refer to?
// Rock, Paper Scissors Game
const rpsValues = ['R','P','S'];
const rpsWords = ['Rock','Paper','Scissors'];
let userChoice = 0;
let compChoice = 0;
let keepPlaying = true;
let messageUser = '', messageComp = '', messageResults = '';
let messageStats = '', tempString = '';

const rockPaperScissors = {
   timesChosenRPS : [0, 0, 0],
   timesChosenRPS_Comp : [0, 0, 0],
   winsCount : 0,
   tiesCount : 0,
   lossesCount : 0,
   playGame : function () {
      do{
         let response = window.prompt("Select Rock(r), Paper(p) or Scissors(s):");
         if (response === null)
            break;
         tempString = response.toUpperCase();
         if (tempString == 'R' ) {
            userChoice = 0;
            messageUser = `You chose:  ${rpsWords[0]}.`;
            this.timesChosenRPS[0] += 1;
         }
         else if (tempString == 'P' ) {
            userChoice = 1;
            messageUser = `You chose:  ${rpsWords[1]}.`;
            this.timesChosenRPS[1] += 1;
         }
         else if (tempString == 'S' ) {
            userChoice = 2;
            messageUser = `You chose:  ${rpsWords[2]}.`;
            this.timesChosenRPS[2] += 1;
         }
         else {
            window.alert(`You chose an invalid entry.  Please try again.`);
            continue;
         }
         // Get Computer's Choice
         getComputerResponse();
         // Calc WHO won
         if (userChoice===compChoice) {
            this.tiesCount++;
            messageResults = `You TIED!`;
         }
         else if (userChoice===0) {
            if (compChoice===1) {
               this.lossesCount++;
               messageResults = `You Lost...  Paper Covers Rock.`;
            }
            else {
               this.winsCount++;
               messageResults = `You WON!!!  Rock CRUSHES Scissors!`;
            }
         }
         else if (userChoice===1) {
            if (compChoice===0) {
               this.winsCount++;
               messageResults = `You WON!!!  Paper Covers Rock!`;
            }
            else {
               this.lossesCount++;
               messageResults = `You Lost...  Scissors Cut Up Paper.`;
            }
         }
         else if (userChoice===2) {
            if (compChoice===0) {
               this.lossesCount++;
               messageResults = `You Lost...  Rock CRUSHES Scissors.`;
            }
            else {
               this.winsCount++;
               messageResults = `You WON!!!  Scissors Cut Up Paper!`;
            }
         }
         // Stats Message
         let percentage = 0;
         let choicesCount = this.winsCount + this.lossesCount + this.tiesCount;
         if ((this.winsCount+this.lossesCount) === 0)
            percentage = 0;
         else
            percentage = (this.winsCount / (this.winsCount+this.lossesCount)) * 100;
         let calcPercentage = (Math.round(percentage*100)/100).toFixed(0);
         messageStats = `STATS:  You Won ${this.winsCount} of ${this.winsCount+this.lossesCount} with ${this.tiesCount} Ties (${calcPercentage}%)\n---------`
         percentage = (this.timesChosenRPS[0] / choicesCount) * 100;
         calcPercentage = (Math.round(percentage*100)/100).toFixed(0);
         let percentage2 = (this.timesChosenRPS[1] / choicesCount) * 100;
         let calcPercentage2 = (Math.round(percentage2*100)/100).toFixed(0);
         let percentage3 = (this.timesChosenRPS[2] / choicesCount) * 100;
         let calcPercentage3 = (Math.round(percentage3*100)/100).toFixed(0);
         let messageChoicesUser = `- Your Choices:  Rock:${this.timesChosenRPS[0]} (${calcPercentage}%), Paper:${this.timesChosenRPS[1]} (${calcPercentage2}%), Scissors:${this.timesChosenRPS[2]} (${calcPercentage3}%)`
         percentage = (this.timesChosenRPS_Comp[0] / choicesCount) * 100;
         calcPercentage = (Math.round(percentage*100)/100).toFixed(0);
         percentage2 = (this.timesChosenRPS_Comp[1] / choicesCount) * 100;
         calcPercentage2 = (Math.round(percentage2*100)/100).toFixed(0);
         percentage3 = (this.timesChosenRPS_Comp[2] / choicesCount) * 100;
         calcPercentage3 = (Math.round(percentage3*100)/100).toFixed(0);
         let messageChoicesComp = `- Comp Choices:  Rock:${this.timesChosenRPS_Comp[0]} (${calcPercentage}%), Paper:${this.timesChosenRPS_Comp[1]} (${calcPercentage2}%), Scissors:${this.timesChosenRPS_Comp[2]} (${calcPercentage3}%)`

         // Show Results
         window.alert(`${messageUser}\n${messageComp}\n\n${messageResults}\n\n${messageStats}\n${messageChoicesUser}\n${messageChoicesComp}`);

         // Play Again?
         response = window.confirm("Do you want to play again?");
         if (response == true)
            continue;
         else
            break;
      }
      while(keepPlaying);
    }
};

function getComputerResponse() {
   compChoice = Math.floor(Math.random()*3);
   if (compChoice === 0) {
      messageComp = `Computer chose:  ${rpsWords[0]}.`;
      rockPaperScissors.timesChosenRPS_Comp[0] += 1;
   }
   else if (compChoice === 1) {
      messageComp = `Computer chose:  ${rpsWords[1]}.`;
      rockPaperScissors.timesChosenRPS_Comp[1] += 1;
   }
   else if (compChoice === 2) {
      messageComp = `Computer chose:  ${rpsWords[2]}.`;
      rockPaperScissors.timesChosenRPS_Comp[2] += 1;
   }
}

rockPaperScissors.playGame();
