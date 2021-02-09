import React, { Component } from 'react'
import { GiCherish , GiCharm } from "react-icons/gi";
import Product from './Product'

export class Like extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             no:this.props.no,
             likeno:this.props.likeno,
        }
    }
    
    // componentDidUpdate(prevProps){
    //     if(this.state.id !== prevProps.id){
    //         this.fetchData(this.state.id)
    //     }
    // }

    like =(e) => {
        
        this.setState({
            like:1,
            likeno:this.state.likeno + 1
           });
        console.log("like id",this.state.no)
        const id = this.props.match.params.this.state.no;
        fetch(`https://bdtech.herokuapp.com/api/productupdate/1`,{
            "method":"PATCH",
            "body":JSON.stringify({
                like:this.state.likeno
            })

        })
        .then(Response => Response.json())
          .then(Response => {
              console.log(Response)
                 
          })
          .catch(err => {
              console.log(err);
          })
       
    }
    render() {
        return (
            <div className="likeAb">
               
               <span  className="like" onClick={this.like}>
                                {this.state.like === 1 ? ( <GiCharm/>):( <GiCherish />) }
                                {this.state.likeno}
               </span>
              
                   
            
                            
            </div>
        )
    }
}

export default Like
