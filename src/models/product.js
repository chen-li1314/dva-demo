import * as api from "../services/example";
export default {
  namespace: "product",
  state: {
    productList: [
      {
        name: "豆子",
      },
      {
        name: "豆花",
      },
      {
        name: "豆汁儿",
      },
      {
        name: "豆干",
      },
      {
        name: "豆奶",
      },
      {
        name: "豆沙",
      },
      {
        name: "豆芽",
      },
      {
        name: "豆芽",
      },
    ],
  },
  reducers: {
    updateList(state, action) {
      let currentProductList = deepClone(state);
      currentProductList.productList.push(action.payload);
      return currentProductList;
    },
  },
  effects: {
    *updateListAsync({ payload }, { call, put }) {
      yield put({ type: "updateList", payload });
    },
    *updateListAsync2({ payload }, { call, put }){
      //网络请求
      const result = yield call(api.getProduct, payload);
      const data=result.data;
      console.log(payload)
      if(data){
        yield put({ type: "updateList", payload: data });
      }

    },
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      window.onresize=()=>{
        // console.log(dispatch)
        dispatch()
      }


    },
    setupHistory({dispatch,history}){
      history.listen((location)=>{
        console.log(location)
      })
    }
  },
};
function deepClone(arr) {
  let _obj = JSON.stringify(arr);
  let objClone = JSON.parse(_obj);
  return objClone;
}
