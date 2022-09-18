import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  saveContacts = contact => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };
  setFilter = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };
  filterContacts = () => {
    return !this.state.filter
      ? this.state.contacts
      : this.state.contacts.filter(elem =>
          elem.name.includes(this.state.filter)
        );
  };
  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    let filteredContacts = this.filterContacts();
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm
          saveContacts={this.saveContacts}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} filterState={this.state.filter} />
        <ContactList
          filteredContacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
