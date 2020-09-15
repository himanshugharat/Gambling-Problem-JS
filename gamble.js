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
let noOfWInDays = 0;
let noOfLostDays = 0;
let count = 0;
let winArr = [];
let lossArr = [];
let play = true;
let calculativeStakeLoss = stake * (50 / 100);
let calculativeStakeWin = calculativeStakeLoss + STAKE;
/*
 *@description : To get the stake after the bet.
 *@return      : stake
 */
function gambleChecker() {
  stake = 100;
  let noOfWins = 0;
  let noOfLost = 0;
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
    winArr[count++] = noOfWins;
    lossArr[count++] = noOfLost;
  } else {
    noOfLostDays += 1;
    winArr[count++] = noOfWins;
    lossArr[count++] = noOfLost;
  }
  console.log("done for day ");
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
/**
 * @description: luckyDay() to find the lucky and unlucky doy of the months
 * @return :console log of lucky and unlucky day
 */
function luckyDay() {
  let arr = winArr;
  arr.sort((a, b) => b - a);
  let daywin = winArr.indexOf(arr[0]);
  console.log("the most luckiest day is" + daywin+1);
  let brr = lossArr;
  arr.sort((a, b) => b - a);
  let dayloss = lossArr.indexOf(brr[0]);
  console.log("the most unlucky day is" + dayloss);
}
/**
 * @description: CheckNextMonth() to find if the player want to play or not
 * @return :the gambler for next month
 */
function checkNextMonth() {
  var readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question("do you want to continue if yes enter 1", (name) => {
    if (name == 1) {
      play = true;
      for (let days = 0; days < 20; days++) {
        play ? gambleChecker() : console.log("exit");
      }
      console.log(monthlyGambled());
      console.log(luckyDay());
      checkNextMonth();
    }
  });
}
for (let days = 0; days < 20; days++) {
  play ? gambleChecker() : console.log("exit");
}
console.log(monthlyGambled());
console.log(luckyDay());
checkNextMonth();
