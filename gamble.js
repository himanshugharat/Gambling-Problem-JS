/*
 *Execution: default node cmd>node gambler.js
 *Purpose  : To simulate the gamblers month earnings
 *@files   : gambler.js
 *@overview: Gambler simulation of his gambling
 *@author  : Himanshu Gharat
 *@verson  : 1.0
 *@since   : 14-09-2020
 */
//assigned constant
const BET = 1;
const STAKE = 100;
//assigned variables
let stake = 100;
let noOfWins = 0;
let noOfLost = 0;
let noOfWInDays = 0;
let noOfLostDays = 0;
let calculativeStakeLoss = stake * (50 / 100);
let calculativeStakeWin = calculativeStakeLoss + STAKE;
/*
 *@description : To get the stake after the bet.
 *@return      : stake
 */
function gambleChecker() {
  stake = 100;
  while (stake > calculativeStakeLoss && stake < calculativeStakeWin) {
    let result = Math.random();
    if (result > 0.5) {
      stake += 1;
      noOfWins += 1;
    } else {
      stake -= 1;
      noOfLost += 1;
    }
  }
  if (noOfWins > noOfLost) {
    noOfWInDays += 1;
  } else {
    noOfLostDays += 1;
  }
  console.log("done for day " + noOfLostDays);
}
/**
 * @description: monthlyGambled() to find the total months win or lost amount
 * @return :console log of Amount
 */
function monthlyGambled() {
  noOfWInDays > noOfLostDays
    ? console.log(
        `total money won ${noOfWInDays}days by${
          calculativeStakeLoss * noOfWInDays
        }`
      )
    : console.log(
        `total money lost ${noOfLostDays} days by ${
          calculativeStakeLoss * noOfLostDays
        }`
      );
}
for (let days = 0; days < 20; days++) {
  gambleChecker();
}
console.log(monthlyGambled());
