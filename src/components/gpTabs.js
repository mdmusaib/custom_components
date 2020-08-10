import React, { Component } from 'react';
import Tab from './gpTab';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

   onClickTabItem = (tab) => {
   console.log(tab);
   this.setState({ activeTab: tab });
  }

 
   render(){
    console.log(this.props.children)
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;
    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child,index) => {
            const { label,title } = child.props;

            return (
              <Tab
              key={index}
              title={title}
              toolbar={this.props.toolbar}
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    ); 
   }
 
    
  }

export default Tabs;