/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let value = 0;
  let startLoop = 0;
  for (let i = 0; i < code.length; i++) {
    switch (code[i]) {
      case "+":
        value++;
        break;
      case "-":
        value--;
        break;
      case ">":
        continue;
      case "{":
        if (value === 0) i = code.indexOf("}", i);
        break;
      case "[":
        startLoop = i;
        if (value === 0) i = code.indexOf("]", i);
        break;
      case "]":
        if (value !== 0) i = startLoop;
        break;
      default:
        break;
    }
  }
  return value;
}
