import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { actionCreators } from './store';
import {
  LoginWrap,
  LoginBox,
  Input,
  Button
} from "./style";

class Login extends PureComponent {
  render() {
    const { loginActive } = this.props;
    if(!loginActive) {
      return (
        <LoginWrap>
          <LoginBox>
            <Input placeholder="账号" innerRef="{ (input)=> this.accout = input}"/>
            <Input placeholer="密码" type="password" innerRef={(input)=> this.password = input }/>
            <Button onClick={ ()=> this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrap>
      )
    }
    else return <Redirect to="/" />
  }
}


const mapState = (state) => ({
  loginActive: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    const action = actionCreators.login(accountElem.value, passwordElem.value);
    dispatch(action);
  }
}) ;

export default connect(mapState, mapDispatch)(Login);








