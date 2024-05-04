import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import cardsContact from "../../contacts.json";
import { useEffect, useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return cardsContact;
  });
  const [search, setSearch] = useState("");

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  // const showContact = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(search.toLowerCase())
  // );

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList onDelete={deleteContact} />
    </div>
  );
}
