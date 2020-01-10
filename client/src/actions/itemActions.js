import API from "../utils/API";
import { ITEM_LOADING, ITEM_LOADED } from "../actions/types";

export const loadItem = data => (dispatch, getState) => {
  dispatch({ type: ITEM_LOADING });
  API.getDaily(data).then(res => {
    if (res.data) {
      dispatch({
        type: ITEM_LOADED,
        payload: res.data
      });
    } else {
      dispatch({
        type: ITEM_LOADED,
        payload: {
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
      });
    }
  });
};
export const sendItem = data => (dispatch, getState) => {
  dispatch({ type: ITEM_LOADING });
  API.postItem(data).then(res => {
    dispatch({
      type: ITEM_LOADED,
      payload: res.data
    });
  });
};
