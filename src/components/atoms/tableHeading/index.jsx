import "./style.css";
const Heading = (props) => {
  return (
    <div className="text-2xl lg:text-3xl xl:text-3xl font-semibold">
      <h1 className="tableHeading">{props.heading}</h1>
    </div>
  );
};

export default Heading;
