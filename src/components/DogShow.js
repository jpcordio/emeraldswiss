import { Button } from 'react-bootstrap';

/* Handles info about specific Dog Show from json-server with Edit and Delete buttons */
const DogShow = ({ show, onEdit, onDelete }) => {
    return (
        <div>
            <p><strong>Society:</strong> {show.society}</p>
            <p><strong>Type:</strong> {show.type}</p>
            <p><strong>Date:</strong> {show.date}</p>
            <p><strong>Venue:</strong> {show.venue}</p>
            <p><strong>City:</strong> {show.city}</p>
            <p><strong>Judge:</strong> {show.judge}</p>
            <Button variant="success" onClick={() => onEdit(show)}>Edit</Button> &nbsp;
            <Button variant="success" onClick={() => onDelete(show.id)}>Delete</Button>
        </div>
    );
};

export default DogShow;