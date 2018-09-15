import React,{Component} from 'react'
import './Knowledge.css'
import SlotDiv from '../../components/SlotDiv/SlotDiv'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import Swiper from 'swiper'

import {
  getRecommendOne,
  getbanner,
  getcolumn,
  getRecommendThree,
  getRecommendTwo,
  getZhenOne,
  getZhenTwo,
  getZhenThree,
  getYxLook
} from '../../redux/actions'


class Knowledge extends Component{
  componentDidMount(){
    this.props.getRecommendOne()
    this.props.getbanner()
    this.props.getcolumn()
    this.props.getRecommendThree()
    this.props.getRecommendTwo()
    this.props.getZhenOne()
    this.props.getZhenTwo()
    this.props.getZhenThree()
    this.props.getYxLook()
    //
    new BScroll('.knowledgeArticleContainer',{
      click:true,
      scrollX:true
    })

  }

  componentDidUpdate(){
    new Swiper('.swiper-container',{
      pagination:{
        el:'.swiper-pagination'
      },
      loop:true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 10
    })

  }

  render(){
    const {
      RecommendOne,
      banner,
      column,
      RecommendThree,
      RecommendTwo,
      zhenOne,
      zhenTwo,
      zhenThree,
      yxLook
    } = this.props.info
    return(
      <div className="knowledgeContainer">
        {/*头部- 网易严选*/}
        <div className="knowledgeHeader">
          <div className="icon_left">
            <i className="icon_home iconfont icon-home"/>
          </div>
          <div className="icon_middle">
            <img alt='img' src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="logo"/>
          </div>
          <div className="icon_right">
            <i className="icon_cart iconfont icon-gouwuche"/>
            <i className="icon_search iconfont icon-search"/>
          </div>
        </div>

        {/*轮播图*/}
    <div className="knowledgeSwiperContainer">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            banner.map((item,index)=>{
              return(
                <div className="swiper-slide" key={index}>
                  <a href="/" className="swiper-slide_div">
                    <img alt='img' src={item.picUrl} alt="ban.subTitle" className="swiper-slide_div_img"/>
                  </a>
                </div>
              )
            })
          }
      </div>
    </div>
    <div className="swiper-pagination"/>
  </div>

        {/*横向滑动*/}
    <div className="knowledgeArticleContainer">
      <div className="knowledge_article">
        {
          column.map((item,index)=>{
            return(
              <div className="knowledge_article_div" key={index}>
                <a href="/" className="knowledge_article_div_a">
                  <div className="knowledge_article_div_a_img">
                    <img src={item.picUrl} alt=""/>
                  </div>
                  <div className="knowledge_article_div_a_font">{item.articleCount}</div>
                  <div className="knowledge_article_div_a_p">{item.title}</div>
                </a>
              </div>
            )
          })
        }
    </div>
  </div>

        {/*凹槽*/}
    <SlotDiv/>

        {/*为你推荐*/}
    <div className="recommend_container_font">为你推荐</div>
    <div className="recommendContainer">
      <div className="YanxuanContainer01">
        <a className="recommend_container_content">
          <div className="yanxuan_tuijian">{RecommendOne.nickname}</div>
          <img src={RecommendOne.picUrl} alt="e" className="recommend_container_img"/>
          <p className="recommend_container_p">
            <span className="recommend_container_p_new">{RecommendOne.title}</span>
            <span className="recommend_container_p_price">{RecommendOne.priceInfo}元起</span>
            <span className="recommend_container_p_des">{RecommendOne.subTitle}</span>
          </p>
        </a>
      </div>
    </div>
        {/*抽取组件*/}
    <div className="shareItContainer">
      <a className="share_it_container_wraper">
        <div className="share_it_container_wraper_left">
          <p className="share_it_container_wraper_left_author">
            <img className="author" src={RecommendThree.avatar} alt="t"/>
            <span className="group">{RecommendThree.nickname}</span>
          </p>
          <p className="share_it_container_wraper_left_dis">{RecommendThree.title}</p>
          <div className="share_it_container_wraper_left_content">{RecommendThree.subTitle}</div>
        </div>
        <div className="share_it_container_wraper_img">
          <div className="share_it_container_wraper_img_div">{RecommendThree.typeName}</div>
          <img alt='img' src={RecommendThree.picUrl}/>
        </div>
      </a>
    </div>
    <div className="shareItContainer">
      <a className="share_it_container_wraper">
        <div className="share_it_container_wraper_left">
          <p className="share_it_container_wraper_left_author">
            <img className="author" src={RecommendTwo.avatar} alt="r"/>
            <span className="group">{RecommendTwo.nickname}</span>
          </p>
          <p className="share_it_container_wraper_left_dis">{RecommendTwo.title}</p>
          <div className="share_it_container_wraper_left_content">{RecommendTwo.subTitle}</div>
        </div>
        <div className="share_it_container_wraper_img">
          <div className="share_it_container_wraper_img_div">{RecommendTwo.typeName}</div>
          <img src={RecommendTwo.picUrl} alt='img'/>
        </div>
      </a>
    </div>

    <div className="YanxuanContainer">
      <a className="recommend_container_content">
        <div className="yanxuan_tuijian">{RecommendOne.nickname}</div>
        <img src={RecommendOne.picUrl} alt="4" className="recommend_container_img"/>
        <p className="recommend_container_p">
          <span className="recommend_container_p_new">{RecommendOne.title}</span>
          <span className="recommend_container_p_price">{RecommendOne.priceInfo}元起</span>
          <span className="recommend_container_p_des">{RecommendOne.subTitle}</span>
        </p>
      </a>
    </div>
    <div className="shareItContainer">
      <a className="share_it_container_wraper">
        <div className="share_it_container_wraper_left">
          <p className="share_it_container_wraper_left_author">
            <img className="author" src={RecommendThree.avatar} alt="d"/>
            <span className="group">{RecommendThree.nickname}</span>
          </p>
          <p className="share_it_container_wraper_left_dis">{RecommendThree.title}</p>
          <div className="share_it_container_wraper_left_content">{RecommendThree.subTitle}</div>
        </div>
        <div className="share_it_container_wraper_img">
          <div className="share_it_container_wraper_img_div">{RecommendThree.typeName}</div>
          <img src={RecommendThree.picUrl} alt='img'/>
        </div>
      </a>
    </div>
    <div className="shareItContainer">
      <a className="share_it_container_wraper">
        <div className="share_it_container_wraper_left">
          <p className="share_it_container_wraper_left_author">
            <img className="author" src={RecommendTwo.avatar} alt="d"/>
            <span className="group">{RecommendTwo.nickname}</span>
          </p>
          <p className="share_it_container_wraper_left_dis">{RecommendTwo.title}</p>
          <div className="share_it_container_wraper_left_content">{RecommendTwo.subTitle}</div>
        </div>
        <div className="share_it_container_wraper_img">
          <div className="share_it_container_wraper_img_div">{RecommendTwo.typeName}</div>
          <img src={RecommendTwo.picUrl} alt='img'/>
        </div>
      </a>
    </div>
    <SlotDiv/>

    <div className="recommend_container_font">十点一刻</div>

        {/*横向滑动*/}
    <div className="tenContainer swiper-container">
      <div className="list swiper-wrapper">
        {/*遍历*/}
        <a href="/" className='swiper-wrapper_a'>
          <div className='swiper-wrapper_a_top'>
            <div className='swiper-wrapper_a_top01'>
              <span className='smallLine'/>
              <span className='font'>今日话题</span>
              <span className='smallLine'/>
            </div>
            <div className='swiper-wrapper_a_top02'>你有哪些租房经历</div>
            <div className='swiper-wrapper_a_top03'>聊聊你用过的租房神器</div>
          </div>
          <div className='swiper-wrapper_a_bottom'>
            <img alt='img' src='//yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg?imageView&thumbnail=48y48'/>
            <img alt='img' src='//yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg?imageView&thumbnail=48y48'/>
            <img alt='img' src='//yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg?imageView&thumbnail=48y48'/>
            人参与话题
          </div>
        </a>
      </div>
    </div>



    <SlotDiv/>


    <div className="recommend_container_font">严选臻品</div>

    <div className="YanxuanContainer">
      <a className="recommend_container_content">
        <div className="yanxuan_tuijian">{zhenOne.nickname}</div>
        <img src={zhenOne.picUrl} alt="d" className="recommend_container_img"/>
        <p className="recommend_container_p">
          <span className="recommend_container_p_new">{zhenOne.title}</span>
          <span className="recommend_container_p_price">{zhenOne.priceInfo}元起</span>
          <span className="recommend_container_p_des">{zhenOne.subTitle}</span>
        </p>
      </a>
    </div>
    <div className="shareItContainer">
      <a className="share_it_container_wraper">
        <div className="share_it_container_wraper_left">
          <p className="share_it_container_wraper_left_author">
            <img className="author" src={zhenThree.avatar} alt="d"/>
            <span className="group">{zhenThree.nickname}</span>
          </p>
          <p className="share_it_container_wraper_left_dis">{zhenThree.title}</p>
          <div className="share_it_container_wraper_left_content">{zhenThree.subTitle}</div>
        </div>
        <div className="share_it_container_wraper_img">
          <div className="share_it_container_wraper_img_div">{zhenThree.typeName}</div>
          <img src={zhenThree.picUrl} alt='img'/>
        </div>
      </a>
    </div>
        {/*严选LOOK*/}
    <SlotDiv/>

    <div className="recommend_container_font">严选LOOK</div>


        {/*严选LOOK 主要内容区域*/}
    <div className="YanxuanLOOKContainer">
      <div className="Yanxuan_LOOK_container_item">
        <img src={yxLook.picUrl} alt="d" className="Yanxuan_LOOK_container_item_img"/>
        <div className="Yanxuan_LOOK_container_item_author">
          <img src={yxLook.avatar} alt='img' className="Yanxuan_LOOK_container_item_author_head"/>
        <span className="Yanxuan_LOOK_container_item_author_name">{yxLook.nickname}</span>
      </div>
      <div className="Yanxuan_LOOK_container_item_content">{yxLook.content}</div>
    </div>
  </div>

        {/*更多精彩*/}
    <div className="moreCotainer">
      <div className="line"/>
      <div className="whiteLine"/>
      <a href="">更多精彩</a>
    </div>

        {/*上下结构*/}
    <div className="moreWonderfulContainerWraper">
      <div className="moreWonderfulContainer">
        <div className="moreWonderfulContainer_item">
          {/*需要遍历的数据*/}
          <a href="" className="moreWonderfulContainer_item_a">
            <img src={RecommendOne.picUrl} alt='img'/>
            <p className="moreWonderfulContainer_item_a_p">{RecommendOne.subTitle}</p>
          </a>
        </div>
      </div>
      <div className="moreWonderfulContainer">
        <div className="moreWonderfulContainer_item">
          {/*需要遍历的数据*/}
          <a href="" className="moreWonderfulContainer_item_a">
            <img src={RecommendOne.picUrl} alt='img'/>
            <p className="moreWonderfulContainer_item_a_p">{RecommendOne.subTitle}</p>
          </a>
        </div>
      </div>
      <div className="moreWonderfulContainer">
        <div className="moreWonderfulContainer_item">
          {/*需要遍历的数据*/}
          <a href="" className="moreWonderfulContainer_item_a">
            <img src={RecommendOne.picUrl} alt='img'/>
            <p className="moreWonderfulContainer_item_a_p">{RecommendOne.subTitle}</p>
          </a>
        </div>
      </div>
    </div>

        {/*左右上下结构*/}
    <div className="moreWonderfulContainerWraperThreeContainer">
      {/*需要遍历的数据*/}
      <div className="moreWonderfulContainerWraperThree">
        <div className="moreWonderfulContainerThree">
          <div className="moreWonderfulContainer_itemThree">
            <a href="" className="moreWonderfulContainer_item_aThree">
              {/*上方图片结构*/}
              <div className="moreWonderfulContainer_item_a_divThree">
                <div className="moreWonderfulContainer_item_a_div_leftThree">
                  <img src={yxLook.picUrl} alt='img'/>
                </div>
                <div className="moreWonderfulContainer_item_a_div_rightThree">
                  <img src={yxLook.schemeUrl01} alt='img'/>
                  <img src={yxLook.schemeUrl02} alt='img' className='haha'/>
                </div>
              </div>
              {/*下方内容结构*/}
              <p className="moreWonderfulContainer_item_a_pThree">{yxLook.content}</p>
            </a>
          </div>
        </div>
      </div>
      <div className="moreWonderfulContainerWraperThree">
        <div className="moreWonderfulContainerThree">
          <div className="moreWonderfulContainer_itemThree">
            <a href="" className="moreWonderfulContainer_item_aThree">
              {/*上方图片结构*/}
              <div className="moreWonderfulContainer_item_a_divThree">
                <div className="moreWonderfulContainer_item_a_div_leftThree">
                  <img src={yxLook.picUrl} alt='img'/>
                </div>
                <div className="moreWonderfulContainer_item_a_div_rightThree">
                  <img src={yxLook.schemeUrl01} alt='img'/>
                  <img src={yxLook.schemeUrl02} alt='img'/>
                </div>
              </div>
              {/*下方内容结构*/}
              <p className="moreWonderfulContainer_item_a_pThree">{yxLook.content}</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="footer"/>

  </div>

  )
  }
}


export default connect(
  state=>({info:state.info}),
  {
    getRecommendOne,
    getbanner,
    getcolumn,
    getRecommendThree,
    getRecommendTwo,
    getZhenOne,
    getZhenTwo,
    getZhenThree,
    getYxLook
  }
)(Knowledge)