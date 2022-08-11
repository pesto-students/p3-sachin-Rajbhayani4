const greaterEle = (arr, n) => {
    let next, i, j, newArr = [];

    for (i = 0; i < n; i++) {
        next = -1;
        for (j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) {
                next = arr[j];
                break;
            }
        }
        newArr.push(`${arr[i]} -> ${next}`)
    }
    return newArr;
}

let arr = [11, 13, 21, 3];
let n = arr.length;
console.log(greaterEle(arr, n));