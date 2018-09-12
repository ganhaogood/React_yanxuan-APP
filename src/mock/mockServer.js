import Mock from 'mockjs'
import apiData from './msite'
import shiwuData from './datashiwu'
import fenleiData from './datafenlei'


//首页
//apiData.headCateList 返回的是一个数组
Mock.mock('/headcatelist',{code:0,data:apiData.headCateList})
Mock.mock('/policydesclist',{code:0,data:apiData.policyDescList})
Mock.mock('/totalnum',{code: 0,data: 13241})
Mock.mock('/speciallycatelist',{code:0,data:apiData.speciallyCateList})
Mock.mock('/taglist',{code:0,data:apiData.tagList})
Mock.mock('/topiclist',{code:0,data:apiData.topicList})
Mock.mock('/newitemnewuserlist',{code:0,data:apiData.newItemNewUserList})

//识物
Mock.mock('/banner',{code:0,data:shiwuData.banner})
Mock.mock('/column',{code:0,data:shiwuData.column})
Mock.mock('/recommendOne',{code:0,data:shiwuData.recommendOne})
Mock.mock('/recommendthree',{code:0,data:shiwuData.recommendThree})
Mock.mock('/recommendtwo',{code:0,data:shiwuData.recommendTwo})

Mock.mock('/zhenone',{code:0,data:shiwuData.zhenOne})
Mock.mock('/zhentwo',{code:0,data:shiwuData.zhenTwo})
Mock.mock('/zhenthree',{code:0,data:shiwuData.zhenThree})
Mock.mock('/yxlook',{code:0,data:shiwuData.yxLook})
Mock.mock('/tenfifteen',{code:0,data:shiwuData.tenfifteen})

//分类
Mock.mock('/categoryl1list',{code:0,data:fenleiData.categoryL1List})
Mock.mock('/categoryl2list',{code:0,data:fenleiData.categoryL2List})
