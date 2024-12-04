function createXmasTree(height: number, ornament: string): string {
  let tree = "";
  for (let i = 1; i <= height; i++) {
    const padding = "_".repeat(height - i);
    tree += `${padding + ornament.repeat(i + (i - 1)) + padding}\n`;
  }
  const padding = "_".repeat(height - 1);
  tree += `${padding}#${padding}\n`;
  tree += `${padding}#${padding}`;
  return tree;
}
