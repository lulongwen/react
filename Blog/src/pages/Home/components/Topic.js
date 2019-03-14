import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrap, TopicItem } from "../style";


class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    
    return (
      <TopicWrap>
        {
          list.map( item=> (
            <TopicItem key={item.get('id')}>
              <img src={item.get('imgUrl')} alt="" className="topic-pic"/>
              {item.get('title')}
            </TopicItem>
          ) )
        }
      </TopicWrap>
    )
  }
}


const mapState = state => ({
  list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);






