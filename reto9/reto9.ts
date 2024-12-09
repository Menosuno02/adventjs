type Space = "·" | "@" | "*" | "o";
type Board = Space[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
  const y = board.findIndex((row) => row.includes("@"));
  const x = board[y].indexOf("@");

  const moves = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  const [dy, dx] = moves[mov];
  const [ny, nx] = [y + dy, x + dx];

  if (ny < 0 || ny >= board.length || nx < 0 || nx >= board[0].length)
    return "crash";

  const symbol: Record<Space, Result> = {
    o: "crash",
    "*": "eat",
    "@": "crash",
    "·": "none",
  };
  return symbol[board[ny][nx]];
}
