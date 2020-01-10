import API from "../utils/API";
import { returnErrors, clearErrors } from "./errorActions";
import { ITEM_LOADING, ITEM_LOADED, ITEM_ERROR } from "../actions/types";

export const loadItem = data => (dispatch, getState) => {
  dispatch({ type: ITEM_LOADING });
  console.log("load item    ", data)
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
            _id: "",
            date: data.date,
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

// export const loadUser = () => (dispatch, getState) => {
//   dispatch({ type: USER_LOADING });
//   API.getUsers(tokenConfig(getState))
//     .then(res => {
//       dispatch({
//         type: USER_LOADED,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: AUTH_ERROR
//       });
//     });
// };

// export const register = ({
//   firstName,
//   lastName,
//   username,
//   email,
//   password
// }) => dispatch => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };

//   const body = {
//     firstName,
//     lastName,
//     username,
//     email,
//     password
//   };

//   API.saveUser(body, config)
//     .then(res =>
//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data
//       })
//     )
//     .catch(err => {
//       dispatch(
//         returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
//       );
//       dispatch({
//         type: REGISTER_FAIL
//       });
//     });
// };

// export const login = body => dispatch => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };

//   API.loginUser(body, config)
//     .then(res =>
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: res.data
//       })
//     )
//     .catch(err => {
//       dispatch(
//         returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
//       );
//       dispatch({
//         type: LOGIN_FAIL
//       });
//     });
// };

// export const logout = () => {
//   return {
//     type: LOGOUT_SUCCESS
//   };
// };

// export const tokenConfig = getState => {
//   const token = getState().auth.token;
//   const config = {
//     headers: {
//       "Content-type": "application/json"
//     }
//   };
//   if (token) {
//     config.headers["x-auth-token"] = token;
//   }
//   return config;
// };
