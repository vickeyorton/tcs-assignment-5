import React, { Component } from "react";
import "./ProductInfo.css";

class ProductInfo extends Component {

  render() {
    const ProductRender = ({ product }) => {
      if (product) {
        return (
          <div className="padding-20 col">
            <div className="justify-center">
              <img src={product.pic} alt={product.name}></img>
            </div>

            <h2>{product.name}</h2>
            <div className="padding-10">
              <h3>Rs:{product.price}</h3>
              <button className="btn btn-warning ">ADD</button>
            </div>
            <p>{product.description}</p>
          </div>
        );
      }
    };

    return (
      <div className="col">
        <div className="row">
        {ProductRender(this.props)}
        {console.log("------",this.props)}
        </div>
      </div>
    );
  }
}

export default ProductInfo;
