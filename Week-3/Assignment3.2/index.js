const person = {
    fullName: function (habits = "read", goal = "exam") {
        return this.firstName + " " + this.lastName + " " + "he has to" + " " + habits + " " + "habits and his goal was to create an" + " " + goal
    }
}

const person1 = {
    firstName: "Raj",
    lastName: "Bhayani"
}

// Call method
console.log(person.fullName.call(person1, "read", "exam"));

// Apply method
console.log(person.fullName.apply(person1));

const car = {
    name: "Harrier",
    model: "05MWE6HK0",
    detail: function () {
        return `My care name is ${this.name} and it's has to ${this.model} model number`
    }
}

// Bind Method
let bindShow = car.detail.bind(car);

console.log(bindShow(), "bindShow");
