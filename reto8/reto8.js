/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  const numLanes = indices.length;
  let race = "";
  for (let i = 1; i <= numLanes; i++) {
    const spaces = " ".repeat(numLanes - i);
    const numLane = ` /${i}`;
    let lane = "~".repeat(length);
    if (indices[i - 1] !== 0) {
      const laneArray = lane.split("");
      laneArray.splice(indices[i - 1], 1, "r");
      lane = laneArray.join("");
    }
    race += spaces + lane + numLane;
    if (i !== numLanes) race += "\n";
  }
  return race;
}
