def draw_race(indices, length):
    lanes = []
    for i, pos in enumerate(indices, 1):
        spaces = " " * (len(indices) - i)
        lane = list("~" * length)

        if pos:
            pos = pos if pos > 0 else length + pos
            if 0 <= pos < length:
                lane[pos] = "r"

        lanes.append(f"{spaces}{''.join(lane)} /{i}")

    return "\n".join(lanes)
