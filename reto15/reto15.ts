function drawTable(data: Array<Record<string, string | number>>): string {
  if (!data.length) return "+\n+";

  const keys = Object.keys(data[0]);
  const lengths: Record<string, number> = {};

  for (const key of keys) {
    let maxLength = key.length;
    for (const row of data) {
      const len = String(row[key]).length;
      if (len > maxLength) maxLength = len;
    }
    lengths[key] = maxLength;
  }

  let separator = "+";
  for (const key of keys) {
    separator += `${"-".repeat(lengths[key] + 2)}+`;
  }

  let header = "|";
  for (const key of keys) {
    header += `${` ${key[0].toUpperCase()}${key.slice(1)}`.padEnd(
      lengths[key] + 2
    )}|`;
  }

  const rows: string[] = [];
  for (const row of data) {
    let line = "|";
    for (const key of keys) {
      line += `${` ${String(row[key])}`.padEnd(lengths[key] + 2)}|`;
    }
    rows.push(line);
  }

  return `${separator}\n${header}\n${separator}\n${rows.join(
    "\n"
  )}\n${separator}`;
}
