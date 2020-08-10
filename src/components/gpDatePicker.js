import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../input.css";
import calendar from "../calendar.png";
import {FaWindowClose} from 'react-icons/fa';
import closeButton from "../close.png";
// import ExampleCustomInput from './datePicker';
class gpDatePicker extends Component {
  constructor(){
    super();
    this.state = {
      startDate:'',
      datePickerIsOpen: false,
    };
  
  }

  handleClear=()=>{
    this.setState({
      startDate:null
    })
  }
 

 handleChange = date => {
  console.log(this.state.startDate);
  this.setState({
    startDate: date
  });
  };
  toggle = (event) => {
    event.target.click()
    this.component.setOpen(this.click);
    this.click = !this.click;
}
handleClick=(event)=>{
  console.log(this.component)
}
   render(){
    const style={
      cursor:"pointer",
      
    
  }
  console.log(new Date(this.state.startDate));
    return (
      <React.Fragment>
      
      <DatePicker
        fixedHeight={false}
        selected={this.state.startDate}
        onChange={value => this.handleChange(value)}
        popperPlacement={this.props.popperPlacement}
        showPopperArrow={this.props.showPopperArrow}
        peekNextMonth={this.props.peekNextMonth }
        dateFormat="dd/MM/yyyy"
        showMonthDropdown={this.props.showMonthDropdown}
        showYearDropdown={this.props.showYearDropdown}
        openToDate={this.props.openToDate}
        ref={(r) => {
          this.component = r;
        }}

        
        
        calendarClassName={this.props.customClassName}
        minDate={this.props.effDate}
        maxDate={this.props.endDate}
        dropdownMode={this.props.dropdownMode}
        popperModifiers={{
          offset: {
            enabled: true,
            offset: '220px, -35px'
          },
        
        }}
        
      /><img  id={this.props.id} src={calendar} onClick={this.toggle} alt={this.props.value} style={{"position": "absolute","left": "190px","padding": "5px","cursor": "pointer"}}/>
      <i style={{"position": "absolute","left": "212px","padding": "2px","cursor": "pointer"}} onClick={this.handleClear}  alt={this.props.value} ><FaWindowClose/></i>
      </React.Fragment>
    );
   }
 
}


export default gpDatePicker;
