import React, { Component } from 'react';
import {Menu} from 'antd';
import GpGridLayout from '../components/gpGridLayout';
import GpSideNav from '../components/gpSideNav';
import '../input.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            menus:['home'],
        }
        
    }
    componentDidUpdate(){
      this.props.onLoad(this.state.menus)
    }


    handleSideBarValues=(val)=>{
    
        
        if (this.state.menus.indexOf(val) == -1) {
          this.setState({
            menus:[...this.state.menus,val]
          })
          
      }
      
      
        }
         handleButtonClick=(val)=>{
         alert(val)
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
          
                        <Menu.Item key={index} onClick={()=>{this.handleButtonClick(title)}}>
                {title}
              </Menu.Item>
           
            )
             
          
        )}
        </Menu>
          );    
        return(
                      
               <>  
            
        <GpSideNav   menus={menu} menuTitle={this.state.menus} onClick={this.handleSideBarClose}/>
        <GpGridLayout  onClick={this.handleSideBarValues}/>
        </>
        );
    }
}
export default Header;