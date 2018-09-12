import React,{Component} from 'react'

import {withRouter,NavLink} from 'react-router-dom'
import '../../assets/css/footernav.css'

class FooterNav extends Component{

  render(){

    return(
      <div className="footerContainer">
        <NavLink className={`guide_item ${this.props.location.pathname==='/home'? 'on':''}`} to='/home'>
          <span className="footerItem">
            <i className="iconfont icon-shouye"/>
          </span>
          <span className="fontSize">首页</span>
        </NavLink>

        <NavLink className={`guide_item ${this.props.location.pathname==='/knowledge'?'on':''}`} to='/knowledge'>
          <span className="footerItem">
            <i className="iconfont icon-pingbandiannao"/>
          </span>
          <span className="fontSize">识物</span>
        </NavLink>

        <NavLink className={`guide_item ${this.props.location.pathname==='/classify'? 'on':''}`} to='/classify'>
          <span className="footerItem">
            <i className="iconfont icon-liebiaofenlei"/>
          </span>
          <span className="fontSize">分类</span>
        </NavLink>

        <NavLink className={`guide_item ${this.props.location.pathname==='/shoppingcart'? 'on':''}`} to='/shoppingcart'>
          <span className="footerItem">
            <i className="iconfont icon-gouwuche"/>
          </span>
          <span className="fontSize">购物车</span>
        </NavLink>

        <NavLink className={`guide_item ${this.props.location.pathname==='/personal'? 'on':''}`} to="/personal">
          <span className="footerItem">
            <i className="iconfont icon-geren"/>
          </span>
          <span className="fontSize">个人</span>
        </NavLink>

  </div>
    )

  }
}

export default withRouter(FooterNav)