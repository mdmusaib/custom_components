import React, { Component } from 'react';
import Button from './gpButton';
class gpModel extends React.Component {
    state = { show: false }

    
  
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }
      
    render() {
      console.log(this.props)
      return (
        <React.Fragment>
          
          <Modal show={this.state.show} handleClose={this.hideModal} gpModelTitle={this.props.gpModelTitle} confirmModel={this.props.confirmModel}
          onClick={this.props.onClick}
          >
         {this.props.children}
           
          </Modal>
          
          {/* <Button type="submit" className="text-center btn btn-warning gpButton" onClick={this.showModal} width="100px" height="30px"   >
                   show
                 </Button> */}
          </React.Fragment>
      )
    }
  }
  
  const Modal = ({ handleClose, show, children,gpModelTitle,confirmModel }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    if(confirmModel=== true){
        return (
           <div></div>
          );
      
    }else{
        return (
            <div className={showHideClassName}>
              <section className='modal-main'>
                 <div className="modal-header">
                <h4 className="modal-title">{gpModelTitle}</h4>
                <button type="button" className="close" onClick={handleClose} data-dismiss="modal">&times;</button>
              </div>
                <div className="modal-body">
                {children}
              </div>
              </section>
            </div>
          );
      
    }
  };
  
  
export default gpModel;