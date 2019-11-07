import React, { Component } from 'react';
import "../input.css";
import GpImage from './gpImageGallery';
class gpFileUpload extends Component{
  state =  {
    selectedFile: null,
    imagePreviewUrl: null,
    showComponent:false
  };


  fileChangedHandler = event => {
    
    this.setState({
      selectedFile: event.target.files[0].name,
      showComponent:false
    })
 
    

    let reader = new FileReader();
     
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(event.target.files[0])   
}



  handleFileUpload=()=>{
    let textInput=React.createRef();
    console.log(this.textInput)
    this.textInput.click()
    
  }
  handleImagePreview=()=>{
    this.setState({
      showComponent:true,
    })
  }

  handleCloseImagePreview=()=>{
    this.setState({
      showComponent:false
    })
  }

render() {
 
  let $imagePreview = (<div className="previewText image-container"></div>);
  if (this.state.imagePreviewUrl) {
    $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt={this.props.alt}  className={this.props.imgClassName} onClick={this.handleImagePreview} /> </div>);
  }
  
  
  const { inputWidth,inputHeight} = this.props;
    const styles = {
    width:inputWidth,
    height:inputHeight,
    
}

  return (
          <React.Fragment>
          <div style={{display:"inline-block"}}>
         <input type="text" value={this.state.selectedFile} style={styles} disabled/>
         <button className={this.props.className}  onClick={this.handleFileUpload}>Browse</button>
         <input type="file" name={this.props.name} ref={elem => this.textInput = elem}  onChange={this.fileChangedHandler} accept={this.props.accept} style={{display:'none'}}/>
         { $imagePreview }

         {this.state.showComponent ?
           <GpImage urlImage={this.state.imagePreviewUrl} onChange={this.handleCloseImagePreview} alt="Hello!!!"/>:
           null
        }

         </div>
         </React.Fragment>

  );
}

}
export default gpFileUpload;