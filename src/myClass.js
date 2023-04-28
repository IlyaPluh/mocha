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

    testPromise() {
        return new Promise(function(resolve, reject) {
            setTimeout(()=> resolve(3), 3000)
        }).then(function(result) {
            return result * 2 
        })
    }
}

module.exports = MyClass;