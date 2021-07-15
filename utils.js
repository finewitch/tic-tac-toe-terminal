import { BOARD, WIN_COMBINATIONS } from "./consts.js";

export let player = {
  current: "X",
  previous: "Y",
};
export const validateInput = (input) =>
  /^[1-9]$/.test(parseInt(input)) ? parseInt(input) : false;

export const validatePosition = (position, board) =>
  board[position] === " " ? true : false;

export const getPlayer = () => {
  player.current === "X"
    ? ((player.current = "Y"), (player.previous = "X"))
    : ((player.current = "X"), (player.previous = "Y"));

  return { current: player.current, previous: player.previous };
};

export function checkIfWin(player) {
  const isMarked = (currentValue) => BOARD[currentValue] === player;
  let result = false;
  for (let i = 0; i < WIN_COMBINATIONS.length; i++) {
    const res = WIN_COMBINATIONS[i].every(isMarked);
    if (res) {
      result = res;
      break;
    }
  }
  return result;
}

export function checkIfDraw() {
  return Object.values(BOARD).every((val) => val !== " ");
}
