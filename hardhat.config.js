require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "pLZWVyP4QziH5SC7-TpIQCIJUI961UWb";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "6662dd7c8ab3327b94d0e2ec8a9eaeea7a47c2dd1617dc0be0afecc22f3084d4";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};