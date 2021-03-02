import "./style.css";
const Heading = (props) => {
  return (
    <div className="text-xl font-medium sideNavHeading">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default Heading;
