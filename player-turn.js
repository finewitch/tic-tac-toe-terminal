import {
  validateInput,
  validatePosition,
  getPlayer,
  checkIfWin,
  checkIfDraw,
} from "./utils.js";
import { prompt, printBoard } from "./prompts.js";
import { BOARD } from "./consts.js";
import colors from "colors";

export function playerTurn(input, player) {
  const validInput = validateInput(input);
  if (!validInput) {
    prompt(colors.red.bold, "Invalid input. Try again");
    getPlayer(); //reverse the turn change that happened at the begining in order to maintain the right players turn
    return false;
  }
  const validPosition = validatePosition(validInput, BOARD);
  if (!validPosition) {
    prompt(colors.brightMagenta.bold, "Position occupied! Try again");
    getPlayer(); //reverse the turn change that happened at the begining in order to maintain the right players turn
    return false;
  }
  printBoard(validInput, player);
  const winnerFound = checkIfWin(player);
  const draw = checkIfDraw();
  if (winnerFound) {
    prompt(
      colors.rainbow,
      `FOUND A WINNER !! CONGRATULATIONS PLAYER : ${player}`
    );
    process.exit();
  }

  if (draw) {
    prompt(colors.red.bold, `Its a draw. Try again!`);
    process.exit();
  }

  return true;
}
