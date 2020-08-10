import React, { Component } from 'react';
import GpGridLayout from './gpGridLayout';
import GpSideNav from './gpSideNav';
import {Menu} from 'antd';
import '../input.css';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            menus:['home']
        }
    }
    handleSideBarValues=(val)=>{

        
        if (this.state.menus.indexOf(val) == -1) {
          this.setState({
            menus:[...this.state.menus,val]
          })
      }
        
        }
      

      handleSideBarClose=(value)=>{
        let items=this.state.menus;
       
          let val=items.filter(function(menu){
            return menu != value;
          })
          
          this.setState({
           menus:val
          });
      
      
      }
    render(){
        const menu=(
            <Menu>
          {this.state.menus.map((title, index) => (
          
                        <Menu.Item key={index} >
                {title}
              </Menu.Item>
           
            )
             
          
        )}
        </Menu>
          );  
        return(
            <div className="wrapMain">
                <GpSideNav menus={menu} menuTitle={this.state.menus} onClick={this.handleSideBarClose}/>
                <GpGridLayout onClick={this.handleSideBarValues}/>
            </div>
            
        );

    }
}
export default Header;