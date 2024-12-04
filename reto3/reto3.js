function organizeInventory(inventory) {
  const organizedInventory = {};
  for (const toy of inventory) {
    // Si la categoría no existe, la creamos
    if (!organizedInventory[toy.category])
      organizedInventory[toy.category] = {};
    const categoryDict = organizedInventory[toy.category];

    // Si el juguete no existe, cantidad + 0
    categoryDict[toy.name] = (categoryDict[toy.name] || 0) + toy.quantity;
  }
  return organizedInventory;
}
