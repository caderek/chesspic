import { Style } from "./types";
import "./style.css";
import Board from "./board/Board";
import styles from "./board/styles-board";
import Game from "./game/Game";
import pgns from "./test-data/pgns";
import createSimpleGIF from "./gif/createSimpleGIF";
import { compressPGN, decompressPGN } from "./game/PGNHelpers";

const $app = document.querySelector<HTMLImageElement>("#app");

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const play = async (board: Board, pgn: string | null, interval: number) => {
  const game = new Game();

  if (pgn) {
    game.loadPGN(pgn);
  }

  // game.goto(28);
  await board.render(game.getBoardData());

  while (true) {
    const move = game.next();

    if (!move) {
      break;
    }

    await delay(interval);
    await board.render(game.getBoardData(), move);
  }

  await delay(interval * 3);
  play(board, pgn, interval);
};

const createDownloadLink = async (pgn: string, style: Style) => {
  const file = await createSimpleGIF(pgn, style, 720);
  const link = document.createElement("a");
  link.innerText = "DOWNLOAD";
  link.setAttribute("href", URL.createObjectURL(file));
  link.setAttribute("download", file.name);
  return link;
};

const main = async () => {
  const style = styles.avocado;

  const hash = window.location.hash;
  const pgn = hash === "" ? null : decompressPGN(hash.slice(1));
  const board = new Board(8).setStyle(style).setSize(720).showBorder();

  window.location.hash = "#alala";

  $app?.appendChild(board.canvas);

  play(board, pgn, 1000);

  // createDownloadLink(pgns[0], style).then((link) => {
  //   document.body.appendChild(link);
  // });
};

main();
