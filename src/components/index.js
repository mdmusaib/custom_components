import React, { Component } from 'react';

import Header from '../updates/header';
import Dropdown from '../updates/main';
import GpNotePad from './gpNotepad';
import Tabs from './gpTabs';
import GpFileUpload from './gpFileUpload';
import SearchTree from './gpTreeList'
import TreeView from './TreeView';
import Button from './gpButton';
import Label from './Label';
import InputComponent from './Input';
import TextArea from './Textarea';
import GpDatePicker from './gpDatePicker';
import Accordion from './gpCollapse';
import GpModelComponent from './gpModelComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../input.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import PreLoader from 'react-loader-spinner';
import GpNav from '../updates/gpNav';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

class Index extends Component{

    state={
        loader:true,
    }

    componentDidMount(){
        setTimeout(() => {
           this.setState({
               loader:false
           })
          }, 2000);
    }
    handleLoadData=(data)=>{
        console.log(data)
        return (<GpNav menus={data}/>)
    }
    render(){
        
        return(

            <HashRouter>
            <div className="container">
                {this.state.loader === true?<div className="loader"></div>:''}

                <div className="row">
                    
                    <Route exact path="/" render={()=><Header onLoad={this.handleLoadData}/>} />
                    <Route  path="/Designer"  component={() => <React.Fragment>{this.handleLoadData()}<Dropdown config={this.state.loader} /></React.Fragment>} />
                    <Route  path="/Loader" component={TreeView}/>
                
                

                  
                
                </div>
               
                       
            </div>
            </HashRouter>
        );

    }
}
export default Index;