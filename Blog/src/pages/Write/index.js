import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
  render() {
    const { loginActive } = this.props;
    if(loginActive) {
      
      return (
        <div>写文章页面</div>
      )
    }
    
    else {
      return <Redirect to='login' />
    }
  }
}


const mapState = (state) => ({
  loginActive: state.getIn(['login', 'login']),
});


const mapDispatch = (dispatch) => ({

});


export default connect(mapState, mapDispatch)(Write);

