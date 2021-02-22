import "./style.css";
const Heading = (props) => {
  return (
    <div className="text-4xl font-bold text-center">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default Heading;
