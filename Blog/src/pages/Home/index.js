import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// children components
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Write from './components/Write';
// import BackTop from './components/BackTop';

import { actionCreators } from './store';

import {
  HomeWrap,
  HomeLeft,
  HomeRight,
  BackTop
} from "./style";


class Home extends PureComponent {
  scrollTop() {
    window.scrollTo(0,0);
  }
  
  render() {
    return(
      <HomeWrap>
        <HomeLeft>
          <img className="banner-img" alt="" src="http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        
        <HomeRight>
          <Recommend />
          <Write />
        </HomeRight>
        
        {
          this.props.showScroll
            ? <BackTop onClick={this.scrollTop}><i className="icon" /> 顶部</BackTop>
            : null
        }
      </HomeWrap>
    )
  }
  
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  
  componentWillUnmount() {
    // 离开页面，解绑 window 全局事件
    window.removeEventListener('scroll', this.props.changeScrollTopShow );
  }
  
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow );
  }
}


const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    const action = actionCreators.toggleTopShow;
    
    if(document.documentElement.scrollTop > 100)
      dispatch(action(true) );
    else
      dispatch(action(false) );
  }
});

export default connect(mapState, mapDispatch)(Home);





















