import React, { Component } from "react"
import ProductCard from "../components/productCard"
import { PRODUCTS_API } from "../constants/APIS"

export default class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch(PRODUCTS_API)
      .then(response=>response.json())
      .then(responseAsJsonFormat=>{
          this.setState({
              products: responseAsJsonFormat.search_response.items.Item
          })
      }).catch(error=>{
        console.log(error)
      })
  }
//  can be conditionally rendered while showing a spinner(or lazy loading cards) until products are loaded
  render() {
    return (
      <div className="products-grid">
        {this.state.products.map(product => (
          <ProductCard productDetails={product} key={product.dpci}/>
        ))}
      </div>
    );
  }
}
