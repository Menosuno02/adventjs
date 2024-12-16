def drawTable(data):
    if not data:
        return "+\n+"

    keys = list(data[0].keys())
    lengths = {}

    for key in keys:
        max_length = len(key)
        for row in data:
            length = len(str(row[key]))
            if length > max_length:
                max_length = length
        lengths[key] = max_length

    separator = "+"
    for key in keys:
        separator += "-" * (lengths[key] + 2) + "+"

    header = "|"
    for key in keys:
        header += f" {key[0].upper()}{key[1:]}".ljust(lengths[key] + 2) + "|"

    rows = []
    for row in data:
        line = "|"
        for key in keys:
            line += f" {str(row[key])}".ljust(lengths[key] + 2) + "|"
        rows.append(line)

    return f"{separator}\n{header}\n{separator}\n{chr(10).join(rows)}\n{separator}"
