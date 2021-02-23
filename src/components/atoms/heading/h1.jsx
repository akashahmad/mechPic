import "./style.css";
const Heading = (props) => {
  return (
    <div className="text-2xl font-semibold text-center">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default Heading;
