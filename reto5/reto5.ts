type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const pairs: Record<number, { I: number; R: number }> = {};

  for (const shoe of shoes) {
    pairs[shoe.size] = pairs[shoe.size] || { I: 0, R: 0 };
    pairs[shoe.size][shoe.type]++;
  }

  const result: number[] = [];
  for (const size in pairs) {
    const count = Math.min(pairs[size].I, pairs[size].R);
    for (let i = 0; i < count; i++) result.push(Number(size));
  }

  return result;
}
