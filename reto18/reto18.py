def find_in_agenda(agenda: str, phone: str) -> dict | None:
    infos = agenda.split("\n")
    phone_infos = [info for info in infos if info.includes(phone)]
    if len(phone_infos) != 1 or len(phone_infos) > 1:
        return None
    info = phone_infos[0]
    return {
        "name": info[info.index("<") + 1 : info.index(">")],
        "address": info.replace("<.*>", "")
        .replace("+[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{3}", "")
        .strip(),
    }
