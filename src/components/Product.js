import React, { Component } from 'react'
import Nav from "./Nav"
import axios from "axios"
import Like from './Like';
import { Link } from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[],
             cost:0,
             count:0,
             like:0,
             search:''
        };
        
    }
    
    componentDidMount(){
        axios.get("https://bdtech.herokuapp.com/api/product/")
        .then((res) => {
            this.setState({
                products:res.data,
            })
        })
    }
    count =(e) => {
        this.setState({
            count:this.state.count+1 
        })
    }


    all =() => {
        this.setState({
            cost:0
        })
    }
    low =() => {
        this.setState({
            cost:14000
        })
    }
    normal =() => {
        this.setState({
            cost:30000
        })
    }
    high =() => {
        this.setState({
            cost:40000
        })
    }

    render() {
        
        return (
            <div>
            <Nav count={this.state.count} />
            <br></br>
            
            <div classNameName="product-page">
            <h1 classNameName="welcome">Welcome to Tech World</h1><br></br>
            <div id="myBtnContainer">
                    <button className="btnn active" onClick={this.all} > Show all</button>
                    <button className="btnn" onClick={this.low} > Above 15K</button>
                    <button className="btnn" onClick={this.normal} > Above 30k</button>
                    <button className="btnn" onClick={this.high} > Above 40k</button>
                    {/* <button className="btnn" onclick="filterSelection('colors')"> Colors</button> */}
                </div>
                <div className="container">

                    <div className="row">
                  
                    {this.state.products.map((product) => ( 
                        <div key = {product.id} > 
                        {this.state.cost < product.newcost ? ( 
                    <div  className="product col-auto" >
                    
                           
                        <div  className="front">
                              
                        <span className="new">New</span>
                         
                        <div className="img-wrap">
                            
                            <img src={product.image} alt={product.name} height="200" width="250"/>
                            <i className="fa fa-shopping-basket fav"></i>
                        </div>
                        <div className="description clearfix">
                            <span className="discount">-{product.discount}%</span>
                            <span  className="discountt" onClick={this.count} value={this.state.count}>ADD CART</span> 
                            <div className="content">
                            <Link to={`/productt/${product.id}`}>
                             <h3> {product.name} </h3>
                            </Link>
                            <p>{product.descripition} </p>
                            </div>
                            <div className="price">
                            <span className="old-price"><del>₹{product.oldcost}</del></span><span className="new-price">₹{product.newcost}</span>
                            </div>
                            <div>
                             
                             </div>
                            <div className="quick-detail" data="1">
                            <i className="fa fa-arrow-right"></i>
                            </div>
                        </div> 
                        <div>
                                <Like likeno={product.like} no={product.id} />
                            </div>
                    </div>
                           
                   </div>
                      ):null}</div>
                    ))}
                    </div>
                    {/* <!-- /row --> */}
                    
              </div>
{/* <!-- /container --> */}
            </div>
            </div>
        )
    }
}

export default Product
