import React, { Component } from 'react'

export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="register-page">
                   <form>
                   <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">First Name</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="First Name" required/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Last Name</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Last Name" required/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" required/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" required/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required  />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" required/>
                        </div>
                        <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control" required>
                            <option selected>Choose...</option>
                            <option>Tamil Nadu</option>
                            <option>Kerla</option>
                            <option>Karnataka</option>
                        </select>
                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" required/>
                        </div>
                    </div>
                   
                    <button type="button" class="btn btn-outline-danger">Sign In</button>
                    </form>
            </div>
        )
    }
}

export default Register
