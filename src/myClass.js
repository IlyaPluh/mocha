class MyClass {

    constructor() {
        console.log("initiate");
    }

    sayHello(str) {
        console.log(str)
    }

    add(arg1, arg2) {
        let result;
        result = arg1 + arg2;
        return result;
    }

    callTheCallback(callback) {
        callback();
    }

    callAnotherFn(arg1, arg2) {
        this.sayHello('Hello')
        var result = this.add(arg1, arg2)
        return result
    }

}

module.exports = MyClass;