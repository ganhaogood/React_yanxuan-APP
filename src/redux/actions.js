
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
} from "./action-types"

import {
  reqHeadCateList,
  reqNewItemNewUserList,
  reqTagList,
  reqTopicList,
  reqSpeciallyCateList,
  reqRecommendOne,
  reqBanner,
  reqColumn,
  reqRecommendThree,
  reqRecommendTwo,
  reqZhenOne,
  reqZhenTwo,
  reqZhenThree,
  reqYxLook,
  reqCategoryL1List
} from "../api"

//定义同步的action

const get_HeadCateList = (HeadCateList) =>({type:GET_HEAD_CATE_LIST,data:HeadCateList})
const get_TagList =(tagList) =>({type:GET_TAG_LIST,data:tagList})
const get_NewItemNewUserList = (NewItemNewUserList) =>({type:GET_NEW_ITEM_NEWUSER_LIST,data:NewItemNewUserList})
const get_TopicList = (TopicList) =>({type:GET_TOPIC_LIST,data:TopicList})
const get_SpeciallyCateList = (SpeciallyCateList) =>({type:GET_SPECIALLY_CATELIST,data:SpeciallyCateList})
const get_RecommendOne = (RecommendOne) =>({type:GET_RECOMMEND_ONE,data:RecommendOne})
const get_banner = (banner) =>({type:GET_BANNER,data:banner})
const get_column = (column) =>({type:GET_COLUMN,data:column})
const get_RecommendThree = (RecommendThree) =>({type:GET_RECOMMEND_THREE,data:RecommendThree})
const get_RecommendTwo = (RecommendTwo) =>({type:GET_RECOMMEND_TWO,data:RecommendTwo})
const get_ZhenOne = (zhenOne) =>({type:GET_ZHEN_ONE,data:zhenOne})
const get_ZhenTwo = (zhenTwo) =>({type:GET_ZHEN_TWO,data:zhenTwo})
const get_ZhenThree = (zhenThree) =>({type:GET_ZHEN_THREE,data:zhenThree})
const get_YxLook = (yxLook) =>({type:GET_YX_LOOK,data:yxLook})
const get_categoryL1List = (categoryL1List) =>({type:GET_CATEGORY_L1_LIST,data:categoryL1List})


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

export const getRecommendOne = () =>{
  return async dispatch =>{
    const result = await reqRecommendOne()
    if(result.code === 0){
      const RecommendOne = result.data
      dispatch(get_RecommendOne(RecommendOne))
    }
  }
}

export const getbanner = () =>{
  return async dispatch =>{
    const result = await reqBanner()
    if(result.code ===0){
      const banner = result.data
      dispatch(get_banner(banner))
    }
  }
}
export const getcolumn = () =>{
  return async dispatch =>{
    const result = await reqColumn()
    if(result.code ===0){
      const column = result.data
      dispatch(get_column(column))
    }
  }
}
export const getRecommendThree = () =>{
  return async dispatch =>{
    const result = await reqRecommendThree()
    if(result.code ===0){
      const RecommendThree = result.data
      dispatch(get_RecommendThree(RecommendThree))
    }
  }
}
export const getRecommendTwo = () =>{
  return async dispatch =>{
    const result = await reqRecommendTwo()
    if(result.code ===0){
      const RecommendTwo = result.data
      dispatch(get_RecommendTwo(RecommendTwo))
    }
  }
}
export const getZhenOne = () =>{
  return async dispatch =>{
    const result = await reqZhenOne()
    if(result.code ===0){
      const zhenOne = result.data
      dispatch(get_ZhenOne(zhenOne))
    }
  }
}
export const getZhenTwo = () =>{
  return async dispatch =>{
    const result = await reqZhenTwo()
    if(result.code ===0){
      const zhenTwo = result.data
      dispatch(get_ZhenTwo(zhenTwo))
    }
  }
}
export const getZhenThree = () =>{
  return async dispatch =>{
    const result = await reqZhenThree()
    if(result.code ===0){
      const zhenThree = result.data
      dispatch(get_ZhenThree(zhenThree))
    }
  }
}
export const getYxLook = () =>{
  return async dispatch =>{
    const result = await reqYxLook()
    if(result.code ===0){
      const yxLook = result.data
      dispatch(get_YxLook(yxLook))
    }
  }
}
export const getCategoryL1List = () =>{
  return async dispatch =>{
    const result = await reqCategoryL1List()
    if(result.code ===0){
      const categoryL1List = result.data
      dispatch(get_categoryL1List(categoryL1List))
    }
  }
}
