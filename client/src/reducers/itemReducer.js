import { ITEM_LOADING, ITEM_LOADED, ITEM_ERROR } from "../actions/types";

const initialState = {
  isLoading: false,
  item: {
    _id: "",
    date: "",
    openingCash: "",
    nonTax: "",
    tax: "",
    totalSales: "",
    salesTax: "",
    lotterySales: "",
    lottoSales: "",
    checkCash: "",
    cashDown: "",
    moneyOrder: "",
    badCheck: "",
    creditSaleCol: "",
    closingCash: "",
    foodStamps: "",
    creditCard: "",
    purchasing: "",
    bankDeposit: "",
    atm: "",
    creditSale: "",
    services: "",
    expenseDetail: "",
    lotLotteryCashes: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ITEM_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case ITEM_LOADED:
      return {
        ...state,
        isLoading: false,
        item: action.payload
      };
    case ITEM_ERROR:
      return {
        ...state,
        isLoading: false,
        item: null
      };
    default:
      return state;
  }
}
