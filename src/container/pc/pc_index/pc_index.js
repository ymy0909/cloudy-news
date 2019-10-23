import React, { Component } from 'react'
import {Row, Col} from 'antd';
import PCIndexSwiper from './pc_index_swiper/pc_index_swiper';
import PCIndexPanel from './pc_index_panel/pc_index_panel';
import PCIndexSearch from './pc_index_search/pc_index_search';
import './pc_index.less'
import { connect } from 'react-redux'
import { actionAsync_getForwardList } from '../../../store/home/actionCreators';
import PCIndexForward from './pc_index_forward/pc_index_forward';

class PCIndex extends Component {
  state = {
     forwardList:[
         
     ],
  };

  render() {


      return (
        <Row gutter={24}>
          <Col span={16}>
            <Row gutter={16}>
              <Col span={18}>
                 <PCIndexSwiper/>
              </Col>
              <Col span={6}>
                 <PCIndexPanel/>
              </Col>
            </Row>
            {/* <Tabs defaultActiveKey={selectTab} tabBarExtraContent={extra} onChange={this.changeTab}>
              <TabPane tab="首页" key="index">

              </TabPane>
            </Tabs> */}
          </Col>
          <Col span={8}>
             <PCIndexSearch className="mb-md"/>
             <PCIndexForward/>
          </Col>
        </Row>
     );

  }
  componentDidMount(){
    // getForwardList().then(res=>{
    //   this.setState({
    //       forwardList:res
    //   },()=>{

    //       // console.log(this.state.swiper.autoplay.running)
    //           // this.state.swiper.update()
    //       // this.state.swiper.autoplay.start()
    //   })
    // })
    this.props.renderSwiper()
  }


}



const mapDispatchToProps = (dispatch) => {
  return {
    renderSwiper: () => {
      dispatch(actionAsync_getForwardList())
    }
  }
}

export default connect(null,mapDispatchToProps)(PCIndex);
