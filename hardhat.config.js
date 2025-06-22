require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20"
      },
      {
        version: "0.8.28"
      }
    ]
  },
  networks: {
    base: {
      url: "https://alien-small-meadow.base-mainnet.quiknode.pro/4f51dabc33338efaf39b28ac7eada21f114e0ce2/", // make sure it's HTTPS
      accounts: ["f3f8422354be32be71c3a446d93a8e21722c7e3999543f45b30a6dcad31e5a86"]
    }
  }
};