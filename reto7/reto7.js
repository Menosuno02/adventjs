/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let result = packages;
  while (result.includes("(")) {
    const opening = result.lastIndexOf("(");
    const closing = result.indexOf(")", opening);
    const substring = result.substring(opening + 1, closing);
    const reordered = substring.split("").reverse().join("");
    result = result.slice(0, opening) + reordered + result.slice(closing + 1);
  }
  return result;
}
