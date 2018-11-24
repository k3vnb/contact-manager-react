import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Jen Blue',
                email: 'jblue@gmail.com',
                phone: '555-556-6655'
            },
            {
                id: 3,
                name: 'Harry Black',
                email: 'hblack@gmail.com',
                phone: '555-557-6755'
            }
        ]
    };

    deleteContact = () => {
        console.log(123);
    }

    render(){
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map(contact => (
                    <Contact 
                        key={contact.id}
                        contact={contact}
                        deleteClickHandler={this.deleteContact}
                    />
                ))}
            </div>
        )
    }
}

export default Contacts;