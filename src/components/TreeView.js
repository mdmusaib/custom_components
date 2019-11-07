import React from 'react';
import {Icon} from 'antd';
import TreeView from 'devextreme-react/tree-view';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
import { products } from './data.js';

const options = ['contains', 'startswith'];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          checkedItems: [],
          value:'contains'
        };
        this.selectionChanged = this.selectionChanged.bind(this);
      }
  expandAll(tree) {  
    this.expandChildren(tree.instance.getNodes(), tree);  
  }  
   collapseAll(tree) {  
    this.collapseChildren(tree.instance.getNodes(), tree);  
  } 
  render() {
    return (
      <React.Fragment>
          
        <TreeView
          id={'treeview'}

          ref={this.treeView}
          items={products}
          width={500}
          searchMode={this.state.value}
          searchEnabled={true}
          itemRender={renderTreeViewItem}
        />
       
      </React.Fragment>
    );
  }
  selectionChanged(e) {
    const value = e.node;
    if (this.isProduct(value)) {
      this.processProduct({
        id: value.key,
        text: value.text,
        itemData: value.itemData,
        selected: value.selected,
        category: value.parent.text
      });
    } else {
      value.items.forEach(product => {
        this.processProduct({
          id: product.key,
          text: product.text,
          itemData: product.itemData,
          selected: product.selected,
          category: value.text
        });
      });
    }
  }

  isProduct(data) {
    return !data.items.length;
  }

  processProduct(product) {
    console.log(this.state.checkedItems)
    this.setState(prevState => {
      let itemIndex = -1;
      const checkedItems = prevState.checkedItems;

      checkedItems.forEach((item, index) => {
        if (item.id === product.id) {
          itemIndex = index;
          return false;
        }
      });

      if (product.selected && itemIndex === -1) {
        checkedItems.push(product);
      } else if (!product.selected) {
        checkedItems.splice(itemIndex, 1);
      }

      return { checkedItems: checkedItems.slice(0) };
    });
  }
}

function renderTreeViewItem(value) {
    
    return (
        <React.Fragment>
    <Icon type="container"  theme="twoTone" twoToneColor="#17a2b8"/> <span>{value.text}</span>
    </React.Fragment>
    );
  }
export default App;
