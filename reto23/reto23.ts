function findMissingNumbers(nums: number[]): number[] {
  const set = new Set(nums);
  const max = Math.max(...nums);
  const m: number[] = [];
  for (let i = 1; i < max; i++) {
    if (!numSet.has(i)) m.push(i);
  }
  return m;
}
