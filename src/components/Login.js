import React, { Component } from 'react';
import Nav from "./Nav"

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             password:'',
             data: true
             
        }
        this.login=this.login.bind(this);
        this.name=this.name.bind(this);
        this.password=this.password.bind(this);
    }
    
    
    login(){
        const name = this.state.name;
        const password = this.state.password;
        if(name==="gokul" & password==="password"){
            this.setState({
                data:!this.state.data
            });
            window.location.href="/product"
        }
        else{
            alert("WRONG PASSWORD OR USERNAME")
        }
    }

    name(e){
        this.setState({
            name:e.target.value,
            
        })
    }
    password(e){
        this.setState({
            
            password:e.target.value,
        })
    }
    render() {
        return (
         <div>
            <Nav data = { this.state.data } />

            <div className="login-page">
               
                <div class="alert alert-danger" role="alert">
                 <b>LOGIN </b>
               </div>

               <form>

                <div class="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" onChange={this.name}  placeholder="User Name" required/>
                    
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={this.password}  placeholder="Password" required/>
                </div>
               
                <button type="button" onClick={this.login} className="btn btn-outline-danger">Login</button>

                </form>


                <br></br>
                <a href="/register">
                <label>CREATE NEW ACCOUNT</label>
                </a>
            </div>
         </div>
        )
    }
}

export default Login

