const operator = require("./operator");
const smartcontract = require("./contract");

module.exports = {
  ...operator,
  ...smartcontract,
};
