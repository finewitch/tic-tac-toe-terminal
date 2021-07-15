import colors from "colors";
import { WELCOME_MSG } from "./consts.js";
import { welcomePrompt, prompt } from "./prompts.js";
import { playerTurn } from "./player-turn.js";
import { getPlayer, player } from "./utils.js";

//helps to indicate the first move
let gameStarted = false;

const stdin = process.stdin;
stdin.setEncoding("utf-8"); //sets input as string

welcomePrompt(colors.yellow.bold, WELCOME_MSG);

stdin.on("data", function (key) {
  if (!gameStarted) {
    playerTurn(key, player.current);
    gameStarted = !gameStarted;
    prompt(colors.yellow.bold, `Your turn player: ${player.previous}`);
  } else {
    const player = getPlayer(); //gets player state {current, previous} and shifts turns
    const successfulTurn = playerTurn(key, player.current);
    prompt(
      colors.yellow.bold,
      `Your turn player: ${successfulTurn ? player.previous : player.current}`
    );
  }
});
