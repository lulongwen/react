import styled from 'styled-components';
import logo from '../../static/images/logo.png';

// 局部样式,  .header 标签名字
export const HeaderWrap = styled.header`
  position: relative;
  z-index: 1;
  height: 56px;
  border-bottom: 1px solid #f0f0f0 ;
`;

/* export const Logo = styled.a.attrs({  性能不好，推荐使用 Link to
  href: '/'
})` */
export const Logo = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background: url(${logo});
  background-size: contain;
`;

export const Nav = styled.nav`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  background-color: rgba(0, 153, 255, .06);
`;

export const NavItem = styled.div`
  /* 公共样式 */
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchBar = styled.div`
  position: relative;
  float: left;
  
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focus {
      background-color: #777;
      color: #fff;
    }
  }
`;

export const SearchInput = styled.input.attrs({
  placeholder: '搜索',
  type: 'text'
})`
  width: 160px;
  height: 38px;
  margin: 9px 0 0 20px;
  padding: 0 30px 0 20px;
  border-radius: 19px;
  background-color: #eee;
  border: none;
  outline: none;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focus {
    width: 240px;
  }
  
  // 动画
  &.slide-enter, &.slide-exit {
    transition: all .35s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div `
  position: absolute;
  top: 56px;
  left: 0;
  width: 240px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.header`
  line-height: 20px;
  margin: 20px 0 15px 0;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: inline-block;
    font-size: 12px;
    transform: rotate(0);
    transition: all .2s ease-in;
    transition-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  float: left;
  line-height: 20px;
  margin: 0 10px 15px 0;
  padding: 0 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 12px;
  color: #787878;
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin: 9px 20px 0 0;
  padding: 0 20px;
  line-height: 38px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  cursor: pointer;
  font-size: 14px;
  &.register {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    background-color: #ec6149;
  }
`;































