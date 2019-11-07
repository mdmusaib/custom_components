import React, { Component } from 'react';
import '../gridLayout.css'
import img_avatar from  '../img_avatar.jpg';
import GpNav from '../updates/gpNav';
class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            menus:['home'],
        }
    } 
    handleSideBarValues =(val)=>{
     
         
        if (this.state.menus.indexOf(val) == -1) {
          this.setState({
            menus:[...this.state.menus,val]
          })
          return (<GpNav menuss={this.state.menus}/>)
      }
        
        }
    
  
       

render(){
    console.log(this.state.menus)
    return(

          
        <React.Fragment>
          
        
          
        <div className="wrapper">
        <div class="card" onClick={()=>{this.handleSideBarValues("Designer")}} title="Designer">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>Designer</b></span></p>
                </div>
              </div>
        
        
        
        <div class="card" onClick={()=>{this.handleSideBarValues("Loader")}} title="Loader">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>Loader</b></span></p>
                </div>
              </div>
        
          
        <div class="card" onClick={()=>{this.handleSideBarValues("Fuel Burn")}} title="Fuel Burn">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>Fuel Burn</b></span></p>
                </div>
              </div>
          
        <div class="card" onClick={()=>{this.handleSideBarValues("Task Manager")}} title="Task Manager">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>Task Manager</b></span></p>
                </div>
              </div>
        
        
        <div class="card" onClick={()=>{this.handleSideBarValues("Publisher")}} title="Publisher">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>Publisher</b></span></p>
                </div>
              </div>
        
         
        
        
        <div class="card" onClick={()=>{this.handleSideBarValues("Caterer Portal")}}  title="Caterer Portal">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>Caterer Portal</b></span></p>
                </div>
              </div>
        
        
        
        <div class="card" onClick={()=>{this.handleSideBarValues("Reference Data")}}  title="Reference Data">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>Reference Data</b></span></p>
                </div>
              </div>
        
        
        
        <div class="card" onClick={()=>{this.handleSideBarValues("Image Library")}}  title="Image Library">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>Image Library</b></span></p>
                </div>
              </div>
        
        <div class="card" onClick={()=>{this.handleSideBarValues("Part Catelog")}}  title="Part Catelog">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>Part Catelog</b></span></p>
                </div>
              </div>
        
        
        
        
        <div class="card" onClick={()=>{this.handleSideBarValues("Container Catelog")}} title="container Catelog">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>container Catelog</b></span></p>
                </div>
              </div>
        
             
        
        <div class="card"  onClick={()=>{this.handleSideBarValues("Preferences")}}  title="Preferences">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>Preferences</b></span></p>
                </div>
              </div>
        
        
        <div class="card"  onClick={()=>{this.handleSideBarValues("Tools")}}  title="Tools">
              <img class="card-img-top" src={img_avatar} alt="Avatar" />
              <div class="card-body p-0 m-0">
                  <p class="text-center"><span><b>Tools</b></span></p>
                </div>
              </div>
        </div>
        </React.Fragment>
        
                );
        
    
}


    
        

    }
export default Dashboard;