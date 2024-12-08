def draw_race(indices, length):
    result = ""
    num_lanes = len(indices)

    for i in range(1, num_lanes + 1):
        spaces = " " * (num_lanes - i)
        lane = "~" * length

        if indices[i - 1] != 0:
            pos = indices[i - 1] if indices[i - 1] > 0 else length + indices[i - 1]
            lane = lane[:pos] + "r" + lane[pos + 1 :]

        result += f"{spaces}{lane} /{i}"
        if i < num_lanes:
            result += "\n"

    return result
