import React from 'react';


const gpTab=(props)=>{
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
      <li 
        className={className}
        onClick={onClick}
      >
        {props.label}
      </li>
    );
  }



export default gpTab;