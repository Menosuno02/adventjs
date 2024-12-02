/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
*/
function createFrame(names: string[]): string {
  let width = 0;

  // Obtener el ancho máximo
  names.map((name) => {
    if (name.length > width) width = name.length;
  });

  // Borde superior
  let frame = `${"*".repeat(width + 4)}\n`;

  // Contenido del frame
  for (let i = 0; i < names.length; i++)
    frame += `* ${names[i]}${" ".repeat(width - names[i].length + 1)}*\n`;

  // Borde inferior
  frame += "*".repeat(width + 4);

  return frame;
}
