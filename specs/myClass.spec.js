let MyClass = require("../src/myClass.js");
let sinon = require("sinon");
let myObj = new MyClass();
let chai = require("chai");
let expect = chai.expect;
const chaipromise = require("chai-as-promised");
chai.use(chaipromise);
const nock = require("nock")


describe("Test suit", function () {
    after(function() {
        console.log("----- After the test suit")
    })
    before(function() {
        console.log("----- Before the test suit")
    })
    it("Test the add method", function () {
        expect(myObj.add(1, 2)).to.be.equal(3);
    })
    afterEach(function() {
        console.log("----- After each test case")
    })
    // beforeEach(function() {
    //     console.log("----- Before each test case")
    //     sinon.restore()
    // })
    it("spy the add method", function () {
        let spy = sinon.spy(myObj, "add");
        let arg1 = 10, arg2 = 20;
        myObj.callAnotherFn(arg1, arg2);
        //sinon.assert.calledTwice(spy);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(arg1, arg2)).to.be.true;
    })

    it("copy spy the add method", function () {
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

describe.skip("Test suit for stub", function() {
    it("Stub the add method", function () {
    let stub = sinon.stub(myObj, "add");
    stub.withArgs(10, 20)
    .onFirstCall().returns(100)
    .onSecondCall().returns(200);
    expect(myObj.callAnotherFn(10, 20)).to.be.equal(100);
    expect(myObj.callAnotherFn(10, 20)).to.be.equal(200);
    })
})

describe.skip("Test the promise", function() {
    it("Promise tast case", function () {
        this.timeout(0)
        // myObj.testPromise().then(function(result) {
        //     expect(result).to.be.equal(6)
        //     done()
        //})
        return expect(myObj.testPromise()).to.eventually.equal(6)
    })
})

describe.skip("XHR test suit", function() {
    it("Mock and stub xhr call", function (done) {
        const scope = nock("https://echo-service-new.herokuapp.com")
            .post("/echo")
            .reply(200, {id:123})
        myObj.xhrFn().then(function(result) {
            console.log(result)
            expect(result).to.be.equal({id:123})
            done()
        })
        // .catch(error => {
        //     done(new Error("test failed"))
        // })
    })
})

beforeEach(function() {
    console.log("----- Root Before each test case")
    sinon.restore()
})