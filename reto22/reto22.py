def generate_gift_sets(gifts):
    result = []

    def backtrack(start, current):
        if current:
            result.append(current)

        for i in range(start, len(gifts)):
            current.append(gifts[i])
            backtrack(i + 1, current)
            current.pop()

    backtrack(0, [])
    return sorted(result, key=lambda x: len(x))
