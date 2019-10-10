import React, { Component } from 'react'; 
import Picky from 'react-picky';
import 'react-picky/dist/picky.css'; // Include CSS
 class gpCustomDropdown extends Component{
     constructor(){
         super();
         this.state={
             value:null,
             arrayValue:[]
         }
     }
  selectOption=(value)=> {
    console.log(value);
        
        this.setState({ value:value });
      }
 selectMultipleOption=(value)=> {
        console.log("Val", value);
        
        this.setState({ arrayValue: value });
      }
render(){
  console.log(this.state.arrayValue);
    return(

            <Picky
              value={this.state.arrayValue}
              options={this.props.options}
              onChange={this.selectMultipleOption}
              open={this.props.open}
              valueKey={this.props.valueKey}
              labelKey={this.props.labelKey}
              multiple={this.props.multiple}
              includeSelectAll={this.props.includeSelectAll}
              placeholder={this.props.placeholderText}
              includeFilter={this.props.includeFilter}
              dropdownHeight={this.props.dropdownHeight}
              numberDisplayed={this.props.numberDisplayed}
              keepOpen={this.props.keepOpen}
              render={this.props.render}         
            />
      
    )
}

 }


export  default gpCustomDropdown;