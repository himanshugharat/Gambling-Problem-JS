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
let stake = STAKE;
let calculativeStakeLoss = stake * (50 / 100);
let calculativeStakeWin = calculativeStakeLoss + STAKE;
/*
 *@description : To get the stake after the bet.
 *@return      : stake
 */
function gambleChecker() {
  Math.random() > 0.5 ? (stake += 1) : (stake -= 1);
  return stake;
}
while (stake > calculativeStakeLoss && stake < calculativeStakeWin) {
  console.log(gambleChecker());
}
