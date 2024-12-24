/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  if (!tree1 || !tree2) return [!tree1 && !tree2, tree1?.value ?? ""];

  if (tree1.value !== tree2.value) return [false, tree1.value];

  const leftRightMatch = isTreesSynchronized(tree1.left, tree2.right)[0];
  const rightLeftMatch = isTreesSynchronized(tree1.right, tree2.left)[0];

  return [leftRightMatch && rightLeftMatch, tree1.value];
}
