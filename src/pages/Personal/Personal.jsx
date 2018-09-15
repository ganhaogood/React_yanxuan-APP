import React,{Component} from 'react'
import './Personal.css'
import HeaderNav from '../../components/HeaderNav/HeaderNav'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import store from "../../redux/store";

 class Personal extends Component{
  state={
    loginWay:0,  //0原始页面 ，1手机登录，2 邮箱登录
    phone:null,
    code:null,
    mail:null,
    password:null
  }

  toLoginP = ()=>{
    console.log(111)
    this.setState({
      loginWay:1
    })
  }
  toLoginE = ()=>{
     console.log(111)
     this.setState({
       loginWay:2
     })
   }

   handleChange = (type,val)=>{
    this.setState({
      [type]:val.currentTarget.value
    })

   }

   login =()=>{
    const {phone,code,mail,password} = this.state
     console.log(phone)
     if(!(/^1[34578]\d{9}$/.test(phone))){
       alert('手机号码输入有误，请重新输入')
       this.setState({
         phone:''
       })
       return false
     }
     if(!/^[0-9a-zA-Z]{6}$/.test(code)){
       alert('验证码输入有误')
       return false
     }
     if(!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(mail)){
       alert('邮箱输入有误')
       return false
     }
     if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(password)){
       alert('密码必须是8到16位数字与字母组合')
       return false
     }

   }

  render(){

    const {loginWay} = this.state

    return(
      <div className="personalContainer">

        <HeaderNav/>


        <div className="personalContent">

          <div className="personalContent_login">

            <div className="personalContent_login_img">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
            </div>

            {/*/!*手机号码登录*!/*/}
            {
              loginWay ===1 ? <div className="phoneLogin">
                <div className="phoneLogin_header">
                  <input className="phoneLogin_header_number" onChange={val => {this.handleChange('phone', val)}} type="text" placeholder="请输入手机号"/>
                  <div className="phoneLogin_header_code">
                    <input className="phone_code" placeholder="请输入短信验证码" onChange={val => {this.handleChange('code', val)}}/>
                    <div className="code" >获取验证码</div>
                  </div>
                </div>
                <div className="phoneLogin_footer">
                  <a href="/" className="question">遇到问题?</a>
                  <a href="/" className="password">使用密码验证登录</a>
                </div>
                <div className="phoneLogin_button">
                  <div className="phoneLogin_button_login" onClick={this.login}>登录</div>
                  <div className="phoneLogin_button_else">其他方式登录</div>
                  <div className='phoneLogin_button_else_r'>注册账号<i className='iconfont icon-go'/></div>
                </div>
              </div>:null
            }


            {/*/!*邮箱登录*!/*/}
            {
              loginWay===2 ?<div className="emailLogin">
                <input className="emailLogin_header_number" onChange={val => {this.handleChange('mail', val)} } placeholder="邮箱账号"/>
                <input className="emailLogin_header_code" onChange={val => {this.handleChange('password', val)}} placeholder="密码"/>
                <div className="emailLogin_footer">
                  <a href="/" className="emailLogin_question">注册账号</a>
                  <a href="/" className="emailLogin_password">忘记密码</a>
                </div>

                <div className="emailLogin_login_btn_shouji" onClick={this.login}>
                  <i className="iconfont icon-shouji"/>
                  <span>登录</span>
                </div>
                <div className="emailLogin_login_btn_youxiang">
                  <i className="iconfont icon-youxiang-"/>
                  <span>其他方式登录</span>
                </div>
              </div>:null
            }


            {
              loginWay===0 ? <div className="personalContent_login_btn" >
                <div className="personalContent_login_btn_shouji" onClick={this.toLoginP}>
                  <i className="iconfont icon-shouji"/>
                  <span>手机号码登录</span>
                </div>
                <div className="personalContent_login_btn_youxiang" onClick={this.toLoginE}>
                  <i className="iconfont icon-youxiang-"/>
                  <span>邮箱账号登录</span>
                </div>
                <div className="personalContent_login_btn_zhuce">
                  <span>手机号快捷注册</span>
                  <i className="iconfont icon-go"/>
                </div>
              </div>:null
            }
  </div>


          {
            loginWay === 0 ? <div className="personalContent_title">
              <div className="personalContent_title_weixin">
                <i className="iconfont icon-weixin"/>
                <span>微信</span>
              </div>
              <div className="personalContent_title_qq">
                <i className="iconfont icon-web-icon-"/>
                <span>QQ</span>
              </div>
              <div className="personalContent_title_weibo">
                <i className="iconfont icon-weibo"/>
                <span>微博</span>
              </div>
            </div>:null
          }
  </div>
  </div>
    )
  }
}

export default withRouter(connect(
  state=>({info:state.info})
)(Personal))