def compile(instructions):
    vars = {}
    for i in range(len(instructions)):
        instruction = instructions[i].split(" ")
        command = instruction[0]
        var1 = instruction[1]
        var2 = instruction[2]
        if command == "MOV":
            vars[var2] = int(var1) if var1.isnumeric() else vars.get(var1, 0)
        elif command == "INC":
            vars[var1] = vars.get(var1, 0) + 1
        elif command == "DEC":
            vars[var1] = vars.get(var1, 0) - 1
        elif command == "JMP":
            if vars.get(var1, 0) == 0:
                i = int(var2) - 1
    return vars.get("A")
