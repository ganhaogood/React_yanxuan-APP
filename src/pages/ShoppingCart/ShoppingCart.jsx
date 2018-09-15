import React,{Component} from 'react'

import './ShoppingCart.css'
export default class ShoppingCart extends Component{
  render(){
    return(
      <div className="ShoppingCartContainer">
        <div className="wrap">

          <div className="wrap_header">
            <span className="wrap_header_span">购物车</span>
            <a className="wrap_header_a" href="/">领券</a>
          </div>

          <ul className="wrap_title">
            <li>30天无忧退货</li>
            <li>48小时快速退款</li>
            <li>满88元免邮费</li>
          </ul>

          <div className="wrap_content">
            <img className="wrap_img" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"/>
              <p className="title">去添加点什么吧</p>
              <div className="login" onClick={()=>this.props.history.replace('/personal')}>登录</div>
        </div>
      </div>
  </div>
    )
  }
}