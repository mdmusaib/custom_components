import React, { Component } from 'react';
import { Modal,Icon} from 'antd';
import Button from './gpButton';
class gpModelComponent extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
      console.log(this.props)
    return (
   <React.Fragment>
        <Button  onClick={this.showModal}  className="text-center btn btn-warning gpButton" width="100px" height="30px"   >
        <Icon type="user"></Icon> Modal
        </Button>
        <Modal
        ref='child'
          icon={<Icon type="question-circle"></Icon>}
          title={this.props.gpModelTitle}
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText={this.props.okText}
          cancelText={this.props.cancelText}
        >
          {this.props.children}
        </Modal>
        </React.Fragment>
    );
  }
}



export default gpModelComponent;