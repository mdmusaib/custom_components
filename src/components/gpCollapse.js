import React, { Component } from 'react'; 
import CollapseSection from './gpCollapseSection';
class GpCollapse extends Component{
    constructor(props){
        super(props)
        const openSections={};
        this.state={
            openSections
        }
    }
    onClick=label=>{
        const {
            props:{allowMultipleOpen},
            state: { openSections },
          } = this;
          const isOpen = !!openSections[label];

          if (allowMultipleOpen) {
            this.setState({
              openSections: {
                ...openSections,
                [label]: !isOpen
              }
            });
          } else {
            this.setState({
              openSections: {
                [label]: !isOpen
              }
            });
          }
    }
    render(){
        const {
            onClick,
            props: { children },
            state: { openSections },
          } = this;
          console.log(openSections)
          return (
            <div >
            {children.map(child => (
              <CollapseSection
                key={child.props.label}
                isOpen={!!openSections[child.props.label]}
                label={child.props.label}
                onClick={onClick}
              >
                {child.props.children}
              </CollapseSection>
            ))}
          </div>
          );
    }
    
}

export default GpCollapse;