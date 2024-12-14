def min_moves_to_stables(reindeer, stables):
    reindeer.sort()
    stables.sort()
    moves = 0
    for i in range(len(reindeer)):
        moves += max(reindeer[i], stables[i]) - min(reindeer[i], stables[i])
    return moves
