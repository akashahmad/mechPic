import './style.css';

interface HeadingProps {
    heading?: string;
}

const Heading = ({ heading }: HeadingProps) => {
    return (
        <div className="text-2xl lg:text-3xl xl:text-3xl font-semibold">
            <h1 className="tableHeading">{heading}</h1>
        </div>
    );
};

export default Heading;
