/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  received.sort();
  expected.sort();
  const missing = {};
  const extra = {};
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
