import React,{Component} from 'react'

import {connect} from 'react-redux'
import {getNewItemNewUserList} from "../../../redux/actions";

import './NewProduct.css'

import BScroll from 'better-scroll'

class NewProductT extends Component{

  componentDidMount(){
    this.props.getNewItemNewUserList()
  }
  componentDidUpdate(){
    new BScroll('.swiperWapper0',{
      click:true,
      scrollX:true
    })
  }

  render(){

    const {NewItemNewUserList} =this.props.info


    return(
      <div className="newProductContainer">
        <div className="new_product new_product01">
          <p className="new_product_starting">人气推荐 好物精选</p>
          <a href="/" className="new_product_alert">
            <span>查看全部</span>
            <i className="iconfont icon-go"/>
          </a>
        </div>

        <div className="swiperWapper0">
          <div className="swiper_Landscape">
            {/*newItemNewUserList*/}
            {
              NewItemNewUserList.map((item,index)=>{
                return(
                  <a href="/" className="swiper_Landscape_item" key={index}>
                    <img src={item.listPicUrl}/>
                    <p className="type_color">
                      {/*如果是新品，是红色 active_red  active_orange*/}
                      {
                        item.itemTagList.map((it,index)=>{
                          return(
                            it.name ? <span className={it.name ==='新品' ? 'active_red':'active_orange'} key={index}>{it.name}</span> :null
                          )
                        })
                      }
                    </p>

                    <p className="swiper_Landscape_item_margin">{item.name}</p>
                    <p className="swiper_Landscape_item_margin">{item.simpleDesc}</p>
                    <span className="swiper_Landscape_item_margin swiper_Landscape_item_price">￥{item.retailPrice}</span>
                  </a>
                )
              })
            }
      </div>
  </div>
      </div>
    )
  }
}

export default connect(
  state =>({info:state.info}),
  {getNewItemNewUserList}
)(NewProductT)
    