/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
  if (!tree) return 0;
  const left = treeHeight(tree.left);
  const right = treeHeight(tree.right);
  return Math.max(left, right) + 1;
}
