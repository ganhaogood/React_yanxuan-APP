import React,{Component} from 'react'
import './HeaderNav.css'
import {withRouter} from 'react-router-dom'

class HeaderNav extends Component{
  render(){
    return(
      <div className="knowledgeHeader" onClick={()=>this.props.history.replace('/home')}>
    <div className="icon_left">
      <i className="icon_home iconfont icon-home"/>
    </div>
    <div className="icon_middle">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="logo"/>
    </div>
    <div className="icon_right">
      <i className="icon_cart iconfont icon-gouwuche"/>
      <i className="icon_search iconfont icon-search" onClick={()=>this.props.history.replace('/shoppingcart')}/>
  </div>
  </div>
    )
  }
}

export default withRouter(HeaderNav)