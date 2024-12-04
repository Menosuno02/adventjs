def createXmasTree(height, ornament):
    tree = ""

    for i in range(1, height + 1):
        padding = "_" * (height - i)
        tree += f"{padding}{ornament * (i + (i - 1))}{padding}\n"

    padding = "_" * (height - 1)
    tree += f"{padding}#{padding}\n"
    tree += f"{padding}#{padding}"

    return tree