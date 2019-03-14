import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';

import { DetailWrap, Header, Content } from "./style";

class Detail extends PureComponent {
  render() {
    let { title, content} = this.props;
    return (
      <DetailWrap>
        <Header>{title}</Header>
        
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </DetailWrap>
    )
  }
  
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}


const mapState = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = dispatch => ({
  getDetail(id) {
    let action = actionCreators.getDetail(id);
    dispatch(action);
  }
});

export default connect(mapState, mapDispatch)(withRouter(Detail) );













