/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const numSet = new Set(nums);
  const max = Math.max(...nums);
  const missing = [];
  for (let i = 1; i < max; i++) {
    if (!numSet.has(i)) missing.push(i);
  }
  return missing;
}
