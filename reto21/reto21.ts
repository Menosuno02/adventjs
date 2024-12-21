function treeHeight(
  tree: { value: string; left: any; right: any } | null
): number {
  if (!tree) return 0;
  const left = treeHeight(tree.left);
  const right = treeHeight(tree.right);
  return Math.max(left, right) + 1;
}
