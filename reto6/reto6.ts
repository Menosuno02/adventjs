function inBox(box: string[]): boolean {
  let isGiftInBox = false;
  for (let i = 1; i < box.length - 1; i++) {
    if (!box[i].includes("*")) continue;
    isGiftInBox =
      box[i].indexOf("*") > 0 && box[i].indexOf("*") < box[i].length - 1;
  }
  return isGiftInBox;
}
