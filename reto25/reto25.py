def execute(code: str) -> int:
    value = 0
    start_loop = 0
    for i in range(len(code)):
        if code[i] == "+":
            value += 1
        elif code[i] == "-":
            value -= 1
        elif code[i] == ">":
            continue
        elif code[i] == "{":
            if value == 0:
                i = code.index("}", i)
        elif code[i] == "[":
            start_loop = i
            if value == 0:
                i = code.index("]", i)
        elif code[i] == "]":
            if value != 0:
                i = start_loop
        else:
            pass
    return value
