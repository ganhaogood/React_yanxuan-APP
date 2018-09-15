import React, {Component} from 'react'
// import {connect} from 'react-redux'

//引入HomeNav组件
import HomeNav from './HomeNav/HomeNav'
import BrandContent from './BrandContent/BrandContent'
import NewProduct from './NewProduct/NewProduct'
import HomeSpecially from './HomeSpecially/HomeSpecially'
import NewProductT from './NewProduct/NewProductT'
import Featured from './Featured/Featured'
import SlotDiv from '../../components/SlotDiv/SlotDiv'
import BrandHeader from '../../components/BrandHeader/BrandHeader'

import './Home.css'
//一会删了
import './delete.css'

export default class Home extends Component{


  render(){
    return(
      <div className='homeContainer'>
        <HomeNav />
        <SlotDiv/>
        <BrandHeader/>
        <BrandContent/>
        <SlotDiv/>
        <NewProduct/>
        <SlotDiv/>
        <NewProductT/>
        <SlotDiv/>
        <div className="limited_time_purchase">
          <div className="limited_time_purchase_left">
            <p className="limited_time_purchase_left_p">严选限时购</p>
            <div className="limited_time_purchase_left_timer">
              <span className="bg_black">01</span>:
              <span className="bg_black">50</span>:
              <span className="bg_black">54</span>
            </div>
            <span>下一场 18:00 开始</span>
          </div>
          <div className="limited_time_purchase_right">
            <img src="http://yanxuan.nosdn.127.net/f853bd86f2e1dc320bb5280a3028c27c.png?imageView&quality=85&thumbnail=330x330" alt=""/>
              <div className="limited_time_purchase_right_price">
                <span className="current_price">￥39</span>
                <span className="delete_price">￥49</span>
              </div>
          </div>
        </div>
        <SlotDiv/>
        <div className="welfare_club">
          <a href="/"></a>
        </div>
        <SlotDiv/>
        <BrandHeader/>
        <Featured/>
        <HomeSpecially/>
        <div className='delete'/>
      </div>
    )
  }
}
