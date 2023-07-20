const PersonForm = (props) => {
  return (
    <form>
      <div>
        name: <input value={props.newName} onChange={props.formNameChange} />
        number:{" "}
        <input value={props.newNumber} onChange={props.formNumberChange} />
      </div>
      <div>
        <button onClick={props.handleNewInput} type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
