import './style.css';

interface HeadingProps {
    heading: String;
}

const Heading = ({ heading }: HeadingProps) => {
    return (
        <div className="text-xl font-bold sideNavHeading">
            <h1>{heading}</h1>
        </div>
    );
};

export default Heading;
