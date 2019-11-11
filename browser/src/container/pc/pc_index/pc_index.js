import React, { Component } from 'react'
import {Row, Col} from 'antd';
import PCIndexSwiper from './pc_index_swiper/pc_index_swiper';
import PCIndexPanel from './pc_index_panel/pc_index_panel';
import PCIndexSearch from './pc_index_search/pc_index_search';
import './pc_index.less'
import { connect } from 'react-redux'
import { actionAsync_getForwardList,actionAsync_getHotList,actionAsync_getRecommandList } from '../../../store/home/actionCreators';
import PCIndexForward from './pc_index_forward/pc_index_forward';
import PcIndexTab from './pc_index_tab/pc_index_tab';
import PcIndexHot from './pc_index_hot/pc_idnex_hot';
import PcIndexTag from './pc_index_tag/pc_index_tag';
import PcIndexRecommend from './pc_index_recommend/pc_index_recommend';
import Socket from '../../../utils/socket'


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
            <PcIndexTab></PcIndexTab>
          </Col>
          <Col span={8}>
             <PCIndexSearch className="mb-md"/>
            <div className="qk_pc_con_nav">
                <div>
                    <span className="qk_pc_con_nav_seq">|</span>
                    <span>前沿快讯</span>
                </div>
                <div className="point">
                    更多>>
                </div>
            </div>
             <PCIndexForward/>
             <div className="qk_pc_con_nav">
                <div>
                    <span className="qk_pc_con_nav_seq">|</span>
                    <span>最新热点</span>
                </div>
                <div className="point">
                    更多>>
                </div>
            </div>
            <PcIndexHot/>
            <div className="qk_pc_con_nav">
                <div>
                    <span className="qk_pc_con_nav_seq">|</span>
                    <span>新闻标签</span>
                </div>
                <div className="point">
                  
                </div>
            </div>
            <PcIndexTag/>
            <div className="qk_pc_con_nav">
                <div>
                    <span className="qk_pc_con_nav_seq">|</span>
                    <span>推荐阅读</span>
                </div>
                <div className="point">
                  
                </div>
            </div>
            <PcIndexRecommend/>
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
    this.props.getHotList()
    this.props.getRecommandList()

     //    判断专家是否登录
     this.socket = new Socket({
      socketUrl: 'ws://www.qkljw.com:8000',
      timeout: 3000,
      socketMessage: (receive) => {
          console.log(receive);  //后端返回的数据，渲染页面
      },
      socketClose: (msg) => {
          console.log(msg);
      },
      socketError: () => {
          console.log(this.state.taskStage + '连接建立失败');
      },
      socketOpen: () => {
          console.log('连接建立成功');
          // 心跳机制 定时向后端发数据
          this.taskRemindInterval = setInterval(() => {
              this.socket.sendMessage({ "send": 0 })
          }, 3000)
          }
      });
    // 　　　　　重试创建socket连接
      try {
          this.socket.connection();
          // this.socket.sendMessage('send')
      } catch (e) {
          // 捕获异常，防止js error
          // donothing
      }
  }


}



const mapDispatchToProps = (dispatch) => {
  return {
    renderSwiper: () => {
      dispatch(actionAsync_getForwardList())
    },
    getHotList:()=>{
      dispatch(actionAsync_getHotList())
    },
    getRecommandList:()=>{
      dispatch(actionAsync_getRecommandList())
    }
  }
}

export default connect(null,mapDispatchToProps)(PCIndex);
