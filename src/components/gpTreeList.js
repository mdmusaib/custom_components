import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';

const { TreeNode } = Tree;

class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  render() {
    return (
      <Tree onSelect={this.onSelect}>
        <TreeNode title="parent_container detailers" key="mpsasasadjkas">
          <TreeNode title="parentt_container detailers" key="0-0-0">
            <TreeNode title="leaf fsfdsfdsfdsfsd" key="0-0-0-0" />
            <TreeNode title="leaf_sadasdsadsadsadsa" key="0-0-0-1" />
            <TreeNode title="leaf_dssadsajhsjadsa" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title="leaf" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="parent 1-2" key="0-0-2">
            <TreeNode title="leaf" key="0-0-2-0" />
            <TreeNode title="leaf" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  }
}

export default Demo;
