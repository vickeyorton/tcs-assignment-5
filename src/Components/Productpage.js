import React, { Component } from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo/ProductInfo';

export class ProductPage extends Component {

    componentDidMount(){
        axios.get(`http://localhost:8900/products/${this.props.match.params.id}`)
                        .then(res => res.data)
                        .then(res => this.setState({
                            food:res
                        }))
                        .catch(err => console.error(err)); // promise
    }

    constructor(props){
        super(props);
        this.state={
            food:{}
        }
    }

    render() {
        return (
            <div>
                <ProductInfo product={this.state.food}/>
            </div>
        )
    }
}

export default ProductPage
