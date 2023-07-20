const ShowContacts = (props) => {
  const filteredNames = props.persons.filter((person) =>
    person.name.toLowerCase().includes(props.filter.toLowerCase())
  );

  return (
    <div>
      {filteredNames.map((note) => (
        <div key={note.name}>
          {note.name} - {note.number} -{" "}
          <button onClick={() => props.deletePerson(note.id, note.name)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowContacts;
