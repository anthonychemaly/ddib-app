const operator = require("./operator");
const hedera = require("@hashgraph/sdk");
const operatorConfig = require("../assets/identityHolderAccount.json");

async function callGetMyIdentityFunction(contractId) {
  client = await operator.initOperator();

  const contractQuery = await new hedera.ContractCallQuery()
    .setGas(100000)
    .setContractId(contractId)
    .setFunction("getMyIdentity")
    .setQueryPayment(new hedera.Hbar(2))
    .execute(client);

  const firstName = contractQuery.getString(0);
  const lastName = contractQuery.getString(1);
  const dateOfBirth = contractQuery.getUint256(2);
  const fatherName = contractQuery.getString(3);
  const motherName = contractQuery.getString(4);
  const placeOfBirth = contractQuery.getString(5);
  const gender = contractQuery.getString(6);
  const socialStatus = contractQuery.getString(7);
  const city = contractQuery.getString(8);
  const imgUrl = contractQuery.getString(9);

  return [
    [
      {
        label: "First Name",
        value: firstName,
      },
      {
        label: "Last Name",
        value: lastName,
      },
      {
        label: "Date of Birth",
        value: new Date(dateOfBirth.toNumber() * 1000).toDateString(),
      },
    ],
    [
      {
        label: "Father Name",
        value: fatherName,
      },
      {
        label: "Mother Name",
        value: motherName,
      },
      {
        label: "Place of Birth",
        value: placeOfBirth,
      },
      {
        label: "Gender",
        value: gender,
      },
      {
        label: "Social Status",
        value: socialStatus,
      },
      {
        label: "City",
        value: city,
      },
    ],
    imgUrl,
  ];
}

async function callGetMyIdentityTokenIdFunction(contractId) {
  client = await operator.initOperator();

  const contractQuery = await new hedera.ContractCallQuery()
    .setGas(100000)
    .setContractId(contractId)
    .setFunction("getMyIdentityTokenId")
    .setQueryPayment(new hedera.Hbar(2))
    .execute(client);

  const tokenId = contractQuery.getUint256(0);

  return tokenId;
}

async function callGetIsAdultFunction(contractId, tokenId) {
  client = await operator.initOperator();

  const operatorPublicKey = hedera.PublicKey.fromString(
    operatorConfig.operatorPublicKey
  );

  const contractQuery = await new hedera.ContractCallQuery()
    .setGas(100000)
    .setContractId(contractId)
    .setFunction(
      "isAdult",
      new hedera.ContractFunctionParameters().addAddress(
        "0x" + operatorPublicKey.toEvmAddress()
      )
    )
    .setQueryPayment(new hedera.Hbar(2))
    .execute(client);

  const response = contractQuery.getBool(0);

  return response;
}

module.exports = {
  callGetMyIdentityFunction,
  callGetMyIdentityTokenIdFunction,
  callGetIsAdultFunction,
};
