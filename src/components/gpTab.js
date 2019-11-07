import React from 'react';
import {Icon} from 'antd';

const gpTab=(props)=>{
  console.log(props)
//   static propTypes = {
//     activeTab: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
//   };
const  onClick = () => {
  const { label, onClick } = props;
  onClick(label);
}



  let className = 'tab-list-item';

  if (props.activeTab === props.label) {
    className += ' tab-list-active';
  }
  return (
props.toolbar === true?
 <li title={props.label}
 className={className}
 onClick={onClick}
 title={props.title}
>
{props.label} {props.title} 


</li>
:
      <li title={props.label}
        className={className}
        onClick={onClick}
      >
        {props.label}
      </li>
    );
  }



export default gpTab;