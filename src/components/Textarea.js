import React from 'react';
const TextAreaComponent=(props)=>{
    const styles = {
       resize:"none",
       fontSize:props.fontSize
  }
  
  return (
      <React.Fragment>
    <textarea 
    rows={props.rows}
     cols={props.cols} 
     name={props.name}
     style={styles}
     spellCheck={props.spellCheck}
     className={props.textAreaClass}
     
    />
    </React.Fragment>
  );
    
}
export default TextAreaComponent;