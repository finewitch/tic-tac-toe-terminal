import { BOARD } from "./consts.js";
import colors from "colors";
export const welcomePrompt = (color, message) =>
  console.log(
    color(
      `${message}` +
        `\n` +
        `                              1 | 2 | 3 \n` +
        `                              4 | 5 | 6 \n` +
        `                              7 | 8 | 9 \n`
    )
  );

export const prompt = (color, message) => console.log(color(message));

export const getFormattedBoard = (BOARD) => {
  const board = Object.keys(BOARD);
  const formattedBoard = board.map((square, index, board) => {
    if ((index === 2) | (index === 5))
      return ` ${BOARD[square]}\n                           `;
    if (index < board.length - 1) {
      return ` ${BOARD[square]} |`;
    }
    return ` ${BOARD[square]}`;
  });
  formattedBoard.unshift(`                           `);
  return formattedBoard.join("");
};

export function printBoard(position, mark) {
  BOARD[position] = mark.toUpperCase();
  console.log(colors.green.bold(getFormattedBoard(BOARD)));
}
