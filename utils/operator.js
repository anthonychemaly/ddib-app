const hedera = require("@hashgraph/sdk");
const operatorConfig = require("../assets/identityHolderAccount.json");

async function initOperator() {
  const operatorAccountId = hedera.AccountId.fromString(
    operatorConfig.operatorAccountId
  );
  const operatorPrivateKey = hedera.PrivateKey.fromString(
    operatorConfig.operatorPrivateKey
  );
  // Create a client and return it
  const client = hedera.Client.forTestnet();
  client.setOperator(operatorAccountId, operatorPrivateKey);
  return client;
}

module.exports = {
  initOperator,
};
