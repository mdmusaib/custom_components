import React, { Component } from 'react';
import MultiSelectDropdownSearch from '../components/MultiSelectDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends Component{
    constructor(props){
        super(props);
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
    }
}
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
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
               
            <div className="col-md-6">
 {/* single dropdown */}
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

                </div>
 
            </div>
          
            
           

                
             

             
        );
    }
}

export default Main;