import React ,{Component} from 'react'

import './ClassifyNav.css'

export default class ClassifyNav extends Component{
  render(){
    return(
      <div className="NavContainer">
        <div className="inputContent">
          <i className="iconfont icon-search"/>
          <span className="placeHolder">搜索商品, 共13245款好物</span>
        </div>
      </div>
    )
  }
}