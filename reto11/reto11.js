/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  const firstSplit = filename.split("_");
  const secondSplit = firstSplit
    .slice(1, firstSplit.length)
    .join("_")
    .split(".");
  return secondSplit.slice(0, secondSplit.length - 1).join(".");
}
