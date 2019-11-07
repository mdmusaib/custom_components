import React from 'react';
import '../input.css';


const InputComponent=(props)=> {
  
const { inputWidth,inputHeight,size } = props;
const styles = {
      width:inputWidth,
      height:inputHeight,
      textTransform:size === "large"?"uppercase":""
}

console.log(props);
const blockSpecialCharHandler=(e)=>{
  let regex=props.type ==="number"?new RegExp("[0-9]+$"):new RegExp("^[A-Za-z0-9]+$");
      const key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
      if (!regex.test(key)) {
          e.preventDefault();
          return false;
      }
}
// const handleCharacterLength=(e)=>{
//   const cons=e.target.value.length <= props.length ?"":e.preventDefault();return false;
 
// }

  return (
    <React.Fragment>
      <input 
      style={styles}
      placeholder={props.placeholderText !== undefined?props.placeholderText:null}
      type={props.type !== undefined?props.type : "text" }
      id={props.id}
      autoFocus={props.autoFocus}
      checked={props.checked}
      className={props.inputClass}
      spellCheck={props.spellCheck}
      name={props.name}
      maxLength={props.maxLength}
      // onBlur={props.onblur}
      onKeyPress={blockSpecialCharHandler}
      disabled={props.disabled}
      pattern={props.pattern}
      required={props.required}

      />
      </React.Fragment>
  );
}

export default InputComponent;
