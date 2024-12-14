def is_robot_back(moves):
    pos = [0, 0]
    moves_map = {"R": [1, 0], "L": [-1, 0], "U": [0, 1], "D": [0, -1]}
    reverse = {"R": "L", "L": "R", "U": "D", "D": "U"}
    used = []
    mod = ""

    for move in moves:
        if move in "*!?":
            mod = move
            continue

        moveX, moveY = moves_map[move]
        tracking = move

        if mod == "*":
            moveX *= 2
            moveY *= 2
        if mod == "!":
            moveX *= -1
            moveY *= -1
            tracking = reverse[move]
        if mod == "?" and tracking in used:
            moveX = moveY = 0

        if moveX or moveY:
            used.append(tracking)
        pos[0] += moveX
        pos[1] += moveY
        mod = ""

    return True if pos[0] == 0 and pos[1] == 0 else pos
