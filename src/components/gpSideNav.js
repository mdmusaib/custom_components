import React,{useRef} from 'react';
import { Dropdown, Icon ,Button} from 'antd';
import '../sidenav.css';
import {NavLink} from 'react-router-dom';
const GpSideNav=(props,ref)=>{
	const closeIconClick = useRef(null);
	const handleClickEvent=(val)=>{
		props.onClick(val)
	}
	
	return(
<React.Fragment>
		

		<div class="main-nav">
		
			{props.menuTitle.map((title, index) => (
		title === 'home'?		<NavLink to="/"><p className="sideBarText" key={index}>{title}  </p></NavLink>:
		<div>
		<NavLink to={title}><p className="sideBarText" key={index}>{title}  <Icon type="close-square" style={{cursor:"pointer"}} onClick={()=>{handleClickEvent(title)}} ref={closeIconClick}/> </p>
		</NavLink>
		</div>
        
	))}
	<Dropdown overlay={props.menus} trigger={['click']} >
			   <Button>
         <Icon type="up" />
      </Button>
  				</Dropdown>	
	</div>
			</React.Fragment>
	);	
}
export default GpSideNav;