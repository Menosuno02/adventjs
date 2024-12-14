/** @param {string[]} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  const pos = [0, 0];
  const moves_map = {
    R: [1, 0],
    L: [-1, 0],
    U: [0, 1],
    D: [0, -1],
  };
  const reverse = { R: "L", L: "R", U: "D", D: "U" };
  const usedMoves = new Set();
  let modifier = "";

  for (let move of moves) {
    if ("*!?".includes(move)) {
      modifier = move;
      continue;
    }

    let [moveX, moveY] = moves_map[move];
    if (modifier === "*") [moveX, moveY] = [moveX * 2, moveY * 2];
    if (modifier === "!") {
      [moveX, moveY] = [-moveX, -moveY];
      move = reverse[move];
    }
    if (modifier === "?" && usedMoves.has(move)) [moveX, moveY] = [0, 0];

    if (moveX || moveY) usedMoves.add(move);
    pos[0] += moveX;
    pos[1] += moveY;
    modifier = "";
  }

  return pos[0] === 0 && pos[1] === 0 ? true : pos;
}
