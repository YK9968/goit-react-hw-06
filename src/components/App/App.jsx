import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import cardsContact from "../../contacts.json";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    console.log(savedContacts);
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return cardsContact;
  });
  const [search, setSearch] = useState("");

  const addTask = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const showContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    id: nanoid(),
    name: "",
    number: "",
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        onAdd={addTask}
        validation={validation}
        values={initialValues}
      />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={showContact} onDelete={deleteContact} />
    </div>
  );
}
