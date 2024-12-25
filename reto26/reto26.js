/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
  const miliseconds = (h, m, s) => (+h * 3600 + +m * 60 + +s) * 1000;
  const worked = timeWorked.split(":");
  const total = totalTime.split(":");
  const workedMiliseconds = miliseconds(worked[0], worked[1], worked[2]);
  const totalMiliseconds = miliseconds(total[0], total[1], total[2]);
  return `${Math.round((workedMiliseconds / totalMiliseconds) * 100)}%`;
}
