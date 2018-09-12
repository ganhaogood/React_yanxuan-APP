import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import './HomeNav.css'

import {getheadCateList} from '../../../redux/actions'

//引入better-scroll
import BScroll from 'better-scroll'
import 'better-scroll/dist/bscroll.min'

//引入Swiper
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'


class HomeNav extends Component{

  componentDidMount(){
    //获取头部横向滑动的数据
    this.props.getheadCateList()

    //头部横向滑动
    this.BS = new BScroll('.wrapper',{
      click:true,
      scrollX:true
    })

  }
  componentDidUpdate(){
    //轮播图
    this.Swiper = new Swiper('.swiper-container',{
      pagination: {
        el: '.swiper-pagination',
      },
      loop:true,
      autoplay: true
    })
  }

  render(){
    const {HeadCateList} = this.props.info
    const path = this.props.location.pathname
    console.log(path)
    return(
      <div className="nav_content">
        <div className="nav_yanxuan">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" className="logo"/>
          <div className="searchItem">
            <span className="iconSearch iconfont icon-search"/>
            <span className="searchFont">搜索商品，共12346款好物</span>
          </div>
        </div>
        <div className="wrapper">
          <ul className="nav_tab">
            {
              HeadCateList.map((item,index)=>{
                return(
                  <li className="nav_tab_item" key={index} onClick={()=>this.props.history.replace(`/home/${index}`)}>
                    <span className="nav_tab_item_span">{item.name}</span>
                    <span className={`/home/${index}` === path ? 'line':''}/>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <nav className="home_nav border-1px">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                HeadCateList.map((item,index)=>{
                  return(
                    <div className="swiper-slide" key={index}>
                      <a href="javascript:">
                        <img src={item.bannerUrl}/>
                      </a>
                    </div>
                  )
                })
              }
            </div>
            <div className="swiper-pagination"/>
          </div>
        </nav>
        <div className="nav_description">
          <div className="nav_footer ziying">
            <i className="iconfont icon-duigou icon01"/>
            <span>网易自营品牌</span>
          </div>
          <div className="nav_footer ziying">
            <i className="iconfont icon-duigou icon01"/>
            <span>30天无忧退货</span>
          </div>
          <div className="nav_footer ziying">
            <i className="iconfont icon-duigou icon01"/>
            <span>48小时快速退款</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(
  state =>({info:state.info}),
  {getheadCateList}
  )(HomeNav))
