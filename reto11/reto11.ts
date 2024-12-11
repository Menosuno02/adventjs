function decodeFilename(filename: string): string {
  const firstSplit: string[] = filename.split("_");
  const secondSplit: string[] = firstSplit
    .slice(1, firstSplit.length)
    .join("_")
    .split(".");
  return secondSplit.slice(0, secondSplit.length - 1).join(".");
}
