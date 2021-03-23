import './style.css';

interface Props {
    heading?: any;
}

const H2 = ({ heading }: Props) => {
    return (
        <div className="text-3xl font-bold py-4">
            <h2>{heading}</h2>
        </div>
    );
};

export default H2;
