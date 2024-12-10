/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const vars = new Map();
  for (let i = 0; i < instructions.length; i++) {
    const [command, var1, var2] = instructions[i].split(" ");
    switch (command) {
      case "MOV":
        vars.set(
          var2,
          !Number.isNaN(Number(var1)) ? Number(var1) : vars.get(var1) ?? 0
        );
        break;
      case "INC":
        vars.set(var1, (vars.get(var1) ?? 0) + 1);
        break;
      case "DEC":
        vars.set(var1, (vars.get(var1) ?? 0) - 1);
        break;
      case "JMP":
        if ((vars.get(var1) ?? 0) === 0) i = Number(var2) - 1;
        break;
    }
  }
  return vars.get("A");
}
