import React, { Component } from 'react'
import { List } from 'antd';
import PropTypes from 'prop-types'


class PcIndexList extends Component {

  constructor(props){
    super(props)
  }

  state = {  
    list:[
      {
        img:'/assets/img/list1.jpg',
        title:'工信部三措施促区块链发展，港证监会发布虚拟资产交易监管框架',
        content:'工信部网站11月4日发布的《对十三届全国人大二次会议第1394号建议的答复》，提出将以三大举措推动区块链行业健康发展。香港证监会发布《立场书 监管虚拟资产交易平台》，明确监管标准的发牌条件。工信部三大措施推动区块链行业发展，规划、标准指定和应用落地并重。'
      },
      {
        img:'/assets/img/list2.jpg',
        title:'上海电子口岸区块链联盟正式成立',
        content:'上海国际贸易单一窗口“区块链+”新闻发布会11月7日上午在国家会展中心（上海）举行。会上，政企双方代表共同签署《上海电子口岸区块链联盟倡议书》，标志着上海电子口岸区块链联盟正式成立。'
      },
      {
        img:'/assets/img/list3.jpg',
        title:'看人工智能如何改变人机协同',
        content:'人工智能技术的发展，将深刻影响人机协同作战从态势感知、指挥决策、目标引导、火力打击到毁伤评估的全过程，从而极大地提升人机协同作战效能。在人工智能技术的推动下，人机协同极有可能成为改写未来战争规则的现实手段之一。'
      },
      {
        img:'/assets/img/list4.jpg',
        title:'工信部三措施促区块链发展，港证监会发布虚拟资产交易监管框架',
        content:'工信部网站11月4日发布的《对十三届全国人大二次会议第1394号建议的答复》，提出将以三大举措推动区块链行业健康发展。香港证监会发布《立场书 监管虚拟资产交易平台》，明确监管标准的发牌条件。工信部三大措施推动区块链行业发展，规划、标准指定和应用落地并重。'
      },
      {
        img:'/assets/img/list5.jpg',
        title:'深圳人大报告建议：应促进数字货币试点，研究发行可行性',
        content:'全球数字货币迅速发展监管面临新挑战，人民银行早在深圳成立数字货币研究所。深圳市人大今日公布的有关推动前海粤港澳大湾区合作示范区建设的调研报告认为，深圳有必要对数字货币进行深入研究，并促进数字货币的试点，研究数字货币发行的可行性和主要内容。'
      },
      {
        img:'/assets/img/list6.jpg',
        title:'工信部三措施促区块链发展，港证监会发布虚拟资产交易监管框架',
        content:'工信部网站11月4日发布的《对十三届全国人大二次会议第1394号建议的答复》，提出将以三大举措推动区块链行业健康发展。香港证监会发布《立场书 监管虚拟资产交易平台》，明确监管标准的发牌条件。工信部三大措施推动区块链行业发展，规划、标准指定和应用落地并重。'
      },
      {
        img:'/assets/img/list7.jpg',
        title:'工信部三措施促区块链发展，港证监会发布虚拟资产交易监管框架',
        content:'工信部网站11月4日发布的《对十三届全国人大二次会议第1394号建议的答复》，提出将以三大举措推动区块链行业健康发展。香港证监会发布《立场书 监管虚拟资产交易平台》，明确监管标准的发牌条件。工信部三大措施推动区块链行业发展，规划、标准指定和应用落地并重。'
      },
      {
        img:'/assets/img/list8.jpg',
        title:'工信部三措施促区块链发展，港证监会发布虚拟资产交易监管框架',
        content:'工信部网站11月4日发布的《对十三届全国人大二次会议第1394号建议的答复》，提出将以三大举措推动区块链行业健康发展。香港证监会发布《立场书 监管虚拟资产交易平台》，明确监管标准的发牌条件。工信部三大措施推动区块链行业发展，规划、标准指定和应用落地并重。'
      },
      {
        img:'/assets/img/list9.jpg',
        title:'工信部三措施促区块链发展，港证监会发布虚拟资产交易监管框架',
        content:'工信部网站11月4日发布的《对十三届全国人大二次会议第1394号建议的答复》，提出将以三大举措推动区块链行业健康发展。香港证监会发布《立场书 监管虚拟资产交易平台》，明确监管标准的发牌条件。工信部三大措施推动区块链行业发展，规划、标准指定和应用落地并重。'
      },
      {
        img:'/assets/img/list10.jpg',
        title:'工信部三措施促区块链发展，港证监会发布虚拟资产交易监管框架',
        content:'工信部网站11月4日发布的《对十三届全国人大二次会议第1394号建议的答复》，提出将以三大举措推动区块链行业健康发展。香港证监会发布《立场书 监管虚拟资产交易平台》，明确监管标准的发牌条件。工信部三大措施推动区块链行业发展，规划、标准指定和应用落地并重。'
      },
    ]
  }
  render() { 
    const { list } = this.state
    return ( 
      <div>
        <List
          itemLayout="horizontal"
          dataSource={list}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<img width="240" src={item.img} alt="coverurl"></img>}
                title={<a>{item.title}</a>}
                description={item.content}
              />
            </List.Item>
          )}
        />
      </div>
     );
  }
  componentDidMount(){
    console.log(this.props.id)
  }
}

PcIndexList.propTypes = {
  key:PropTypes.oneOfType([
    PropTypes.number.isRequired
  ])
}

PcIndexList.defaultProps = {
  key:1
}


 
export default PcIndexList;