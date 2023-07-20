const Filter = (props) => {
  return (
    <form>
      <div>
        filter by name:{" "}
        <input value={props.filter} onChange={props.filterChange} />
      </div>
    </form>
  );
};

export default Filter;
