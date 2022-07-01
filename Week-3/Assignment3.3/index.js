function createIncrement() {
    let count = 0;
    function increment(){
        count ++
        console.log(count);
    }
    let message  = `Count is ${count}`
    function log(){
        console.log(message);
    }
    
    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// this console.log(); message output was "Count is 0" because when we call the increment function then this time count's value increase and we call this function three times so count's value was 3 but when i call log function then message still pointing to the old instance, so the log is going to print the same old value