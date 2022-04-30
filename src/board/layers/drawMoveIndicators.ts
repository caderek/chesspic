import { Solid, LoadImage } from "./../../types";
import { Move } from "chess.js";
import { Style, SquareStyle } from "../../types";
import drawRectangle from "./drawRectangle";
import { changeHSL } from "../../utils/colors";

const FILES = "abcdefghijklmnopqrstuwvxyz";

const notationToXY = (notation: string, flipped: boolean, tiles: number) => {
  const x = FILES.indexOf(notation[0]);
  const y = Number(notation[1]) - 1;

  return [flipped ? tiles - x - 1 : x, flipped ? y : tiles - y - 1];
};

const drawMoveIndicators = async (
  ctx: CanvasRenderingContext2D,
  move: Move,
  squareSize: number,
  { dark, light, moveIndicator }: Style,
  borderWidth: number,
  tiles: number,
  flipped: boolean,
  margin: number,
  loadImage: LoadImage
) => {
  const [x0, y0] = notationToXY(move.from, flipped, tiles);
  const [x1, y1] = notationToXY(move.to, flipped, tiles);

  const [fromX, fromY, toX, toY] = [x0, y0, x1, y1].map(
    (v) => v * squareSize + borderWidth
  );

  let fromStyle;
  let toStyle;

  if (moveIndicator.hueShift !== 0) {
    const newLight: Solid = {
      type: "solid",
      data: {
        color: light.data.color
          ? changeHSL(light.data.color, moveIndicator.hueShift)
          : "#00ff0055",
      },
    };

    const newDark: Solid = {
      type: "solid",
      data: {
        color: dark.data.color
          ? changeHSL(dark.data.color, moveIndicator.hueShift)
          : "#00ff0055",
      },
    };

    fromStyle = (x0 + y0) % 2 === 0 ? newLight : newDark;
    toStyle = (x1 + y1) % 2 === 0 ? newLight : newDark;
  } else {
    fromStyle = {
      type: "solid",
      data: { color: moveIndicator.color },
    } as SquareStyle;
    toStyle = fromStyle;
  }

  drawRectangle(
    ctx,
    squareSize,
    squareSize,
    fromX,
    fromY + margin,
    fromStyle,
    loadImage
  );
  drawRectangle(
    ctx,
    squareSize,
    squareSize,
    toX,
    toY + margin,
    toStyle,
    loadImage
  );
};

export default drawMoveIndicators;
