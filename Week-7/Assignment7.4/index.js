const checkBrackets = (val) => {
    let stack = [];

    for (let i in val) {
        let x = val[i];

        if (x == '(' || x == '[' || x == '{') {
            stack.push(x);
            continue;
        }

        if (stack.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    return (stack.length == 0);
}

console.log(checkBrackets("(name: [{lastName: "demoLastName", age: 12},] )"));
