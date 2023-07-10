const {assert }=require('chai')

const {path}=require('path')
const process = require('process');
//const {ExampleHardhatRuntimeEnvironmentField}=require('../src/ExampleHardhatRuntimeEnvironmentField')


const { useEnvironment }=require("./helpers");

class ExampleHardhatRuntimeEnvironmentField {
    constructor(){}
     sayHello() {
      return "hello";
    }
  }


describe("Integration tests examples", function () {
    describe("Hardhat Runtime Environment extension", function () {
      useEnvironment("hardhat-project");
  
      it("Should add the example field", function () {
        assert.instanceOf(
          this.hre.example,
          ExampleHardhatRuntimeEnvironmentField
        );
      });
  
      it("The example field should say hello", function () {
        assert.equal(this.hre.example.sayHello(), "hello");
      });
    });
  
    describe("HardhatConfig extension", function () {
      useEnvironment("hardhat-project");
  
      it("Should add the newPath to the config", function () {
       let dir= process.cwd()
       dir=dir.concat("\abc")
;        assert.equal(
          this.hre.config.paths.newPath,
          dir
          
        );
      });
    });
  });
  
  describe("Unit tests examples", function () {
    describe("ExampleHardhatRuntimeEnvironmentField", function () {
      describe("sayHello", function () {
        it("Should say hello", function () {
          const field = new ExampleHardhatRuntimeEnvironmentField();
          assert.equal(field.sayHello(), "hello");
        });
      });
    });
  });