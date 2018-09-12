import React,{Component} from 'react'
import './HomeSpecially.css'

import {connect} from 'react-redux'

import {getSpeciallyCateList} from '../../../redux/actions'

import SlotDiv from '../../../components/SlotDiv/SlotDiv'

class HomeSpecially extends Component{
  componentDidMount(){
    this.props.getSpeciallyCateList()
  }

  render(){
    const {SpeciallyCateList} = this.props.info

    return(
      <div className="homeSpeciallyCotainer">
        {
          SpeciallyCateList.map((list,index)=>{
            return(
              <div className="home_good" key={index}>
                <div className="header_good">{list.name}</div>
                <ul className="home_good_content">
                  {
                    list.itemList.map((item,index)=>{
                      return(
                        <li className="home_good_content_item" key={index}>
                          <div className="home_good_content_item_header">
                            <img className="home_good_content_item_img" src={item.listPicUrl} alt=""/>
                            <p className="home_good_content_item_position">{item.simpleDesc}</p>
                          </div>
                          {item.promTag ? <span className={item.promTag === '爆品'?'active_red':'active_orange'}>{item.promTag}</span> :null}
                          <p className="kg">{item.name}</p>
                          <p className="price">￥{item.retailPrice}</p>
                        </li>
                      )
                    })
                  }
                </ul>
                <SlotDiv/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default connect(
  state=>({info:state.info}),
  {getSpeciallyCateList}
)(HomeSpecially)