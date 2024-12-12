function calculatePrice(ornaments: string): number | undefined {
  const v = { "*": 1, o: 5, "^": 10, "#": 50, "@": 100 };
  let t = 0;
  for (let i = 0; i < ornaments.length; i++) {
    if (!v[ornaments[i]]) return undefined;
    t +=
      v[ornaments[i + 1]] > v[ornaments[i]]
        ? -v[ornaments[i]]
        : v[ornaments[i]];
  }
  return t;
}
