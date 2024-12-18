function findInAgenda(
  agenda: string,
  phone: string
): { name: string; address: string } | null {
  const infos = agenda.split("\n");
  const phoneInfos = infos.filter((info) => info.includes(phone));
  if (phoneInfos.length !== 1 || phoneInfos.length > 1) return null;
  const info = phoneInfos[0];
  return {
    name: info.slice(info.indexOf("<") + 1, info.indexOf(">")),
    address: info
      .replace(/\<.*\>/g, "")
      .replace(/\+[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{3}/g, "")
      .trim(),
  };
}
