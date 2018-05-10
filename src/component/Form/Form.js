import React, { Component } from 'react';
import './form.css'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            img: '',
            productName: '',
            price: 0,
            bckgrndimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOyYpYBhnNhfU5ONu6wXoQO3m6gDsbtVRICthpUJ5sp5XOnzt'
        }
    }
    reset(){
        this.setState({
            img: '',
            productName: '',
            price: 0,
            bckgrndimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOyYpYBhnNhfU5ONu6wXoQO3m6gDsbtVRICthpUJ5sp5XOnzt'
        })
    }
  render(){
        return (
            <div className='Form'>
            <div className='form_img_preview'>
                <img src={this.state.bckgrndimg} alt={this.state.productName}/>
            </div>
            <p>Image URL:</p>
            <input type='text' onChange={(e)=>{this.setState({img: e.target.value, bckgrndimg: e.target.value})}} value={this.state.img}></input>
            <p>Product Name:</p>
            <input type='text' onChange={(e)=>{this.setState({productName: e.target.value})}} value={this.state.productName}></input>
            <p>Price:</p>
            <input type='text' onChange={(e)=> {this.setState({price: e.target.value})}} value={this.state.price}></input>
            <div className='form_button_box'>
                <button onClick={()=>{this.reset()}}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
            </div>
        )
    }
}