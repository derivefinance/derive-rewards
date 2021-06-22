const CakePool = artifacts.require("CakePool"); 


module.exports = async function(deployer) {
  deployer.deploy(CakePool)

}