var Person = function () { };

Person.prototype.initialize = function (name, subject) {
    this.name = name;
    this.subject = subject;
}

Person.prototype.describe = function () {
    return `{this.name} is now teaching ${this.subject}`
}

var teacher = function () { }

teacher.prototype = new Person();

teacher.prototype.tech = function () {
    console.log(this.name + " " + "is now teaching" + " " + this.subject)
}

var me = new teacher();

me.initialize("Rakesh", "English");
me.tech();