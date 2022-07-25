function* firstFunction() {
    yield new function task1(name, std) {
        console.log(`This is a first Function`);
    }

    yield new function task2(name, std) {
        console.log(`This is a second Function`);
    }

    yield new function task3(name, std) {
        console.log(`This is a thired Function`);
    }

}

const iter = firstFunction();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


const secondFunction = async () => {

    await new setTimeout(() => {
        console.log("First");
    }, 2000);

    await new function task2() {
        console.log("Second");
    }

    await new function task3() {
        console.log("thired")
    }
}


console.log(secondFunction());