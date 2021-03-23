interface Props {
    heading?: any;
}

const Heading = ({ heading }: Props) => {
    return (
        <div className="text-2xl font-semibold text-center">
            <h1>{heading}</h1>
        </div>
    );
};

export default Heading;
