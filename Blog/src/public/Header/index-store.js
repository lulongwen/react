import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

// import { inputFocus, inputBlur } from './store/actionCreators';
import { Creators } from './store';

import { 
  HeaderWrap,
  Logo,
  Nav,
  NavItem,
  SearchBar,
  SearchInput,
  // SearchInfo,
  // SearchInfoTitle,
  // SearchINfoSwitch,
  // SearchInfoItem,
  Addition,
  Button
} from './style';

// UI 组件，渲染页面样式
const Header = (props)=> {
  return (
    <HeaderWrap>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavItem className="right">
          <i className="icon-login"></i> 登录
        </NavItem>
        <NavItem className="right">
          <i className="icon"></i> Aa
        </NavItem>
      
        <SearchBar>
          <CSSTransition
            in={props.focus}
            timeout={2000}
            classNames="slide">
            <SearchInput
              className={props.focus === true ? 'focus': ''}
              onFocus={props.inputFocus}
              onBlur={props.inputBlur}></SearchInput>
          </CSSTransition>
          <i className={props.focus === true ? 'icon-magnifier zoom focus' : 'icon-magnifier zoom'}></i>
        </SearchBar>
      </Nav>
    
      <Addition>
        {/*<Link to="/write">
            <i className="icon"></i> 写文章
          </Link>*/}
      
        <Button className="write"><i className="icon-pencil"></i> 写文章</Button>
        <Button className="register"><i className="icon-user"></i> 注册</Button>
      </Addition>
    </HeaderWrap>
  );
};


// 写在 Header 组件之外
const mapStateToProps = (state)=> {
  // console.log('state to props', state)
  return {
    // 把 store里面的数据 映射到 focus，然后就可以使用 props.focus
    focus: state.header.focus
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    inputFocus() {
      console.log('focus', Creators)
      // const action = { type: 'inputFocus' };
      dispatch( Creators.inputFocus() );
    },
    
    inputBlur() {
      // const action = { type: 'inputBlur' };
      dispatch( Creators.inputBlur() );
    }
  }
}

// 容器组件，处理数据和逻辑， conect 方法返回的组件
export default connect(mapStateToProps, mapDispatchToProps)(Header);