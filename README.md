# Treasury App

This app demonstrates how to interact with the Treasury smart contract using web3.js and the Aurora network.

## Prerequisites

- Node.js (>= 14.x.x)
- NPM (>= 7.x.x)

## Setup

1. Clone the repository and navigate to the project folder:

```
git clone https://github.com/bpolania/Aurora-sneakers-treasury-app
cd treasury_app
```

2. Create a .env file in the project root folder and add your Aurora private key and RPC URL:

```
PRIVATE_KEY=YOUR_PRIVATE_KEY
RPC_URL=YOUR_AURORA_RPC_URL
TREASURY_CONTRACT_ADDRESS=YOUR_TREASURY_CONTRACT_ADDRESS
NFT_CONTRACT_ADDRESS=YOUR_NFT_CONTRACT_ADDRESS
```

Replace all the fields in the .env with the apprpriate values

## Interact with the Treasury Contract

1. Run the Treasury app:

`node app.js`

This will execute the sample functions provided in the index.js file to interact with the Treasury contract.

Remember to replace the sample function calls with your desired interactions.