import React, { Component } from 'react';
import Product from './../Product/Product'
import './dashboard.css'

export default class Dashboard extends Component {
    render(){
        return (
            <div className="dashboard">
                {
                    this.props.inventory.map((product, i) => {
                        return (
                            <div className='Product' key={i}>
                                <img className="product_pic" src={product.url} alt={product.name} />
                                <div className='product_box'>
                                    <p className="product_name">{product.name}</p>
                                    <p className="product_price">${product.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <Product />
            </div>
        )
    }
}