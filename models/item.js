const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  date: Date,
  openingCash: Number,
  nonTax: Number,
  tax: Number,
  totalSales: Number,
  salesTax: Number,
  lotterySales: Number,
  lottoSales: Number,
  checkCash: Number,
  cashDown: Number,
  moneyOrder: Number,
  badCheck: Number,
  creditSaleCol: Number,
  closingCash: Number,
  foodStamps: Number,
  creditCard: Number,
  purchasing: Number,
  bankDeposit: Number,
  atm: Number,
  creditSale: Number,
  services: Number,
  expenseDetail: Number,
  lotLotteryCashes: Number
});

let Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
