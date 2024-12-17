/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const result = [];
  const parseValue = {
    true: 1,
    false: 0,
    undefined: 0,
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      result[i] = result[i] || [];
      const ySide = parseValue[grid[i - 1]?.[j]] + parseValue[grid[i + 1]?.[j]];
      const xSide = parseValue[grid[i]?.[j - 1]] + parseValue[grid[i]?.[j + 1]];
      const upperDiag =
        parseValue[grid[i - 1]?.[j - 1]] + parseValue[grid[i - 1]?.[j + 1]];
      const lowerDiag =
        parseValue[grid[i + 1]?.[j - 1]] + parseValue[grid[i + 1]?.[j + 1]];
      result[i][j] = ySide + xSide + upperDiag + lowerDiag;
    }
  }
  return result;
}
