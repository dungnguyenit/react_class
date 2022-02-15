import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined,DeleteOutlined, SettingOutlined } from '@ant-design/icons';

export class Contact extends Component {
  constructor(){
    super();
    this.state={
      expanded:false
    }
  }

   onShowClick=()=>{
    this.setState({
      expanded:!this.state.expanded
    }) 
  }
  onDeleteClick=(id)=>{
    this.props.deleteClickHandle(id);
  }
  render() {
    const { name, email, phone,id } = this.props.contact
    const { Meta } = Card;
    const {expanded} = this.state;

   
    return (
      <React.Fragment>
        <div style={{marginBottom:'20px'}}>
          <Card
            actions={[
              <SettingOutlined key="setting" onClick={this.onShowClick} />,
              <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" onClick={() => {this.onDeleteClick(id)}}/>
             
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={name}      
            />
          {expanded && <div>
          Email:{email}
          <br/>
          Telephone :{phone}
          </div>}
            
          </Card>
        </div>
      </React.Fragment>

    )
  }
}

export default Contact