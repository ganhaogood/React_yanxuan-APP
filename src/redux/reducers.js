/*
包含多个用于生成新的state的reducer函数的模块
 */
import {combineReducers} from 'redux'
import {
  GET_HEAD_CATE_LIST,
  GET_TAG_LIST,
  GET_NEW_ITEM_NEWUSER_LIST,
  GET_TOPIC_LIST,
  GET_SPECIALLY_CATELIST
} from './action-types'

//初始化状态
const initState = {
  HeadCateList:[],  //头部导航信息
  TagList:[],
  NewItemNewUserList:[],
  TopicList:[],
  SpeciallyCateList:[]
}

function info(state = initState, action) {
  switch (action.type){
    case GET_HEAD_CATE_LIST:
      return {...state,HeadCateList:action.data}
    case GET_TAG_LIST:
      return{...state,TagList:action.data}
    case GET_NEW_ITEM_NEWUSER_LIST:
      return {...state,NewItemNewUserList:action.data}
    case GET_TOPIC_LIST:
      return {...state,TopicList:action.data}
    case GET_SPECIALLY_CATELIST:
      return {...state,SpeciallyCateList:action.data}
    default :
      return state
  }
}



// 返回合并后的reducer函数
export default combineReducers({
  info
})
