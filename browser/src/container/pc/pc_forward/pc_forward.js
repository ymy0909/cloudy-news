import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionAsync_getForwardList } from '../../../store/home/actionCreators';


class PCForward extends Component {
  state = {  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
  componentDidMount(){
    this.props.renderSwiper()
  }
}

const mapStateToProps = (state) => {
  return {
    forwardList: state.home.forwardList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderSwiper: () => {
      dispatch(actionAsync_getForwardList())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PCForward);
