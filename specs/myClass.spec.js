let MyClass = require("../src/myClass.js");
let sinon = require("sinon");
let myObj = new MyClass();
let chai = require("chai");
let expect = chai.expect;

describe.skip("Test suit", function () {
    it("Test the add method", function () {
        expect(myObj.add(1, 2)).to.be.equal(3);
    })

    it("spy the add method", function () {
        let spy = sinon.spy(myObj, "add");
        let arg1 = 10, arg2 = 20;
        myObj.callAnotherFn(arg1, arg2);
        //sinon.assert.calledTwice(spy);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(arg1, arg2)).to.be.true;
    })

    it("spy the callabck method", function () {
        let callback = sinon.spy();
        myObj.callTheCallback(callback);
        expect(callback.calledOnce).to.be.true;
    })

    it("mock the sayHello method", function () {
        let mock = sinon.mock(myObj);
        let expetcation = mock.expects("sayHello");
        expetcation.exactly(1);
        expetcation.withArgs("Hello");
        myObj.callAnotherFn(10, 20);
        mock.verify()
    })
})

describe("Test suit for stub", function() {
    it("Stub the add method", function () {
    let stub = sinon.stub(myObj, "add");
    stub.withArgs(10, 20)
    .onFirstCall().returns(100)
    .onSecondCall().returns(200);
    expect(myObj.callAnotherFn(10, 20)).to.be.equal(100);
    expect(myObj.callAnotherFn(10, 20)).to.be.equal(200);
    })
})