const maxDepth = (root) => {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;

    let cur = root;
    const queue = [root, null];
    let depth = 1;

    while ((cur = queue.shift()) !== undefined) {
        if (cur === null) {
            if (queue.length === 0) return depth;
            depth++;
            queue.push(null);
            continue;
        }
        const leftHead = cur.left;
        const rightHead = cur.right;

        if (leftHead) queue.push(leftHead);
        if (rightHead) queue.push(rightHead);
    }
    return depth;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7]));