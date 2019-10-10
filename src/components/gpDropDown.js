import React from 'react';
import '../input.css';
import { MultiSelectComponent, CheckBoxSelection, Inject } from '@syncfusion/ej2-react-dropdowns';
const gpMultiSelectDropDown=(props)=>{
    const handleChange=(e)=>{
        console.log(e.itemData);
    }
    //define the data with category
// console.log(props);
// // function to handle the CheckBox change event
// const onChange=(args) =>{
//     console.log(args);
//     // enable or disable the SelectAll in multiselect on CheckBox checked state
//     // this.mulObj.showSelectAll = args.checked;
// }
// // function to handle the CheckBox change event
// const onChangeDrop=(args)=> {
//     // enable or disable the Dropdown button in multiselect on CheckBox checked state
//     // this.mulObj.showDropDownIcon = args.checked;
// }
// // function to handle the CheckBox change event
// const onChangeLimit=(args)=> {
//     // enable or disable the selection limit in multiselect on CheckBox checked state
//     // this.mulObj.enableSelectionOrder = args.checked;
// }

    return (
    <div id="multichecbox" className='control-pane'>
    <div className='control-section '>
      <div id="multigroup" className="control-styles">
        <MultiSelectComponent id={props.id}  select={handleChange} dataSource={props.options} fields={props.checkFields}   placeholder={props.placeholder}  mode={props.mode} showSelectAll={props.showSelectAll}  filterBarPlaceholder={props.filterBarPlaceholder} popupHeight={props.popupHeight}>
          <Inject services={[CheckBoxSelection]}/>
        </MultiSelectComponent>
      </div>
    </div>
    

  </div>);
}


    
export default gpMultiSelectDropDown;
