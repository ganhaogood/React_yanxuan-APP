/*
包含多个用于生成新的state的reducer函数的模块
 */
import {combineReducers} from 'redux'
import {
  GET_HEAD_CATE_LIST,
  GET_TAG_LIST,
  GET_NEW_ITEM_NEWUSER_LIST,
  GET_TOPIC_LIST,
  GET_SPECIALLY_CATELIST,
  GET_RECOMMEND_ONE,
  GET_BANNER,
  GET_COLUMN,
  GET_RECOMMEND_THREE,
  GET_RECOMMEND_TWO,
  GET_ZHEN_ONE,
  GET_ZHEN_TWO,
  GET_ZHEN_THREE,
  GET_YX_LOOK,
  GET_CATEGORY_L1_LIST
} from './action-types'

//初始化状态
const initState = {
  HeadCateList:[],  //头部导航信息
  TagList:[],
  NewItemNewUserList:[],
  TopicList:[],
  SpeciallyCateList:[],
  RecommendOne:{},
  RecommendThree:{},
  RecommendTwo:{},
  banner:[],
  column:[],
  zhenOne:{},
  zhenTwo:{},
  zhenThree:{},
  yxLook:{},
  categoryL1List:[]
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
    case GET_RECOMMEND_ONE:
      return {...state,RecommendOne:action.data}
    case GET_BANNER:
      return {...state,banner:action.data}
    case GET_COLUMN:
      return {...state,column:action.data}
    case GET_RECOMMEND_THREE:
      return {...state,RecommendThree:action.data}
    case GET_RECOMMEND_TWO:
      return {...state,RecommendTwo:action.data}
    case GET_ZHEN_ONE:
      return {...state,zhenOne:action.data}
    case GET_ZHEN_TWO:
      return {...state,zhenTwo:action.data}
    case GET_ZHEN_THREE:
      return {...state,zhenThree:action.data}
    case GET_YX_LOOK:
      return {...state,yxLook:action.data}
    case GET_CATEGORY_L1_LIST:
      return {...state,categoryL1List:action.data}
    default :
      return state
  }
}



// 返回合并后的reducer函数
export default combineReducers({
  info
})
