function* fibonacci() {
    let current = 0;
    let next = 1;
    while (true) {
        let reset = yield current;
        [current, next] = [next, next + current];
        if (reset) {
            current = 0;
            next = 1;
        }
    }
}

const sequence = fibonacci();

let i = 0;
while (i < 7) {
    console.log(sequence.next().value);
    i++;
}
