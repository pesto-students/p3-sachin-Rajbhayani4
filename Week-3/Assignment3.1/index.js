const memoize = (fun) => {
    let cache = {}
    return (...args) => {
        console.log(args, "args")
        let n = args[0];
        console.log(n, "nn")
        if (n in cache) {
            console.log("Work IN")
            return cache[n]
        } else {
            console.log("Work First Time")
            let result = args.reduce((acc, curr) => fun(acc, curr), 0);
            console.log(result, "result")
            cache[n] = result;
            return result;
        }
    }
}

const add = (a, b) => {
    return a + b
}

const memoizeAdd = memoize(add)
console.log(memoizeAdd(100, 100), "memoizeAdd");