function distributeWeight(weight: number): string {
  const boxes = [10, 5, 2, 1];
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  let remainingWeight = weight;
  const usedBoxes: number[] = [];

  for (const box of boxes) {
    while (remainingWeight >= box) {
      usedBoxes.push(box);
      remainingWeight -= box;
    }
  }

  usedBoxes.sort((a, b) => a - b);

  const result = [...boxRepresentations[usedBoxes[0]]];

  for (let i = 1; i < usedBoxes.length; i++) {
    const currentBox = [...boxRepresentations[usedBoxes[i]]];

    const mergedLine = mergeLine(result[result.length - 1], currentBox[0]);
    result[result.length - 1] = mergedLine.trimEnd();

    for (let j = 1; j < currentBox.length - 1; j++) result.push(currentBox[j]);

    const lastLine = currentBox[currentBox.length - 1];
    result.push(i === usedBoxes.length - 1 ? lastLine : lastLine.trimEnd());
  }

  return result.join("\n");

  function mergeLine(top: string, bottom: string): string {
    if (top.length < bottom.length) return top + bottom.slice(top.length);
    return top;
  }
}
