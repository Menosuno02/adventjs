def createFrame(names):
    width = 0

    for name in names:
        if len(name) > width:
            width = len(name)

    frame = "*" * (width + 4) + "\n"

    for name in names:
        padding = " " * (width - len(name) + 1)
        frame += f"* {name}{padding}*\n"

    frame += "*" * (width + 4)

    return frame
