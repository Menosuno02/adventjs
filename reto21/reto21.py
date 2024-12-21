def tree_height(tree):
    if not tree:
        return 0

    left_height = tree_height(tree.left)
    right_height = tree_height(tree.right)

    return max(left_height, right_height) + 1
