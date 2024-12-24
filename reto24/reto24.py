def is_trees_synchronized(tree1, tree2):
    if not tree1 or not tree2:
        return (not tree1 and not tree2, tree1.value if tree1 else "")

    if tree1.value != tree2.value:
        return (False, tree1.value)

    left_right_match = is_trees_synchronized(tree1.left, tree2.right)[0]
    right_left_match = is_trees_synchronized(tree1.right, tree2.left)[0]

    return [left_right_match and right_left_match, tree1.value]
