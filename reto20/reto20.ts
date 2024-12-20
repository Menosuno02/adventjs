function fixGiftList(
  received: string[],
  expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
  received.sort();
  expected.sort();
  const missing: Record<string, number> = {};
  const extra: Record<string, number> = {};
  const setGifts = new Set([...received, ...expected]);
  for (const gift of setGifts) {
    const receivedCount = received.filter((g) => g === gift).length;
    const expectedCount = expected.filter((g) => g === gift).length;

    if (receivedCount > expectedCount)
      extra[gift] = receivedCount - expectedCount;
    else if (receivedCount < expectedCount)
      missing[gift] = expectedCount - receivedCount;
  }
  return {
    missing: missing,
    extra: extra,
  };
}
