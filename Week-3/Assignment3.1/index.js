const memoize = (functions) => {
    let cache = {}
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            return cache[n]
        } else {
            let result = args.reduce((acc, curr) => functions(acc, curr), 0);
            cache[n] = result;
            return result;
        }
    }
}

const add = (a, b) => a + b

const memoizeAdd = memoize(add)
console.log(memoizeAdd(100, 100), "memoizeAdd");