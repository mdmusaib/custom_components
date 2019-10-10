import React, { Component } from 'react';
import InputComponent from './Input';
import Label from './Label';
import TextArea from './Textarea';
import Tabs from './gpTabs';
import GpCustomDropDown from './gpCustomDropdown';
import GpDatePicker from './gpDatePicker';
import '../input.css';

class Main extends Component {
    constructor(){
        super();
        this.state= { optionValue:
            [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'dsa', label: 'Grapes' },
                { value: 'vafdsfdnilla', label: 'Goova' },
                { value: 'fdsfd', label: 'Apple' },
                { value: 'strawfsdfsdberry', label: 'Mango' },
                { value: 'vanfdsfsdilla', label: 'sweets' },
                { value: 'chocfdsfsdolate', label: 'lates' },
                { value: 'strafsdfsdwberry', label: 'Strawberry' },
                { value: 'vanifsdfdslla', label: 'Vanilla' }
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


     handleChange=(e)=>{
        console.log(e);
    }
    render() { 
      
        return (
            <React.Fragment>
            
            <div className="main">
            <Label labelText="Part#" labelClass="labelStyle" spanClass="required" fontSize="12px"/>
            <InputComponent  placeholderText="text" type="text" inputClass="custom-input" spellCheck="false" inputWidth="100px" inputHeight="20px" size="large" name="part#"  maxLength="32" disabled={false} autoFocus={true} length="3"/>
            </div>
            <div className="main">
            <Label labelText="Part Name" labelClass="labelStyle"  fontSize="12px"/>
            <InputComponent placeholderText="Part Name" type="text" inputClass="custom-input" spellCheck="false" inputWidth="150px" inputHeight="20px"  maxLength="10"/>
            </div>

            <div className="main">
            <Label labelText="Max. Weight" labelClass="labelStyle"  fontSize="12px"/>
            <InputComponent  type="number" inputClass="custom-input" spellCheck="false" inputWidth="80px" inputHeight="20px" maxLength="2"  required={true}/>
            </div>

            <div className="main">
            <Label labelText="Is Radio" spanClass="required" labelClass="labelStyle"  fontSize="12px" checked={true}/>
            <InputComponent  type="radio" inputClass="custom-input"  />
            </div>
            <div className="main">
            <Label labelText="Is Radio" spanClass="required" labelClass="labelStyle"  fontSize="12px" checked={true}/>
            <InputComponent  type="password" inputClass="custom-input"  />
            </div>
            <div className="main">
            <Label labelText="Is Meal" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>
            <InputComponent  type="checkbox" inputClass="custom-input" name="checkbox" disabled={false} />
            </div>
            <div className="main">
            <Label labelText="Description" labelClass="labelStyle"  fontSize="12px"/>
            <TextArea name="description" rows="5" cols="90" spellCheck="false" textAreaClass="custom-textarea"/>
            </div>
            {/* <div className="main">
            <Label labelText="Container" spanClass="required" labelClass="selectLabel"  fontSize="12px"/>
                
                  <div className="main">
                  <GpMultiSelectDropDown id="dropdown" options={this.state.countries} checkFields={this.state.checkFields} placeholder="Search" mode="CheckBox" showSelectAll={true} 
                  filterBarPlaceholder="Search Filter" popupHeight="315px" onChange={this.handleChange}/>
</div>
<div className="main">
<GpDropDownSelectComponent id="dropdown" options={this.state.countries} popupHeight="300px" popupWidth="350px" checkFields={this.state.checkFields} placeholderText="Search"  />   
</div>
            </div> */}
           

             <div className="dropdown">
             <Label labelText="Dropdown" labelClass="labelStyle"  fontSize="12px"/>     
            <GpCustomDropDown options={this.state.countries} open={false} valueKey="Name" labelKey="Code" 
            multiple={true} includeSelectAll={true} placeholderText="Select List" 
            includeFilter={true} dropdownHeight="200px"/>
            </div>


            <div className="dropdown">
            <Label labelText="Single Dropdown" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>     
            <GpCustomDropDown options={this.state.countries} 
            open={false} valueKey="Code" labelKey="Name" code={true} keepOpen={false}
            multiple={true} includeSelectAll={true} placeholderText="Select List"
            includeFilter={true} dropdownHeight="300px" 
            
            render={({
                style,
                isSelected,
                item,
                selectValue,
                labelKey,
                valueKey,
                multiple,
                code,
                placeholderText
              }) => {
                console.log(code);
                return (
                  <li
                    style={style} // required
                    className={isSelected ? 'selected' : ''} // required to indicate is selected
                    key={item[valueKey]} // required
                    onClick={() => selectValue(item)}
                  >
                  
                    <span style={{ fontSize: '12px' }}>{multiple===true?item[valueKey]+"-"+item[labelKey]:item[labelKey]}</span>
                  </li>
                );
              }}
            />
            </div>


            <div className="dropdown"> 
            <Label labelText="Search Dropdown" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>    
            <GpCustomDropDown options={this.state.countries} 
            open={false}  
            multiple={true} includeSelectAll={false} 
            numberDisplayed="3" keepOpen={false}
            placeholderText="Select List"
            includeFilter={true} dropdownHeight="500px"
            code={true} 
            />
            </div>

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
      
<div className="main">
            <Tabs>
        <div label="Container">
       
            <Label labelText="Search Dropdown" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>    
            <GpCustomDropDown options={this.state.countries} 
            open={false} valueKey="Name" labelKey="Code" 
            multiple={true} includeSelectAll={false} 
            numberDisplayed="3" keepOpen={false}
            placeholderText="Select List"
            
            includeFilter={true} dropdownHeight="500px"
        
            />
           
        </div>
        <div label="Product">
        
            <Label labelText="Is Meal" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>
            <InputComponent  type="checkbox" inputClass="custom-input" name="checkbox" disabled={false} />
          
        </div>
        <div label="Container Part">
       
            <Label labelText="Is Meal" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>
            <InputComponent  type="text" inputClass="custom-input" name="part" disabled={false} />
        
        </div>
        <div label="Module">
        <div className="main">
        <Label labelText="End.Date" spanClass="required" labelClass="labelStyle"  fontSize="12px"/>    
                <GpDatePicker/>
            </div>
        </div>
      </Tabs>
      </div>      

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
            </React.Fragment>
         );
    }
}
 
export default Main;