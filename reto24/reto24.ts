function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  if (!tree1 || !tree2) return [!tree1 && !tree2, tree1?.value ?? ""];

  if (tree1.value !== tree2.value) return [false, tree1.value];

  const leftRightMatch = isTreesSynchronized(tree1.left, tree2.right)[0];
  const rightLeftMatch = isTreesSynchronized(tree1.right, tree2.left)[0];

  return [leftRightMatch && rightLeftMatch, tree1.value];
}
