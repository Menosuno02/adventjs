def in_box(box):
    isGiftInBox = False

    for i in range(1, len(box) - 1):
        if "*" not in box[i]:
            continue

        isGiftInBox = box[i].index("*") > 0 and box[i].index("*") < len(box[i]) - 1

    return isGiftInBox
