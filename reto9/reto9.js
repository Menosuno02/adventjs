/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const y = board.findIndex((row) => row.includes("@"));
  const x = board[y].indexOf("@");

  const moves = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  const [dy, dx] = moves[mov];
  const [ny, nx] = [y + dy, x + dx];

  if (ny < 0 || ny >= board.length || nx < 0 || nx >= board[0].length)
    return "crash";
  return { o: "crash", "*": "eat" }[board[ny][nx]] ?? "none";
}
