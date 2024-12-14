/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  reindeer.sort();
  stables.sort();
  let moves = 0;
  for (let i = 0; i < reindeer.length; i++) {
    moves +=
      Math.max(reindeer[i], stables[i]) - Math.min(reindeer[i], stables[i]);
  }
  return moves;
}
