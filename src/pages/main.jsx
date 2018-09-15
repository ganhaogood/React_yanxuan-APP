import React,{Component} from 'react'
import Knowledge from "./Knowledge/Knowledge";
import Personal from "./Personal/Personal";
import Classify from "./Classify/Classify";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Home from "./Home/Home";
import FooterNav from '../components/FooterNav/FooterNav.jsx'
import {Switch,Route,Redirect} from 'react-router-dom'

import {withRouter} from 'react-router-dom'
import './main.css'

class Main extends Component{
  toTop(){
    document.getElementById("view").scrollIntoView();
    console.log(1111)
  }

  render(){
    const path = this.props.location.pathname
    console.log(path)


    return(
      <div className='wrapContainer' id='view'>
        <Switch>
          <Route path='/classify' component={Classify}/>
          <Route path='/knowledge' component={Knowledge}/>

          <Route path='/personal' component={Personal}/>
          <Route path='/shoppingcart' component={ShoppingCart}/>
          <Route path='/home' component={Home}/>
          <Redirect to='/knowledge'/>
        </Switch>

        <div className='footerbarH'>
          {
            path==='/personal'?null :<FooterNav/>
          }

          {path==='/home' ?
            <div className='footerbarContainer'>
              <a className='iconfont icon-liwu' href='http://m.you.163.com/gift/newWapUserGift'/>
              <a className='iconfont icon-top' name="view" href='#view' target="_self"/>
            </div>
            :null
          }
        </div>

      </div>
    )
  }
}

export default withRouter(Main)