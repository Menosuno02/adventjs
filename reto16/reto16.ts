function removeSnow(s: string): string {
  const chars: string[] = [];
  for (const char of s)
    chars[chars.length - 1] === char ? chars.pop() : chars.push(char);
  return chars.join("");
}
