import React, { Component } from "react";
import {withRouter,Link,routerRedux}  from "dva/router"
import  *   as api from "../services/example"
import {productUpdatelist,updateListAsync,updateListHttp} from "../actions/index"


 class Product extends Component {


    componentDidMount(){
      // console.log(api.getProduct())
      // api.getProduct()
      // .then(res=>{
      //   console.log(res.data);
      // })
      api.posts()
      .then(res=>{
        console.log(res.data);
      })
    }
  clickProductList=(event)=>{

    const currentProduct={
      name:"玉米一"
    }
    // this.props.dispatch({
    //   // type: 'add',
    //   type: 'product/updateList',
    //   payload:currentProduct
    // })
    this.props.dispatch(productUpdatelist(currentProduct))
  }
  clickGoToHandler=(event)=>{
    this.props.history.push('/')
  }

  clickGoToReduxHandler=(event)=>{
    this.props.dispatch(routerRedux.push('/'))
  }

  clickProductListAysnc=(event)=>{
      // console.log(563165)
    const currentProduct={
      name:"玉米2"
    }
    this.props.dispatch({
      // type: 'add',
      type: 'product/updateListAsync',
      payload:currentProduct
    })
  }
  clickProductListAysncHttp=(event)=>{

  this.props.dispatch({
    // type: 'add',
    type: 'product/updateListAsync2',
    payload:{id:1001}
  })
}
  render() {
    const {productList}=this.props.productList;
    // console.log(this.props.dispatch)
    return (
      <div>
        Product商品:{this.props.title}
        <ul>
          {
           productList.map((element,index)=>{
            return <li key={index}>{element.name}</li>
           })
          }


        </ul>
        <button onClick={this.clickProductList}> 获取商品列表</button>
        <Link to="/">  去首页</Link>
        <button onClick={this.clickGoToHandler}> 去首页</button>
        <button onClick={this.clickGoToReduxHandler}>routerRedux 去首页</button>
        <button onClick={this.clickProductListAysnc}>异步操作方法</button>
        <button onClick={this.clickProductListAysncHttp}>异步操作方法2</button>



        
      </div>
    );
  }
}
export default withRouter(Product);