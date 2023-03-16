const Web3 = require("web3");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();
const privateKey = process.env.PRIVATE_KEY;
const rpcURL = process.env.RPC_URL;

const web3 = new Web3(rpcURL);
const treasuryABI = JSON.parse(fs.readFileSync("treasuryABI.json", "utf8"));

const treasuryAddress = process.env.TREASURY_CONTRACT_ADDRESS;

const main = async () => {
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  const treasuryContract = new web3.eth.Contract(treasuryABI, treasuryAddress);

  // Report a sale for an NFT contract
  const reportSaleTx = treasuryContract.methods.reportSale(process.env.NFT_CONTRACT_ADDRESS);
  const reportSaleGas = await reportSaleTx.estimateGas({ from: account.address });
  const reportSaleData = reportSaleTx.encodeABI();

  const reportSaleTxOptions = {
    from: account.address,
    to: treasuryAddress,
    gas: reportSaleGas,
    data: reportSaleData,
  };

  const signedReportSaleTx = await account.signTransaction(reportSaleTxOptions);
  const reportSaleReceipt = await web3.eth.sendSignedTransaction(signedReportSaleTx.rawTransaction);
  console.log("Report sale receipt:", reportSaleReceipt);

  // Call the calculateRoyalties function
  const royalties = await treasuryContract.methods.calculateRoyalties(process.env.NFT_CONTRACT_ADDRESS).call();
  console.log("Royalties to be paid:", royalties);
};

main()
  .then(() => console.log("App executed successfully"))
  .catch((error) => console.error("Error executing app:", error));
