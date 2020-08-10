
import React, { Component } from "react";
import Select from "react-select";

class ReportComboBox extends Component {
  customStyles = {
    
    valueContainer: (provided) => ({
      
      ...provided,
      textOverflow: "ellipsis",
      maxWidth: "100%",
      whiteSpace: "no-wrap",
      overflow: "hidden",
      width:"auto",
      
      
    })
  };
  handleChange=(val)=>{
    console.log(val)
  }
  multiValueContainer = ({ selectProps, data }) => {
    console.log(data);
    const label = data.value + data.label;
    const allSelected = selectProps.value;
    const val = `${label}`;
    return val;
  };

  render() {
    console.log(this.props)
    const { optionGroups } = this.props;
    const {
    
      multiValueContainer,
      customStyles,
     
    } = this;
    return (
      <Select
        options={optionGroups}
        isMulti
        components={{
          MultiValueContainer: multiValueContainer
          // Option: CustomOption,
        }}
        name="colors"
        classNamePrefix="select"
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        styles={customStyles}
        onChange={this.handleChange}
        isSearchable={true}
      />
    );
  }
}

export default ReportComboBox;