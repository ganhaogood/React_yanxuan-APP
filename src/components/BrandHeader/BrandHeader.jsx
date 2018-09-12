import React,{Component} from 'react'
import './BrandHeader.css'

class BrandHeader extends Component{
  render(){
    return(
      <div className="brand01">
        <div className="brand_header">
          <span className="brand_header_item">品牌制造商直供</span>
          <i className="iconfont icon-right_b"/>
        </div>
      </div>
    )
  }
}

export default BrandHeader