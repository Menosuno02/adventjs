def fix_packages(packages):
    result = packages
    while result.includes("("):
        opening = result.lastIndexOf("(")
        closing = result.indexOf(")", opening)
        substring = result.substring(opening + 1, closing)
        reordered = substring.split("").reverse().join("")
        result = result.slice(0, opening) + reordered + result.slice(closing + 1)
    return result
