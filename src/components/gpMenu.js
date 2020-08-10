import React from "react";
import { render } from "react-dom";

import { Avatar,Button, Dropdown, Icon, Menu } from "antd";

const Item = Menu.Item;



const overlay = (props) => (
  <Menu>
    <Item>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />One
    </Item>
    <Item>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />Two
    </Item>
    <Item>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />Three
    </Item>
  </Menu>
);

const App = (props) => (
  <div>
    <Dropdown overlay={overlay()} trigger={["click"]}>
      <Button>
       {props.buttonTitle}
        <Icon type="down" />
      </Button>
    </Dropdown>
  </div>
);

export default App;


