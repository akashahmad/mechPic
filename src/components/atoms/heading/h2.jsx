import "./style.css";
const H2 = (props) => {
  return (
    <div className="text-3xl font-bold py-4">
      <h2>{props.heading}</h2>
    </div>
  );
};

export default H2;
