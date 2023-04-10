var MyClass = require("../src/myClass.js");
var myObj = new MyClass () ;
var chai = require("chai");
var expect = chai.expect;

describe("Test suit", function() {
    it ("Test the add method", function() {
        expect (myObj.add(1, 2)).to.be.equal(3);
        });
    });