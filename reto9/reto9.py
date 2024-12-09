from typing import List, Literal


def move_train(
    board: List[str], mov: Literal["U", "D", "R", "L"]
) -> Literal["none", "crash", "eat"]:
    y = [i for i, row in enumerate(board) if "@" in row][0]
    x = board[y].index("@")

    dy = {"U": -1, "D": 1, "R": 0, "L": 0}[mov]
    dx = {"U": 0, "D": 0, "R": 1, "L": -1}[mov]
    ny, nx = y + dy, x + dx

    if not (0 <= ny < len(board) and 0 <= nx < len(board[0])):
        return "crash"
    return {"o": "crash", "*": "eat"}.get(board[ny][nx], "none")
