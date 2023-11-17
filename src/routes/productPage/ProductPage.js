import React, { Component } from 'react'
import Product from '../../components/Product'
import {connect} from "dva"

class ProductPage extends Component {
  render() {
    // console.log(this.props)
  const {productList,dispatch} = this.props;
  // console.log(productList);


  
    return (
      
      <div>
        <Product dispatch={dispatch} title="商品类型"  productList={productList}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productList:state.product
  }
}

export default connect(mapStateToProps)(ProductPage);