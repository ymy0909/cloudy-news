import React, { Component } from 'react'

import { Tabs } from 'antd';
import PcIndexList from '../pc_index_list/pc_index_list';


class PcIndexTab extends Component {
  state = { 
    tabs:[
      {id:1,name:'区域链'},
      {id:2,name:'政策法规'},
      {id:3,name:'虚拟币'},
      {id:4,name:'应用落地'},
      {id:5,name:'行业大佬'},
      {id:6,name:'比特币'},
      {id:7,name:'技术学习'},
      {id:8,name:'深度观察'}
    ]
   }

   constructor(props){
    super(props)
   }

  render() { 
    const { TabPane } = Tabs;
    const { tabs } = this.state
    return ( 
      <div>
        <Tabs onChange={e=>this.callback(e)} size="small">
          {
            tabs.map((item)=>{
              return(
                <TabPane tab={item.name} key={item.id}>
                  <PcIndexList id={item.id}></PcIndexList>
                </TabPane>
              )
            })
          }
        </Tabs>
      </div>
     );
  }
  callback(key) {
    console.log(key);
  }
}
 
export default PcIndexTab;