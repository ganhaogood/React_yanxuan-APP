import React,{Component} from 'react'

import {connect} from 'react-redux'

import {getTagList} from '../../../redux/actions'

import './BrandContent.css'

class BrandContent extends Component{
  componentDidMount(){
    this.props.getTagList()
  }

  render(){
    const {TagList} = this.props.info
    return(
      <div className="brand">
        <div className="brand_content">
          {
            TagList.map((item,index)=>{
              return(
                <a href="/" className="brand_content_item" key={index}>
                  <img src={item.picUrl} alt=""/>
                  <div className="brand_content_item_div">
                    <p className="brand_content_item_margin brand_content_item_p">{item.name}</p>
                    <p className="brand_content_item_margin">{item.floorPrice}元起</p>
                    <p className="brand_content_item_margin brand_content_item_border">上新</p>
                  </div>
                </a>
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
  {getTagList}
)(BrandContent)