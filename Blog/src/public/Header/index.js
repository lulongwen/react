import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { Creators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/Login/store';

import { 
  HeaderWrap,
  Logo,
  Nav,
  NavItem,
  SearchBar,
  SearchInput,
  
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  
  Addition,
  Button
} from './style';


class Header extends Component {
  
  showList(){
    let { focus, mouseIn, list, page, totalPage, mouseEnter, mouseLeave, clickSwitch } = this.props; // 解构赋值
    let jsList = list.toJS(); // immutable 对象转 js对象，immutable对象不支持 [] 下标
    let pageList = [];
    
    if(jsList.length) {
      for(let i= (page-1)*10; i< page*10; i++) {
        pageList.push( <SearchInfoItem key={'item'+i}>{jsList[i]}</SearchInfoItem> );
      }
    }

    if(focus || mouseIn) {
      return (
        <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=> clickSwitch(page, totalPage, this.spinIcon)}>
              <i ref={(spin)=> this.spinIcon = spin} className="icon-refresh spin"></i> 换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
              // list.map( (item,i)=> {
              //   return <SearchInfoItem key={'item'+i}>{item}</SearchInfoItem>;
              // })
            }
          </SearchInfoList>
        </SearchInfo>
      );
    }
    else return null;
  }
  
  render() {
   let {focus,list, inputFocus, inputBlur, login, logout} = this.props;
   return (
     <HeaderWrap>
       <Link to="/">
         <Logo />
       </Link>
       <Nav>
         <NavItem className="left active">首页</NavItem>
         <NavItem className="left">下载APP</NavItem>
         {
           login ?
           <NavItem onClick={logout} className="right">
             <i className="icon-login"/> 退出
           </NavItem> :
           
           <Link to="/login">
             <NavItem className="right">
               <i className="icon-login"/> 登录
             </NavItem>
           </Link>
         }
         
         <NavItem className="right">
           <i className="icon"/> Aa
         </NavItem>
        
         <SearchBar>
           <CSSTransition
             in={focus}
             timeout={2000}
             classNames="slide">
             <SearchInput
               className={focus === true ? 'focus': ''}
               onFocus={ ()=> inputFocus(list) }
               onBlur={inputBlur} />
           </CSSTransition>
           <i className={focus === true ? 'icon-magnifier zoom focus' : 'icon-magnifier zoom'} />
          
           {this.showList()}
         </SearchBar>
       </Nav>
      
       <Addition>
          <Link to="/write">
            <Button className="write">
              <i className="icon-pencil" /> 写文章
            </Button>
          </Link>
         
         <Button className="register"><i className="icon-user" /> 注册</Button>
       </Addition>
     </HeaderWrap>
   );
 }
}


// 写在 Header 组件之外 mapStateToProps
const mapState = (state)=> {
  // console.log('state to props', state)
  return {
    // 通过 get() 获取 immutable.js对象的属性
    // focus: state.header.get('focus')
    // focus: state.get('header').get('focus')
    focus: state.getIn(['header', 'focus']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    loginIn: state.getIn(['login', 'login'])
  }
}

// mapDispatchToProps
const mapDispatch = (dispatch)=> {
  return {
    inputFocus(list) {
      // console.log('focus', Creators)
      // const action = { type: 'inputFocus' };
      dispatch( Creators.inputFocus() );
      
      if(list.size > 0) return;
      dispatch( Creators.getList() ); // ajax, getlist
    },
    
    inputBlur() {
      // const action = { type: 'inputBlur' };
      dispatch( Creators.inputBlur() );
    },
    mouseEnter() {
      dispatch( Creators.mouseEnter() );
    },
    mouseLeave() {
      dispatch( Creators.mouseLeave() );
    },
    clickSwitch(page, totalPage, spin) {
      let current = page === totalPage ? 1 : page+1,
        angle = spin.style.transform.replace(/[^0-9]/ig, '') * 1;
        angle += 180;
      
      spin.style.transform = `rotate(${angle}deg)`;
      dispatch( Creators.clickSwitch(current) );
    },
    
    logout(){
      let action = loginActionCreators.logout();
      dispatch(action);
    }
  }
}

// 容器组件，处理数据和逻辑， conect 方法返回的组件
export default connect(mapState, mapDispatch)(Header);








