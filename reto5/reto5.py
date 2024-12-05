def organizeShoes(shoes):
    pairs = {}

    for shoe in shoes:
        pairs[shoe['size']] = pairs.get(shoe['size'], {'I': 0, 'R': 0})
        pairs[shoe['size']][shoe['type']] += 1

    result = []
    for size in pairs:
        count = min(pairs[size]['I'], pairs[size]['R'])
        for i in range(count):
            result.append(size)

    return result
