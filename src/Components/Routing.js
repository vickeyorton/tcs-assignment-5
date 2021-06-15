import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../Home';
import Header from './Header/Header';
import ProductPage from './Productpage';

export class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/product:id" component={ProductPage}/>
                
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing
