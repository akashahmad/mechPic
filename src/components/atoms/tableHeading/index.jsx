import "./style.css";
const Heading = (props) => {
  return (
    <div className="text-3xl font-semibold">
      <h1 className="tableHeading">{props.heading}</h1>
    </div>
  );
};

export default Heading;
