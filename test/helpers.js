const { resetHardhatContext }=require("hardhat/plugins-testing");

const {path}=require('path')


const { chdir, cwd } =require('node:process');
 function useEnvironment(fixtureProjectName) {
  beforeEach("Loading hardhat environment", function () {
    chdir(path.join(cwd, "fixture-projects", fixtureProjectName));

    this.hre = require("hardhat");
  });

  afterEach("Resetting hardhat", function () {
    resetHardhatContext();
  });
}

module.exports={useEnvironment}