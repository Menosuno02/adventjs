def calculate_price(ornaments: str) -> int | None:
    values = {"*": 1, "o": 5, "^": 10, "#": 50, "@": 100}
    total = 0
    for i in range(len(ornaments)):
        char = ornaments[i]
        if char not in values:
            return None

        value = values[char]
        next_value = values[ornaments[i + 1]] if i + 1 < len(ornaments) else 0

        if value < next_value:
            total -= value
        else:
            total += value

    return total
