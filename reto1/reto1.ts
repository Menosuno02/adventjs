function prepareGifts(gifts: number[]): number[] {
  // Set es un objeto de tipo colección que elimina los duplicados (almacena solo valores únicos)
  // Por lo tanto, al crear un Set con los gifts, solo necesitamos ordenarlos después
  return [...new Set(gifts)].sort((a, b) => a - b);
}
