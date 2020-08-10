import React, { Component } from 'react';
import { Lightbox } from "react-modal-image";
import '../input.css';

class gpImage extends Component{

    constructor(props){
        super(props)
        this.state={
            openModel:true,
        }
    }
    
   
componentDidMount(){
    this.setState({
        openModel:true
    })
}

 closeLightbox = (event) => {
  this.setState({
      openModel:false
  })
  this.props.onChange(event)
};
render(){
    return(
        this.state.openModel === true && (
          <Lightbox
            className="modelImgPreview"
            small={this.props.urlImage}
            medium={this.props.urlImage}
            large={this.props.urlImage}
            alt={this.props.alt}
            onClose={this.closeLightbox}
            
          />
        )
      )
    
    
}
}
export default gpImage;
