import React from 'react';

import calendar from "../calendar.png";
import closeButton from "../close.png";
export default class CustomCalendarComponent extends React.Component{
    render() {
        const style={
            cursor:"pointer",
          
        }
        return (
            <React.Fragment>
                <input
                    
                    value={this.props.startDate}
                   
                    type="input"
                />
            <img src={calendar} onClick={this.props.onClick} alt={this.props.value} style={style}/>
            <img src={closeButton} style={style}   alt={this.props.value} />
            </React.Fragment> 
          );
    }
}