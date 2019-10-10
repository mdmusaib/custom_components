import React from 'react';
import '../input.css';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
const Dropdown=(props)=>{

// function to handle the CheckBox change event
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
const handleChange=(e)=>{
  console.log(e.itemData);
}
    return (
    
      <DropDownListComponent id={props.id} className={props.className} dataSource={props.options} select={handleChange} fields={props.checkFields} popupHeight={props.popupHeight} popupWidth={props.popupWidth} placeholder={props.placeholderText} />
   );
}


    
export default Dropdown;
