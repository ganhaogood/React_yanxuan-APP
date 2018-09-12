
import {
  GET_HEAD_CATE_LIST,
  GET_TAG_LIST,
  GET_NEW_ITEM_NEWUSER_LIST,
  GET_TOPIC_LIST,
  GET_SPECIALLY_CATELIST
} from "./action-types"

import {
  reqHeadCateList,
  reqNewItemNewUserList,
  reqTagList,
  reqTopicList,
  reqSpeciallyCateList
} from "../api"

//定义同步的action

const get_HeadCateList = (HeadCateList) =>({type:GET_HEAD_CATE_LIST,data:HeadCateList})
const get_TagList =(tagList) =>({type:GET_TAG_LIST,data:tagList})
const get_NewItemNewUserList = (NewItemNewUserList) =>({type:GET_NEW_ITEM_NEWUSER_LIST,data:NewItemNewUserList})
const get_TopicList = (TopicList) =>({type:GET_TOPIC_LIST,data:TopicList})
const get_SpeciallyCateList = (SpeciallyCateList) =>({type:GET_SPECIALLY_CATELIST,data:SpeciallyCateList})


//获取头部导航信息
export const getheadCateList = () =>{
  return async dispatch =>{
    const result = await reqHeadCateList()
    console.log(11)
    if(result.code === 0){
      const HeadCateList = result.data
      dispatch(get_HeadCateList(HeadCateList))
    }
  }
}

//获取异步的
export const getTagList = () =>{
  return async dispatch =>{
    const result = await reqTagList()
    if(result.code ===0){
      const TagList = result.data
      dispatch(get_TagList(TagList))
    }
  }
}

export const getNewItemNewUserList = () =>{
  return async dispatch =>{
    const result = await reqNewItemNewUserList()
    if(result.code ===0){
      const NewItemNewUserList = result.data
      dispatch(get_NewItemNewUserList(NewItemNewUserList))
    }
  }
}

export const getTopicList = () =>{
  return async dispatch =>{
    const result = await reqTopicList()
    if(result.code ===0){
      const TopicList = result.data
      dispatch(get_TopicList(TopicList))
    }
  }
}

export const getSpeciallyCateList = () =>{
  return async  dispatch =>{
    const result = await reqSpeciallyCateList()
    if(result.code === 0){
      const SpeciallyCateList = result.data
      dispatch(get_SpeciallyCateList(SpeciallyCateList))
    }
  }
}
