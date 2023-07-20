const Notification = ({ message, status }) => {
  const error = {
    color: "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  const success = {
    color: "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  const style = status === "error" ? error : success;

  if (message === null) {
    return null;
  }
  return <div style={style}>{message}</div>;
};

export default Notification;
