import { Button } from 'react-bootstrap';

/* Handles info about specific Dog breed as a list item. */
const DogBreed = ({ name, description, image, link }) => (
    <div className="row justify-content-center mt-4">
        <div className="col-md-10 text-center">
            <h2>{name}</h2>
            <img src={image} alt={name} className="img-fluid mt-4" />
            <div className="text-justify mt-3">
                <p>{description}</p>
                <div className="text-center mt-3">
                    <Button
                        variant="success"
                        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
                    >
                        Read More
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

export default DogBreed;
