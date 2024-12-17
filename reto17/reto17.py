def detect_bombs(grid: list[list[bool]]) -> list[list[int]]:
    rows, cols = len(grid), len(grid[0])
    result = [[0] * cols for _ in range(rows)]

    neighbors = [
        (-1, 0),
        (-1, 1),
        (0, 1),
        (1, 1),
        (1, 0),
        (1, -1),
        (0, -1),
        (-1, -1),
    ]

    for i in range(rows):
        for j in range(cols):
            result[i][j] = sum(
                grid[i + di][j + dj]
                for di, dj in neighbors
                if 0 <= i + di < rows and 0 <= j + dj < cols
            )

    return result
