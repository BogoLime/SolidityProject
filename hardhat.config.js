require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/40c2813049e44ec79cb4d7e0d18de173",
      accounts: ['df5471a037232fcfb58a765b1a440b3863b0e4fd61b16b976babec29f2f22fdc']
    }
  }
}
}
