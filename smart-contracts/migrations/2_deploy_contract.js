/* eslint-disable no-undef */
const CampaignFactory = artifacts.require('CampaignFactory.sol');

module.exports = function (deployer) {
  deployer.deploy(CampaignFactory, 1);
};
