import React, { Component } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../pages/Home/Home'
import Cart from '../components/cart/Cart'
import { Route,BrowserRouter as Router,Switch } from  'react-router-dom';

class Routes extends Component
{
    render()
        {
            return(
                <Router>
                    <div>
                        <Header/>
                    </div>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Cart" component={Cart}/>
                    <Home />
                    </Switch>
                    <div>
                        <Footer/>
                    </div> 
                </Router>
            );
        }
}
export default Routes;