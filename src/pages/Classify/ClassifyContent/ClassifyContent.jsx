import React ,{Component} from 'react'

import './ClassifyContent.css'
import {getCategoryL1List} from '../../../redux/actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class ClassifyContent extends Component{
  componentDidMount(){
    this.props.getCategoryL1List()
  }

  render(){
    const {categoryL1List} = this.props.info
    const path = this.props.location.pathname
    let index = path.split('/')[2]
    console.log(index)
    return(
      <div className="contentContainer">

        <div className="contentWrap">
          <div className="contentItemHeader">
            {
              categoryL1List[index] ? <img src={categoryL1List[index].bannerUrl}/>:null
            }

          </div>

          <div className="contentItem">
            <div className="contentItem_item">
              {
                categoryL1List[index] ? (categoryL1List[index].subCateList.map((item,index)=>{
                  return(
                    <a href="/" className="contentItem_item_a" >
                      <img className="contentItem_item_a_img" src={item.wapBannerUrl} alt="logo"/>
                      <p className="contentItem_item_a_p">{item.frontName}</p>
                    </a>
                  )
                }) ):null
              }
          </div>
        </div>
      </div>
  </div>
    )
  }
}

export default withRouter(connect(
  state=>({info:state.info}),
  {getCategoryL1List}
)(ClassifyContent))