/* eslint-disable react/prop-types */
const Message = ({ msg, bgColor }) => {
  let style = {
    padding: "1rem",
    marginBotton: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "Bold",
    backgroundColor: bgColor,
  };
  return (
    <div style={style}>
      <p>{msg}</p>
    </div>
  );
};
export default Message;
