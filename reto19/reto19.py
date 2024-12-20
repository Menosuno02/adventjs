# Imposible de resolver en la web, debe haber un error del compilador o algo


def distribute_weight(weight):
    boxes = [10, 5, 2, 1]
    box_representations = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"],
    }

    remaining_weight = weight
    used_boxes = []

    for box in boxes:
        while remaining_weight >= box:
            used_boxes.append(box)
            remaining_weight -= box

    used_boxes.sort()

    result = list(box_representations[used_boxes[0]])

    def merge_line(top, bottom):
        if len(top) < len(bottom):
            return top + bottom[len(top) :]
        return top

    for i in range(1, len(used_boxes)):
        current_box = list(box_representations[used_boxes[i]])
        merged_line = merge_line(result[-1], current_box[0])
        result[-1] = merged_line.rstrip()
        for j in range(1, len(current_box) - 1):
            result.append(current_box[j])
        last_line = current_box[-1]
        result.append(last_line if i == len(used_boxes) - 1 else last_line.rstrip())

    return "\n".join(result)
