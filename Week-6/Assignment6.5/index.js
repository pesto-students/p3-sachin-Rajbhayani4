const searchPair = (arr, n) => {
    let i = 0;
    let j = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j && (Math.abs(arr[i] - arr[j]) == n || Math.abs(arr[i] + arr[j]) == n)) {
                console.log(`Pair : ${arr[i]} ${arr[j]}`);
            return true;
            }
        }
    }

    return false;
}

let arr = [5, 10, 3, 2, 50, 80];
let n = 5;
console.log(searchPair(arr, n));