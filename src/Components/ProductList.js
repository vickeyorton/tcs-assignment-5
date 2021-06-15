import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import ProductsRender from './ProductsRender/ProductsRender';

export class ProductList extends Component {
    componentDidMount(){
        this.props.getProducts();
    }

    render() {
        return (
            <div>
                {this.props.isloading ? 
                <Loading/> : ""}
                {this.props.mylist ? 
                <ProductsRender pro={this.props.mylist}/>
                :""}
            </div>
        )
    }
}

const mapStatToProps = (state) =>{
    return{
        state,
        mylist: state[0].products,
        isloading:state[0].isloading
        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getProducts:()=>{
            dispatch({type:'GET_LOAD'});
        }
    }
}

export default connect(mapStatToProps,mapDispatchToProps)(ProductList);
