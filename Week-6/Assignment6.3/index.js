const Sortarray = (params) => {

    const arr = [];
    for (let i = 0; i < params; i++) {
        arr.push(Math.floor(Math.random() * 3));
    }

    arr.sort(function(a, b){return a-b});

    return arr;

}

console.log(Sortarray(5));