def organizeInventory(inventory):
    organized_inventory = {}

    for toy in inventory:
        category_dict = organized_inventory.setdefault(toy['category'], {})
        category_dict[toy['name']] = category_dict.get(toy['name'], 0) + toy['quantity']

    return organized_inventory