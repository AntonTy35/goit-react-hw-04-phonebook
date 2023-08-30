// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { AppStyled } from './App.styled';

// const initialContacs = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export class App extends Component {
//   state = {
//     contacts: initialContacs,
//     filter: '',
//   };

// componentDidMount() {
//   const saveContacts = localStorage.getItem('phonebook');
//   if (saveContacts !== null) {
//     this.setState({
//       contacts: JSON.parse(saveContacts),
//     });
//   }
// }

// componentDidUpdate(prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem('phonebook', JSON.stringify(this.state.contacts));
//   }
// }

// defaultLocalStorage = () => {
//   this.setState({
//     contacts: initialContacs,
//   });
// };

// addContact = ({ name, number }) => {
//   const isContact = this.state.contacts.find(
//     contact => contact.name.toLowerCase() === name.toLowerCase()
//   );

//   if (isContact) {
//     alert(`${name} is already in contacts.`);
//   } else {
//     this.setState({
//       contacts: [
//         ...this.state.contacts,
//         {
//           id: nanoid(),
//           name: name,
//           number: number,
//         },
//       ],
//     });
//   }
// };

// findContacts = event => {
//   this.setState({ filter: event });
// };

// deleteContact = id => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== id),
//   }));
// };

// render() {
//   const { contacts, filter } = this.state;
//   const stateContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
//   return (
//     <AppStyled>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={this.addContact} />

//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={this.findContacts} />
//       <ContactList contacts={stateContacts} onDelete={this.deleteContact} />
//       <button onClick={this.defaultLocalStorage}>Factory settings 😀</button>
//     </AppStyled>
//   );
// }
// }
