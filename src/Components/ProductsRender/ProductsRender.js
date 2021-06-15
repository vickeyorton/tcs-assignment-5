import React from "react";
import {Link} from 'react-router-dom';
import './ProductsRender.css';

function ProductsRender(props) {
  const ProductLoad = ({ pro }) => {
    if (pro) {
      return pro.map((data) => {
        return (
          <div className="col-sm-12 col-md-3 justify-center" key={data.id}>
            <Link to={`/product${data.id}`} className="width-100" key={data.id}>
              <div className="card" >
                <img
                  className="card-img-top"
                  src={data.pic}
                  alt={data.name}
                  
                ></img>
                <div className="card-body">
                  <h5 className="card-title" >{data.name}</h5>
                  <p className="price-text" >Rs:{data.price}</p>
                  <Link
                    key={data.id}
                    to={`/product${data.id}`}
                    className="width-100 card-text btn btn-outline-success"
                  >
                    Quick View
                  </Link>
                  {/* <a href="/" className="btn btn-primary">
                    ADD
                  </a> */}
                </div>
              </div>
            </Link>
          </div>
        );
      });
    }
  };

  return (
    <div className="col">
      <div className="row">{ProductLoad(props)}</div>
    </div>
  );
}


export default ProductsRender;
