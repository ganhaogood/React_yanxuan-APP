import React,{Component} from 'react'
import './Featured.css'

import {connect} from 'react-redux'
import {getTopicList} from '../../../redux/actions'
import BScroll from 'better-scroll'

class Featured extends Component{

  componentDidMount(){
    this.props.getTopicList()

    new BScroll('.featured',{
      click:true,
      scrollX:true
    })
  }
  render(){
    const {TopicList} = this.props.info
    return(
      <div className="featured">
        <div className="featurdeContainer">
          {
            TopicList.map((item,index)=>{
              return(
                <div className="featured_content" key={index}>
                  <a href={item.linkUrl} className="featured_content_item">
                    <img src={item.itemPicUrl}/>
                    <div className="featured_content_item_div">
                      <p className="featured_content_item_p">{item.title}</p>
                      <p className="featured_content_item_p small">{item.subtitle}</p>
                    </div>
                    <span className="featured_content_item_price">{item.priceInfo}元起</span>
                  </a>
                </div>
              )
            })
          }
      </div>
    </div>
    )
  }
}

export default connect(
  state=>({info:state.info}),
  {getTopicList}
)(Featured)
