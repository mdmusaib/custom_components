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
    render(){
        return(

            
            <div className="container ">
                {this.state.loader === true?<div className="loader"></div>:''}
                  {/* <!---- inutpu box 1------> */}
                <div className="row">
                    <div className="header-drop">
                        
                    </div>
                <p className="text-justify text-center">Card Layout Using Css Grid Layout</p>
                <Header/>
                
                
                </div>
                {/* <!---- inutpu box 2------> */}
                <div className="row">
               
                    <p className="text-justify text-center">Dropdown Using React-sm-select Third Party Library</p>
                
                <Dropdown/> 
                <p className="text-justify text-center">Notepad Components</p>
                <GpNotePad name="description" rows="15" cols="120" spellCheck="false" fontSize="15px" textAreaClass="custom-textarea"/>

                <div className="container">
                    <div className="row" >

                        <Tabs tab="tab" tabList="tab-list" tabBody="tabBody" className="col-md-2"  toolbar={true}>
                           <div label="DropDown" title="Dropdown">
                               <Dropdown/>
                               </div>

                               <div label="Notepad" title="Notepad">
                               <GpNotePad/>
                               </div> 

                               <div label="File Upload" title="Image">
                               <GpFileUpload inputWidth="300px" accept="image/x-png,image/gif,image/jpeg"  className="btn_class" name="img_file" alt="Display Img Preview" imgClassName="img_class"/>
                               </div> 
                               
                       </Tabs>
                    </div> 
                    </div>
                </div>
                
                


               
                       
                       <p className="text-justify text-center">Tree View With Search using a third party library Components</p>
                       <div className="row">
                           <div className="col-md-6">
                           <SearchTree />
                           </div>
                           <div className="col-md-6">
                           <TreeView/>  
                           </div>
                       </div>
                       
                       <p className="text-justify text-center"><b>Buttons,Label,Model Components</b></p>
                        <div className="row">
                            <div className="col-md-4">
                            <Button type="submit" className="text-center btn btn-warning gpButton" width="100px" height="30px"   >
                   Browse
                 </Button>
                            </div>
                            <div className="col-md-4">
                            <Label labelText="Password" spanClass="required" labelClass="labelStyle"  fontSize="12px" checked={true}/>
                            </div>
                            <div className="col-md-4">
                            <Label labelText="Part#" labelClass="labelStyle" spanClass="required" fontSize="12px"/>
                            </div>
                        </div>

                        <p className="text-justify text-center"><b>Input, Textarea Components</b></p>

                        <div className="row">
                            <div className="col-md-2">
                            <Label labelText="Part#" labelClass="labelStyle" spanClass="required" fontSize="12px"/>
            <InputComponent  placeholderText="text" type="text" inputClass="custom-input" spellCheck="false" inputWidth="100px" inputHeight="20px" size="large" name="part#"  maxLength="32" disabled={false} autoFocus={true} length="3"/>
                            </div>
                            <div classNam="col-md-2">
                            <Label labelText="Part Name" labelClass="labelStyle"  fontSize="12px"/>
            <InputComponent placeholderText="Part Name" type="text" inputClass="custom-input" spellCheck="false" inputWidth="150px" inputHeight="20px"  maxLength="10"/>
                            </div>
                            <div className="col-md-2">
                            <Label labelText="Max. Weight" labelClass="labelStyle"  fontSize="12px"/>
            <InputComponent  type="number" inputClass="custom-input" spellCheck="false" inputWidth="80px" inputHeight="20px" maxLength="2"  required={true}/>
                            </div>
                            <div className="col-md-2">
                            <Label labelText="Is Radio" spanClass="required" labelClass="labelStyle"  fontSize="12px" checked={true}/>
                            
            <InputComponent  type="radio" inputClass="custom-input"  />
                            </div>
                            <div className="col-md-3">
                            <Label labelText="Description" labelClass="labelStyle"  fontSize="12px"/>
            <TextArea name="description" rows="5" cols="70" spellCheck="false" fontSize="15px" textAreaClass="custom-textarea"/>
                            </div>
                        </div>

                        

<p className="text-justify text-center"><b>Datepicker using third party harkerone datepicker Components</b></p>

            <div className="row">
                <div className="col-md-6">
                <Label labelText="Eff.Date" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>    
                <GpDatePicker popperPlacement="top-end"
                 peekNextMonth={true}
                showPopperArrow={false}
                showMonthDropdown={true}
                showYearDropdown={true}
                customClassName="datePicker-input"
                effDate={new Date("09/12/2000")}
                dropdownMode="select"
                id="datePicker"
                />
                </div>
                <div className="col-md-6">
                <Label labelText="End.Date" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>    
                <GpDatePicker popperPlacement="top-end"
                 peekNextMonth={true}
                showPopperArrow={false}
                showMonthDropdown={true}
                showYearDropdown={true}
                customClassName="datePicker-input"
                effDate={new Date("09/12/2000")}
                dropdownMode="select"
                id="datePicker"

                />
                </div>
            </div>



            <p className="text-justify text-center"><b>Collapse custom Components</b></p>

            <Accordion  allowMultipleOpen>
                <span label="Setting">
                <Label labelText="End.Date" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>    
                <GpDatePicker popperPlacement="top-end"
                 peekNextMonth={true}
                showPopperArrow={false}
                showMonthDropdown={true}
                showYearDropdown={true}
                customClassName="datePicker-input"
                effDate={new Date("09/12/2000")}
                dropdownMode="select"
                id="datePicker"

                /> 
                </span>

                <span label="General">
                <GpModelComponent gpModelTitle="warning" onClick={this.refs.child} confirmModel={false}  
        okText="Submit" cancelText="close">
      <div label='Options'>
      <p>Tabs Opening in Model</p>
      </div>
        
      </GpModelComponent>
                </span>

                <span label="Option">
                <Label labelText="Is Radio" spanClass="required" labelClass="labelStyle"  fontSize="12px" checked={true}/>
                            
                            <InputComponent  type="checkbox" inputClass="custom-input"  />  
                </span>
                <span label="more Options">
                <div label="DropDown" title="Dropdown">
                               <Dropdown/>
                               </div>
                </span>
            </Accordion>
                       <p className="text-justify text-center">File Upload  Components</p>
                       <GpFileUpload inputWidth="300px" accept="image/x-png,image/gif,image/jpeg"  className="btn_class" name="img_file" alt="Display Img Preview" imgClassName="img_class"/>
                       
                </div>
        );

    }
}
export default Index;