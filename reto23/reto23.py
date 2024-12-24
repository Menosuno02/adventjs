def find_missing_numbers(nums):
    num_set = set(nums)
    max_num = max(nums)
    missing = []
    for i in range(1, max_num):
        if i not in num_set:
            missing.append(i)
    return missing
