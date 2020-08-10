import React from 'react';
import Label from './Label';
const gpCollapseSection=(props)=>{
    console.log(props)
    
    
    const onClick = () => {
        props.onClick(props.label);
      };
  
    return (
        <div
        style={{
          background: props.isOpen ? 'whitesmoke' : 'whitesmoke',
          // border: '1px solid grey',
          // borderRadius: '20px',
          // padding: '5px 10px',
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
        <Label labelText={props.label} labelClass="labelStyle" fontSize="15px"/>
          <div style={{ float: 'left' }}>
            {!props.isOpen && <span>&#9656; </span>}
            {props.isOpen && <span>&#9662;</span>}
          </div>
        </div>
        {props.isOpen && (
          <div
            style={{
              // background: '#eee',
              
              // marginTop: 10,
              // padding: '10px 20px',
            }}
          >
            {props.children}
          </div>
        )}
      </div>
    )
}
export default gpCollapseSection;