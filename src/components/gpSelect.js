import React, { Component } from 'react';
import { MultiSelect } from 'react-sm-select';
import 'react-sm-select/dist/styles.css';
 
class GpSelect extends Component{
constructor(props){
    super(props)
    this.state = {
        options: [
          { value: 'red', label: 'Red' },
          { value: 'blue', label: 'Blue' }
        ],
        value: ['blue']
      }        

}

 render(){
return(
<MultiSelect
  id="some-id"
  options={this.state.options}
  value={this.state.value}
  onChange={value => this.setState({ value })}
/>
);
}
}

export default GpSelect;
 

