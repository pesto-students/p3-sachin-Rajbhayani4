var isValidBST = function (root) {
    let preVal = -Infinity;
    let stack = [];

    while (root !== null || stack.length !== 0) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= preVal) return false;
        preVal = root.val;
        root = root.right;
    }
    return true;
};

console.log(isValidBST([5, 1, 4, null, null, 3, 6]));