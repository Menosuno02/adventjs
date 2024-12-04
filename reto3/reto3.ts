type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(inventory: Inventory): object {
  const organizedInventory: object = {};
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
