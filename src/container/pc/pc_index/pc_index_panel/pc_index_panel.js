import React, { Component } from 'react'

class PCIndexPanel extends Component {

  constructor(){
    super()
    this.state = {
       list:[
         {
           id:1,
           url:'assets/banner_logo1.png',
         },
         {
          id:2,
          url:'assets/banner_logo2.png',
         },
         {
          id:3,
          url:'assets/banner_logo3.png',
        },
       ] 
    }
  }

  
  clickPanelImg = id =>{
    console.log(id)
  }
  render() { 
    const { list } = this.state
    return (  
      <div className="d-flex align-items-center justify-content-between flex-column width-100" style={{height:270}}>
        {
          list.map(item=>{
            return(
              <div className="point" onClick={this.clickPanelImg(item.id)} key={item.id}>
                <img src={item.url} alt=""/>
              </div>
            )
          })
        }
      </div>
    );
  }
}
 
export default PCIndexPanel;