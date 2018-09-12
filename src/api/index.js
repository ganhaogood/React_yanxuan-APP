import ajax from './ajax.js'

const BASE = '/api'

/*
首页
 */
//获取头部导航列表
export const reqHeadCateList = ()=>ajax('/headcatelist')
export const reqPolicyDescList = ()=>ajax('/policydesclist')
export const reqTotalNum = () =>ajax('/totalnum')
//品牌制造商直供
export const reqTagList = () =>ajax('/taglist')
//专题精选
export const reqTopicList = () =>ajax('/topiclist')
export const reqSpeciallyCateList = () =>ajax('/speciallycatelist')
export const reqNewItemNewUserList = () =>ajax('/newitemnewuserlist')

/*
识物
 */
export const reqBanner = () =>ajax('/banner')
export const reqColumn = () =>ajax('/column')
export const reqRecommendOne = ()=>ajax('/recommendOne')
export const reqRecommendTwo = ()=>ajax('/recommendtwo')
export const reqRecommendThree = ()=>ajax('/recommendthree')
export const reqZhenOne = ()=>ajax('/zhenone')
export const reqZhenTwo = ()=>ajax('/zhentwo')
export const reqZhenThree = ()=>ajax('/zhenthree')
export const reqYxLook = ()=>ajax('/yxlook')
export const reqTenfifteen = ()=>ajax('/tenfifteen')

/*
分类
 */
export const reqCategoryL1List = ()=>ajax('/categoryl1list')
export const reqCategoryL2List = ()=>ajax('/categoryl2list')
