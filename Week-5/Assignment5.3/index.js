const hasDuplicate = arr => new Set(arr).size !== arr.length

console.log(hasDuplicate([5, 6, 9, 6, 8]));

