function findMissingNumbers(nums: number[]): number[] {
  const uniqueNums = new Set(nums);
  const collection = new Set();
  for (let i = 1; i < Math.max(...uniqueNums); i++) collection.add(i);

  const missingNums = [...collection.difference(uniqueNums)];
  return missingNums;
}
