/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  const chars = [];
  for (const char of s)
    chars[chars.length - 1] === char ? chars.pop() : chars.push(char);
  return chars.join("");
}
