function createFrame(names) {
  let width = 0;

  // Obtener el ancho máximo
  for (const name of names) if (name.length > width) width = name.length;

  // Borde superior
  let frame = `${"*".repeat(width + 4)}\n`;

  // Contenido del frame
  for (const name of names)
    frame += `* ${name}${" ".repeat(width - name.length + 1)}*\n`;

  // Borde inferior
  frame += "*".repeat(width + 4);

  return frame;
}
