import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {getCategoryL1List} from '../../../redux/actions'
import BScroll from 'better-scroll'

import './ClassifyList.css'

class ClassifyList extends Component{
  componentDidMount(){
    this.props.getCategoryL1List()
  }
  componentDidUpdate(){
    //保存到this上，形成单利对象，如果存在，不在new
    if(this.BS){
      return
    }
    this.BS = new BScroll('.listContainer',{
      click:true,
    })
  }

  render(){
    const {categoryL1List}  = this.props.info
    const path = this.props.location.pathname
    console.log(path)
    return(
      <div className="listContainer">
        <div className="listContainerWrap">
          {
            categoryL1List.map((item,index)=>{
              return(
                <div key={index} className="listItem" key={index} onClick={()=>this.props.history.replace(`/classify/${index}`)}>


                  <span className={`/classify/${index}` === path ? 'class_item_span red_font':'class_item_span'}>{item.name}</span>
                  <span className={`/classify/${index}` === path ? 'red_line':''}/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default withRouter(connect(
  state=>({info:state.info}),
  {getCategoryL1List}
)(ClassifyList))