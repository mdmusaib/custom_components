import React, { Component } from 'react';
import { MultiSelect } from 'react-sm-select';
import '../dropdown.css';
import img_avatar from  '../img_avatar.jpg';
import { Avatar } from 'antd';

class MultiSelectDropdown extends Component{
  constructor(props){
    super(props)
    this.state={
      value:[]
    }
  }
  handleDropdownChange=(event)=>{
    
    console.log(event)
    // this.setState({
    //   value:value
    // })
  }

  render(){
  
    // const Option = ({option,isSingle}) => (
    //     <span className="Option__label">
    //       {this.props.display === true?
    //         option.value+"-"+option.label:option.value
    //       }
          
          
    //     </span>
    // );
    const Option = ({option}) => (
      <div className="Option__renderer">
        {<img src={img_avatar} alt="options" />}
        <span className="Option__label">
        {this.props.display === true?
            option.value+"-"+option.label:option.value
          }
        </span>
      </div>
    );
    const MultiSelectOption = ({option,isSingle,checked})=>(
     
    
      <div className="Option__renderer">
        {/* { <img src={img_avatar} />} */}
        <span className="Option__label">
        {this.props.display === true?
            option.value+"-"+option.label:option.value
          }
        </span>
      </div>
 
    );

  //   const Value = ({value, options}) => {
  //     var opt;
  //  for(opt of options){
    
  //    if(opt.value == value){
  //      return value +'-'+opt.label;
  //    }
  //  }
  //   };


    return (
      <React.Fragment>
        
        <MultiSelect 
        selectAllLabel="Select All"
        options={this.props.options}
        enableSearch={this.props.enableSearch}
        hasSelectAll={this.props.hasSelectAll}
        resetable={this.props.resetable}
        mode={this.props.mode}
        Option={this.props.mode?Option:MultiSelectOption}
        className={this.props.className}
        maxOptionsToRender={this.props.maxOptionsToRender}
        />
      </React.Fragment>
    );
  }
}
export default MultiSelectDropdown;