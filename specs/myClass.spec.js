var MyClass = require("../src/myClass.js");
var sinon = require("sinon");
var myObj = new MyClass();
var chai = require("chai");
var expect = chai.expect;

describe("Test suit", function () {
    it("Test the add method", function () {
        expect(myObj.add(1, 2)).to.be.equal(3);
    })

    it("spy the add method", function () {
        var spy = sinon.spy(myObj, "add");
        var arg1 = 10, arg2 = 20;
        myObj.callAnotherFn(arg1, arg2);
        //sinon.assert.calledTwice(spy);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(arg1, arg2)).to.be.true;
    })

    it("spy the callabck method", function () {
        var callback = sinon.spy();
        myObj.callTheCallback(callback);
        expect(callback.calledOnce).to.be.true;
    })

    it("mock the sayHello method", function () {
        var mock = sinon.mock(myObj);
        var expetcation = mock.expects("sayHello");
        expetcation.exactly(1);
        expetcation.withArgs("Hello");
        myObj.callAnotherFn(10, 20);
        mock.verify()
    })

})