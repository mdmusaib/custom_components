import React, { Component } from 'react';
import {Menu} from 'antd';
import GpGridLayout from '../components/gpGridLayout';
import GpSideNav from '../components/gpSideNav';
import '../input.css';

class Header extends Component{
  
    

    // handleSideBarValues=(val)=>{
    
        
    //     if (this.state.menus.indexOf(val) == -1) {
    //       this.setState({
    //         menus:[...this.state.menus,val]
    //       })
    //   }
        
    //     }
    //      handleButtonClick=(val)=>{
    //      alert(val)
    //     }

    //   handleSideBarClose=(value)=>{
    //     let items=this.state.menus;
       
    //       let val=items.filter(function(menu){
    //         return menu != value;
    //       })
          
    //       this.setState({
    //        menus:val
    //       });
      
      
    //   }

    render(){
        console.log(this.props)
        const menu=(
            <Menu>
          {this.props.menus.map((title, index) => (
          
                        <Menu.Item key={index} onClick={()=>{this.handleButtonClick(title)}}>
                {title}
              </Menu.Item>
           
            )
             
          
        )}
        </Menu>
          );    
        return(
                      
               <>  
        <GpSideNav menus={menu} menuTitle={this.props.menus}/>
        </>
        );
    }
}
export default Header;