import React, { Component } from 'react';
import InputComponent from './Input';
import Label from './Label';
import TextArea from './Textarea';
import Tabs from './gpTabs';

// import GpCustomDropDown from './gpCustomDropdown';
import GpDatePicker from './gpDatePicker';
import '../input.css';
import calendar from "../calendar.png";
import Button from './gpButton';
import GpFileUpload from './gpFileUpload';
import Accordion from './gpCollapse';
import GpModelComponent from './gpModelComponent';
import GpNotePad from './gpNotepad';
import MultiSelectDropdownSearch from './MultiSelectDropdown';
import SearchTree from './gpTreeList'
import TreeView from './TreeView';
import GpSelect from './gpSelect';
import {Menu,Icon,Avatar} from 'antd';
import GpMenu from './gpMenu';
import GpGridLayout from '../components/gpGridLayout';
import GpSideNav from '../components/gpSideNav';
class Main extends Component {
    constructor(){
        super();
        this.state= { 
          options:
            [
                { value: 'chocolate', label: 'Chocolate'  },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
                { value: 'dsa', label: 'Grapes' },
                { value: 'vafdsfdnilla', label: 'Goova' },
                { value: 'fdsfd', label: 'Apple' },
                { value: 'strawfsdfsdberry', label: 'Mango' },
                { value: 'vanfdsfsdilla', label: 'sweets' },
                { value: 'chocfdsfsdolate', label: 'lates' },
                { value: 'strafsdfsdwberry', label: 'Strawberry' },
                { value: 'vanifsdfdslla', label: 'Vanilla' },
                { value: 'gauva', label: 'Gauva' },
                { value: 'watermilon', label: 'Water milon' },
                { value: 'apple', label: 'Apple' },
                
                

          ],
        
          menus:['home'],

          colourOptions :[
  { value: "ocean", label: "ocen" , color: "#00B8D9" },
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "greennn", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "dasdsa", label: "dsa", color: "#666666" },
  { value: "silvkelr", label: "Silghver", color: "#666666" },
  { value: "hf", label: "Skjffdfdsfdsfdsilver", color: "#666666" }
],
       
       countries: [
            { Id:"1",Name: 'Australia', Code: 'AUSTRALIA' },
            { Id:"2",Name: 'Bermuda', Code: 'BERMUDA TRIANGLE' },
            { Id:"3", Name: 'Canada', Code: 'CANADA' },
            { Id:"4", Name: 'Cameroon', Code: 'CAMEROON' },
            {  Id:"5",Name: 'Denmark', Code: 'DENMARK' },
            { Id:"6", Name: 'France', Code: 'FR' },
            { Id:"7", Name: 'Finland', Code: 'FI' },
            { Id:"8", Name: 'Germany', Code: 'DE' },
            { Id:"9", Name: 'Greenland', Code: 'GL' },
            { Id:"10", Name: 'Hong Kong', Code: 'HK' },
            { Id:"11", Name: 'India', Code: 'IN' },
            { Id:"12",  Name: 'Italy', Code: 'IT' },
            { Id:"13", Name: 'Japan', Code: 'JP' },
            { Id:"14", Name: 'Mexico', Code: 'MX' },
            { Id:"15", Name: 'Norway', Code: 'NO' },
            { Id:"16", Name: 'Poland', Code: 'PL' },
            { Id:"17", Name: 'Switzerland', Code: 'CH' },
            { Id:"18", Name: 'United Kingdom', Code: 'GB' },
            { Id:"19", Name: 'United States', Code: 'US' }
        ],
        
        // maps the appropriate column to fields property
        
        }
   
    }

    handleSideBarValues=(val)=>{
      
      // var arr=this.state.menus.filter(function(item){
      //   item!=e.target.title
      // });
      
      //   this.setState({
      //     menus:[...this.state.menus, arr]
      //   })
      
      if (this.state.menus.indexOf(val) == -1) {
        this.setState({
          menus:[...this.state.menus,val]
        })
    }
      
      }
    
     handleChange=(e)=>{
        console.log(e);
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
    
    render() { 
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
        return (
            <React.Fragment>
              
              <div className="wrapMain">
<GpSideNav menus={menu} menuTitle={this.state.menus} onClick={this.handleSideBarClose}/>
<GpGridLayout onClick={this.handleSideBarValues}/>
</div>
            <div className="row ">
            <div className="main col-md-4">
            <Label labelText="Part#" labelClass="labelStyle" spanClass="required" fontSize="12px"/>
            <InputComponent  placeholderText="text" type="text" inputClass="custom-input" spellCheck="false" inputWidth="100px" inputHeight="20px" size="large" name="part#"  maxLength="32" disabled={false} autoFocus={true} length="3"/>
            </div>
            <div className="main col-md-4">
            <Label labelText="Part Name" labelClass="labelStyle"  fontSize="12px"/>
            <InputComponent placeholderText="Part Name" type="text" inputClass="custom-input" spellCheck="false" inputWidth="150px" inputHeight="20px"  maxLength="10"/>
            </div>

            <div className="main col-md-4">
            <Label labelText="Max. Weight" labelClass="labelStyle"  fontSize="12px"/>
            <InputComponent  type="number" inputClass="custom-input" spellCheck="false" inputWidth="80px" inputHeight="20px" maxLength="2"  required={true}/>
            </div>
            </div>
            
          <div className="row">
          <div className="main col-md-3">
            <Label labelText="Is Radio" spanClass="required" labelClass="labelStyle"  fontSize="12px" checked={true}/>
            <InputComponent  type="radio" inputClass="custom-input"  />
            </div>
            <div className="main col-md-3">
            <Label labelText="Password" spanClass="required" labelClass="labelStyle"  fontSize="12px" checked={true}/>
            <InputComponent  type="password" inputClass="custom-input"  />
            </div>
            <div className="main col-md-3">
            <Label labelText="Description" labelClass="labelStyle"  fontSize="12px"/>
            <TextArea name="description" rows="5" cols="90" spellCheck="false" fontSize="15px" textAreaClass="custom-textarea"/>
            </div>
           
            
          </div>
            
    

            {/* second row */}
          <div className="container">
          <div className="row">
           <div className="main col-md-2">
            <Label labelText="Is Meal" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>
            <InputComponent  type="checkbox" inputClass="custom-input" name="checkbox" disabled={false} />
            </div>

            <div className="col-md-2">
             <Label labelText="Dropdown" labelClass="labelStyle"  fontSize="12px"/>     
             <MultiSelectDropdownSearch 
             className="gpMultiSelectDropdown"
              options={this.state.options}
              enableSearch={true}
              hasSelectAll={true}
              maxOptionsToRender="5"
              resetable={true}
              maxOptionsToRender={10}
              display={true}
              />
            </div>



            <div className="col-md-2">
            <Label labelText="Single Dropdown" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>     
            <MultiSelectDropdownSearch 
              options={this.state.options}
              enableSearch={true}
              hasSelectAll={true}
              maxOptionsToRender="5"
              resetable={true}
              mode="single"
              display={true}
              />
            </div>

            <div className=" col-md-2">
            <Label labelText="Single Dropdown" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>     
            <MultiSelectDropdownSearch 
              options={this.state.options}
              enableSearch={true}
              hasSelectAll={true}
              maxOptionsToRender="5"
              resetable={true}
             
              display={true}
              />
            </div>
            <div className=" col-md-4"> 
            <Label labelText="Search Dropdown" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>    
            <MultiSelectDropdownSearch 
              options={this.state.options}
              enableSearch={true}
              hasSelectAll={true}
              maxOptionsToRender="5"
              resetable={true}
             
              display={true}
              />
            </div>
           </div>
          </div>
          

            

 

{/* tabs components */}
            
            <div className="dropdown">
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

                <Tabs tab="tab" tabList="tab-list" tabBody="tabBody" className="col-md-2"  toolbar={true}>
        <div label="Container" title="Container" >
       
            <Label labelText="Search Dropdown" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>    
            <MultiSelectDropdownSearch 
              options={this.state.options}
              enableSearch={true}
              hasSelectAll={true}
              maxOptionsToRender="5"
              resetable={true}
             
              display={true}
              />
           
        </div>
        <div label="Product" title="Product">
        
            <Label labelText="Is Meal" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>
            <InputComponent  type="checkbox" inputClass="custom-input" name="checkbox" disabled={false} />
          
        </div>
        <div label={<GpMenu buttonTitle={<img src="http://www.w3.org/html/logo/downloads/HTML5_Logo_32.png" />}/>} title="Container_part">
       
        <GpModelComponent gpModelTitle="warning" onClick={this.refs.child} confirmModel={false}  
        okText="Submit" cancelText="close">
      <div label='Options'>
      <p>Tabs Opening in Model</p>
      </div>
        
      </GpModelComponent>
        
        </div>
        <div label="Module" title="Module">
        <div className="main">
        <Label labelText="End.Date" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>    
                <GpDatePicker/>
            </div>
        </div>
      </Tabs>

<div className="col-md-3">
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

                <div className=" col-md-4">
                <Label labelText="Upload File" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>
              <GpFileUpload inputWidth="300px" accept="image/x-png,image/gif,image/jpeg"  className="btn_class" name="img_file" alt="Display Img Preview" imgClassName="img_class"/>
           </div>
           

 {/* Custom Button Components */}
<div className="container">
  <div className="row">
  <div className="col-md-6">
  <Button type="submit" className="text-center btn btn-warning gpButton" width="100px" height="30px"   >
                   Browse
                 </Button>
</div>
<div className="col-md-6 pd-30">
  <Button type="submit" className="text-center btn btn-info gpButton" width="100px" height="30px"   >
                   Upload
  </Button>


  </div>
  </div>
</div>
 
{/* collapse components */}



  <div className="row">
    <div className="col-md-6">
    <Accordion  allowMultipleOpen>
        <div label='Settings'>
      
                <Label labelText="Upload File" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>
              <GpFileUpload inputWidth="300px" accept="image/x-png,image/gif,image/jpeg"  className="btn_class" name="img_file" alt="Display Img Preview" imgClassName="img_class"/>
          
        </div>
        <div label='General Collapse'>
        
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

        <div label='Testing'>
        
       
             <Label labelText="Dropdown" labelClass="labelStyle"  fontSize="12px"/>     
             <MultiSelectDropdownSearch 
              options={this.state.options}
              enableSearch={true}
              hasSelectAll={true}
              maxOptionsToRender="5"
              resetable={true}
              mode="single"
              display={true}
              />
          
        </div>

        <div label='Options'>
        
            <Label labelText="Part#" labelClass="labelStyle" spanClass="required" fontSize="12px"/>
            <InputComponent  placeholderText="text" type="text" inputClass="custom-input" spellCheck="false" inputWidth="100px" inputHeight="20px" size="large" name="part#"  maxLength="32" disabled={false} autoFocus={true} length="3"/>
            
        </div>
      </Accordion>
    </div>
  
     <div className="col-md-6">
     <Accordion >
        <div label='Settings'>
      
                <Label labelText="Upload File" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>
              <GpFileUpload inputWidth="300px" accept="image/x-png,image/gif,image/jpeg"  className="btn_class" name="img_file" alt="Display Img Preview" imgClassName="img_class"/>
           
        </div>
        <div label='General Collapse'>
      
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

        <div label='Testing'>
        
        
        <TreeView/>  
          
        </div>

        <div label='Options'>
      
            <Label labelText="Part#" labelClass="labelStyle" spanClass="required" fontSize="12px"/>
            <InputComponent  placeholderText="text" type="text" inputClass="custom-input" spellCheck="false" inputWidth="100px" inputHeight="20px" size="large" name="part#"  maxLength="32" disabled={false} autoFocus={true} length="3"/>
            
        </div>
      </Accordion>
       </div>         

  </div>

{/* custom resusable  model  */}
                 
                
                

      <GpModelComponent gpModelTitle="warning" confirmModel={false}>
      <div label='Options'>
      <p>Custom Model Content using React.js</p>
      </div>
        
      </GpModelComponent>

      
              {/* notepad  */}

              <div className="container">
                <div className="row">
                  {/* <div className="col-md-12 offset-md-6 p-30">
                  <Button type="submit" className="text-center btn btn-info gpButton" width="100px" height="30px"   >
                   CLear
                  </Button>
             
                  
                  <Button type="submit" className="text-center btn btn-info gpButton" width="100px" height="30px"   >
                   Preview
                </Button>
               
                  
                  <Button type="submit" className="text-center btn btn-info gpButton" width="100px" height="30px"   >
                   Notepad library
                </Button>
                  </div> */}

                  <div className="col-md-12">
                <Label labelText="Notepad" labelClass="labelStyle" spanClass="required" fontSize="12px"/>
                <GpNotePad name="description" rows="15" cols="120" spellCheck="false" fontSize="15px" textAreaClass="custom-textarea"/>
                </div>


                </div>
                <div className="row">
                  <div className="col-md-3">
                  <SearchTree />
                  </div>
                </div>


              </div>
              
                {/* <NotepadComponent/> */}

                <TreeView/>  
                    


                    
                <Label labelText="Upload File" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>
              <GpFileUpload inputWidth="300px" accept="image/x-png,image/gif,image/jpeg"  className="btn_class" name="img_file" alt="Display Img Preview" imgClassName="img_class"/>


              
              <Label labelText="Upload File" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>
              <GpFileUpload inputWidth="300px" accept="image/x-png,image/gif,image/jpeg"  className="btn_class" name="img_file" alt="Display Img Preview" imgClassName="img_class"/>

              {/* Dropdown with icon using react-select */}
       {/* <div className="col-md-2">
       <GpFinalSelect optionGroups={this.state.colourOptions}/>
       </div>              */}
    

            </React.Fragment>
         );
    }
}
 
export default Main;