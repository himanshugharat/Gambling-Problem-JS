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
//assigned variables
let stake = 100;
/*
 *@description : To get the stake after the bet.
 *@return      : stake
 */
function gambleChecker() {
  Math.random() > 0.5 ? (stake += 1) : (stake -= 1);
  return stake;
}
console.log(gambleChecker());
