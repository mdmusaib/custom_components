import React, { Component } from 'react';
import TextArea from './Textarea';
import Label from './Label';
import GpCustomDropDown from './gpCustomDropdown';
import GpModel from './gpModel';
import {Icon} from 'antd';
import '../notes.css';

class GpNotepad extends Component{
    
    constructor(props){
        super(props)
        this.state={
            html:'',
            notes:'',
            editable:true
        
        }
        
    }

  
    handlePreviewNote=()=>{
    
      this.refs.previewNotes.innerHTML=this.refs.notepad.innerHTML;
    }

    handleClearNote=()=>{
      this.refs.notepad.innerHTML="";
    }
    handleChange=evt=>{
        this.setState({
            html:evt.target.value
        })
    }

    toggleEditable=()=>{
        this.setState({
            editable:!this.state.editable
        })
    }
    handleFontSize=()=>{
        
    }
    render(){
        console.log(this.props)
        const styles = {
            resize:"none",
            margin:"50px"
           
       }
       let textArea=React.createRef();
        return(
            <React.Fragment>

<div id="notepad" style={{margin:"50px"}} >

        <div
          id="editor1"
          ref="notepad"
          contentEditable={true}
          html={this.state.html} // innerHTML of the editable div
          disabled={!this.state.editable} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
            />
    <p ref="notes"></p>
    <fieldset>
    <select id="input-font" className="input" onChange={evt => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand('fontName',false,evt.target.value); // Send the command to the browser
        }}  >
      <option value="Normal">Normal</option>
        <option value="Arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Sans serif">Sans serif</option>
        <option value="Courier New">Courier New</option>
        <option value="Verdana">Verdana</option>
        <option value="Georgia">Georgia</option>
        <option value="Palatino">Palatino</option>
        <option value="Garamond">Garamond</option>
        <option value="Comic Sans MS">Comic Sans MS</option>
        <option value="Arial Black">Arial Black</option>
        <option value="Tahoma">Tahoma</option>
        <option value="Comic Sans MS">Comic Sans MS</option>
      </select>
      <Button cmd="italic" className="italic"/>
<Button cmd="bold"/>
<Button cmd="underline" className="fontStyle underline"/>
<Button cmd="strikethrough" className="fontStyle strikethrough"/>

<button  className="fontStyle align-left" onClick={()=>{document.execCommand( 'justifyLeft',false,null)}}/>
<button className="fontStyle align-center" onClick={()=>{document.execCommand( 'justifyCenter',false,null)}} />
<button className="fontStyle align-right" onClick={()=>{document.execCommand( 'justifyRight',false,null)}}  />

<button   className="preview-notes" onClick={()=>{this.refs.notes.innerHTML=this.state.html}}/>
<Button cmd="insertOrderedList" className="fontStyle insertOrderedList"/>
<Button cmd="insertUnorderedList" className="fontStyle insertUnorderedList"/>  
<input className="color-apply" type="color" onChange={evt => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand('forecolor',false,evt.target.value); // Send the command to the browser
        }} id="myColor" /> 

      
      <select id="fontSize" onChange={evt => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand('fontSize',false,evt.target.value); // Send the command to the browser
        }}>
        <option value="1">1</option>      
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="20">20</option>
      </select>
     

      <Icon type="eye"  style={{"fontSize": "30px","marginRight":"20px","cursor":"pointer"}} theme="twoTone" onClick={this.handlePreviewNote}/>
      <Icon type="close" style={{"fontSize": "30px","cursor":"pointer"}} onClick={this.handleClearNote}/>
      <div ref="previewNotes">

      </div>

      
      
  </fieldset>

 
  
</div>
</React.Fragment>
        );

    }
}
function Button(props) {

    return (
      <button
        key={props.cmd}
        className={props.cmd}
        onClick={evt => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}
      >
       
      </button>
 
    );
  }
export default GpNotepad;