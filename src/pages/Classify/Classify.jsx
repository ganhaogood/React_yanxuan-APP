import React ,{Component} from 'react'

import ClassifyNav from './ClassifyNav/ClassifyNav'
import ClassifyList from './ClassifyList/ClassifyList'
import ClassifyContent from './ClassifyContent/ClassifyContent'

export default class Classify extends Component{
  render(){
    return(
      <div>
        <ClassifyNav/>
        <ClassifyList/>
        <ClassifyContent/>
      </div>
    )
  }
}