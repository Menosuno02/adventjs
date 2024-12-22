/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  const result = [];

  const backtrack = (start, current) => {
    if (current.length > 0) {
      result.push([...current]);
    }

    for (let i = start; i < gifts.length; i++) {
      current.push(gifts[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  };

  backtrack(0, []);

  return result.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return gifts.indexOf(a[0]) - gifts.indexOf(b[0]);
  });
}
