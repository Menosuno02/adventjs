def decode_filename(filename: str) -> str:
    firstSplit = filename.split("_")
    secondSplit = firstSplit[1:].join("_").split(".")
    return secondSplit[:-1].join(".")
