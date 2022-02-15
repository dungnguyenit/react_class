import React, { Component } from 'react'
import Contact from './Contact';

export default class Contacts extends Component {

    constructor(){
        super();
        this.state={
            contacts:[
              {
                id : 0,
                name :'TikTok',
                email : 'dungnguyen@gmail.com',
                phone :"012365864"
              },
              {
                id : 1,
                name :"Youtube" ,
                email : "dungdinh@gmail.com",
                phone :"012366458"
              },
              {
                id : 2,
                name :"Facebook" ,
                email : "dungnguyenze13@gmail.com",
                phone :"012301354"
              }
            ],
            isloading:false
        }
    }
    deleteContact=(id)=>{
      console.log(id);
      const {contacts}= this.state;
      const newResul = contacts.filter(el => el.id !== id);
      this.setState({
        contacts : newResul
      }
      )
    }
  render() {
    const {contacts} = this.state;
    return (
        
      <React.Fragment>
          {contacts.map(contact =>
              <Contact 
              key={contact.id}
            contact={contact}
            deleteClickHandle={this.deleteContact}
              />
          )}
      </React.Fragment>
    )
  }
}
