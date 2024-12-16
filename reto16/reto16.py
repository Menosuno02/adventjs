def remove_snow(s: str) -> str:
    chars = []
    for char in s:
        chars.pop() if chars and chars[-1] == char else chars.append(char)
    return "".join(chars)
