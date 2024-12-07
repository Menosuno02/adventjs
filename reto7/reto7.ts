function fixPackages(packages: string): string {
  let result = packages;
  while (result.includes("(")) {
    const opening = result.lastIndexOf("(");
    const closing = result.indexOf(")", opening);
    const substring = result.substring(opening + 1, closing);
    const reordered = substring.split("").reverse().join("");
    result = result.slice(0, opening) + reordered + result.slice(closing + 1);
  }
  return result;
}
