function organizeShoes(shoes) {
  const pairs = {};

  for (const shoe of shoes) {
    pairs[shoe.size] = pairs[shoe.size] || { I: 0, R: 0 };
    pairs[shoe.size][shoe.type]++;
  }

  const result = [];
  for (const size in pairs) {
    const count = Math.min(pairs[size].I, pairs[size].R);
    for (let i = 0; i < count; i++) result.push(Number(size));
  }

  return result;
}
