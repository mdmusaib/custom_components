import React from 'react';

import Select from 'react-select';

const gpDropdown=(props)=> (
  <Select
    
    isMulti
    name="colors"
    options={props.options}
   
  />
);
export default gpDropdown;