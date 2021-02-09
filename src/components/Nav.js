import React  from 'react';


class Nav extends React.Component{
    constructor(props) {
      super(props)
           
      this.state = {
         data:this.props.data,
         search:''
        
      }
    }
    
    search = (e) =>{
      this.setState({
        search:e.target.value
      })
    }
  render()
   {
    const  data  = this.state.data;
    console.log(data);
    
    return (
      <div className="App">
                  <div className="nav-bar">
                  <nav class="navbar navbar-expand-lg navbar-light ">
                 
                  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                      <a class="navbar-brand" href="#">TECH WORLD</a>
                      <div className="nav-margin">
                      <form class="form-inline my-2 my-lg-0">
                      <input class=" mr-sm-2 nav-input" type="search" placeholder="Search" onChange={this.search} />
                      <button type="button" class="btn btn-outline-danger">Search</button>
  
                      </form>
                      </div>
                   </div> 
                   <a className="link btn" href="/login" > CART <span>{this.props.count}</span></a>
                   <div>
                   { data  ? 
                   <a className="link btn" href="/login" > LOGIN </a>
                   :
                   <a className="link btn" href="/login" > LOGOUT </a>
                   }
                   </div>
                  </nav>
  
              </div>
  
           
      </div>
    );
    }
  }
  
  export default Nav;
  