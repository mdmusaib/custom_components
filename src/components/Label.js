import React from 'react';
import '../input.css';

const LabelComponent=(props)=>{
    const { fontSize } = props;
const styles = {
      fontSize: fontSize,
      
}
    return(
        <React.Fragment>
        <span className={props.spanClass}>{props.spanClass !== undefined? "*" : null}</span><label style={styles} className={props.labelClass} htmlFor={props.labelText}>{props.labelText}</label>
    </React.Fragment>
    );
    
}

export default LabelComponent;