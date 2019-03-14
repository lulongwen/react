import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendItem, RecommendWrap} from "../style";

class Recommend extends PureComponent {
  render() {
    
    let { list } = this.props;
    return (
      <RecommendWrap>
        {
          list.map( item=> {
            return <RecommendItem
              imgUrl={item.get('imgUrl')}
              key={item.get('id')} />
          })
        }
      </RecommendWrap>
    )
  }
}


const mapState = state => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect(mapState, null)(Recommend);




