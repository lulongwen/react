import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';


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

// 可以优化为 无状态组件, 提高性能，见 index.js
class Header extends Component {
  // 组件的数据移除，移动到 react-redux 中进行管理，只要改变数据，页面就改变
  // constructor (props) {
  //   super(props);
  //   // this.state = {
  //   //   focus: false
  //   // }
  //   // this.inputFocus = this.inputFocus.bind(this); // 修改 this 指向
  // }
  
  render() {
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
              in={this.props.focus}
              timeout={2000}
              classNames="slide">
              <SearchInput
                className={this.props.focus === true ? 'focus': ''}
                onFocus={this.props.inputFocus}
                onBlur={this.props.inputBlur}></SearchInput>
            </CSSTransition>
            <i className={this.props.focus === true ? 'icon-magnifier zoom focus' : 'icon-magnifier zoom'}></i>
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
  }
  
  // inputFocus() { this.setState({ focus: true }) } // 必须要在 constructor 里面修改 this指向
  // inputFocus= ()=> {
  //   this.setState({ focus: true });
  // }
  // inputBlur= ()=> {
  //   this.setState({ focus: false });
  // }
}


// 写在 Header 组件之外
const mapStateToProps = (state)=> {
  return {
    // 把 store里面的数据 映射到 focus，然后就可以使用 this.props.focus
    focus: state.focus
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    inputFocus() {
      const action = {
        type: 'inputFocus'
      };
      dispatch(action);
    },
    
    inputBlur() {
      const action = {
        type: 'inputBlur'
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);