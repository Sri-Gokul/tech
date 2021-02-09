import './App.css';
import React  from 'react';
import Register from "./components/Register";
import Login from "./components/Login";
import Product from "./components/Product";
import { BrowserRouter, Route } from "react-router-dom"
import Productview from './components/Productview';



class App extends React.Component{
  constructor(props) {
    super(props)
         
    this.state = {
       data:''
    }
  }
  
render()
 {
  
  return (
    <div className="App">

            <BrowserRouter>
                <switch>
                  <Route exact path="/" component={Login}/> 
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/product" component={Product}/>
                  <Route exact path="/products/:id" component={Productview} />
                
                  </switch>
            </BrowserRouter>
         
    </div>
  );
  }
}

export default App;
