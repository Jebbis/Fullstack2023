import { useState, useEffect } from "react";
import ShowContacts from "./components/ShowContacts";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationStyle, setNotificationStyle] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const formNameChange = (event) => {
    setNewName(event.target.value);
  };

  const formNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const filterByName = (event) => {
    setFilterName(event.target.value);
  };

  const clearStyle = () => {
    setTimeout(() => {
      setNotificationMessage(null);
    }, 5000);
  };

  const handleNewInput = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      const personToUpdate = persons.find((person) => person.name === newName);
      console.log("Löyty nimi");
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace to old number with a new one?`
        )
      ) {
        setNotificationStyle("success");
        setNotificationMessage(`${newName} modified`);
        clearStyle();
        const updatedPerson = { ...personToUpdate, number: newNumber };
        personService
          .update(personToUpdate.id, updatedPerson)
          .then((updatedPerson) => {
            const updatedPersonsList = persons.map((person) =>
              person.id !== personToUpdate.id ? person : updatedPerson
            );
            console.log(updatedPerson);
            setPersons(updatedPersonsList);
          })
          .catch((error) => {
            setNotificationMessage(
              `${newName} was already deleted from server`
            );
            setTimeout(() => {
              setNotificationMessage(null);
            }, 5000);
          });
      }
    } else {
      console.log("ei löydy nimeä");
      const newPersonToAdd = { name: newName, number: newNumber };
      personService.create(newPersonToAdd).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
      console.log(`${newName} lisätty`);
      setNotificationStyle("success");
      setNotificationMessage(`${newName} added`);
      clearStyle();
    }
    setNewName("");
    setNewNumber("");
  };

  const deletePersonFrom = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      setNotificationStyle("success");
      setNotificationMessage(`${newName} deleted from the phonebook`);
      clearStyle();
      personService.deletePerson(id).then(() => {
        const updatedPersonsList = persons.filter((person) => person.id !== id);
        setPersons(updatedPersonsList);
        console.log(`deleted ${name} from the phonebook`);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter filter={filterName} filterChange={filterByName} />

      <h2>Add contact</h2>
      <PersonForm
        newName={newName}
        formNameChange={formNameChange}
        newNumber={newNumber}
        formNumberChange={formNumberChange}
        handleNewInput={handleNewInput}
      />

      <h2>Contacts</h2>
      <ShowContacts
        persons={persons}
        filter={filterName}
        deletePerson={deletePersonFrom}
      />
    </div>
  );
};

export default App;
