import React, { Component } from 'react';
import PhoneBook from './Components/PhoneBook/PhoneBook';
import { v4 as uuidv4 } from 'uuid';
import ContactsList from './Components/Contacts/ContactsList';
import Filter from './Components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    if (this.state.contacts.length > 1) {
      localStorage.setItem('contacts', this.state.contacts);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('contacts', this.state.contacts);
  }
  formSubmitHandler = data => {
    const id = uuidv4();
    data.id = id;
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  };

  HandleDelete = deleteID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => {
        if (item.id !== deleteID) {
          return item;
        }
      }),
    }));
  };

  handleFilter = querry => {
    this.setState({ filter: querry });
  };

  render() {
    const filterContacts = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter) ? item : null,
    );

    return (
      <div className="container">
        <h1>PhoneBook</h1>
        <PhoneBook
          HandleSubmit={this.formSubmitHandler}
          ContactsList={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter HandleFilter={this.handleFilter} />
        <ContactsList list={filterContacts} deleteID={this.HandleDelete} />
      </div>
    );
  }
}

export default App;
