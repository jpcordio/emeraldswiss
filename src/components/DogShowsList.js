import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import DogShow from './DogShow';
import ShowPopup from './ShowPopup';
import Banner from "../assets/images/shows/Awards2022.webp";

/* Utility function to capitalise the first letter of each word */
const capitalizeWords = (text) => {
    return text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

/* Utility function to parse and format Date strings */
const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day); // Months are 0-indexed in JavaScript Date
};

/* Handles CRUD using json-server fake REST server for development purposes */ 
function DogShowsList() {
    const [shows, setShows] = useState([]);
    const [formValues, setFormValues] = useState({
        society: '',
        type: '',
        date: '',
        venue: '',
        city: '',
        judge: ''
    });
    const [currentShow, setCurrentShow] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [nextId, setNextId] = useState(13);
    const [isEditing, setIsEditing] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'

    /* Fetch shows on component mount */
    useEffect(() => {
        fetchShows();
    }, []);

    /* Update button state based on form values */
    useEffect(() => {
        /* Disable button if any field is empty */
        setBtnDisabled(Object.values(formValues).some(val => !val));
    }, [formValues]);

    /* Makes API request to fetch show info */
    const fetchShows = async () => {
        try {
            const response = await axios.get('http://localhost:5000/shows');
            const fetchedShows = response.data;
            /* CRUD read data */

            /* Debugging date parsing */
            fetchedShows.forEach(show => {
                console.log('Original date:', show.date, 'Parsed date:', parseDate(show.date));
            });

            /* Sort shows by date */
            const sortedShows = fetchedShows.sort((a, b) => parseDate(a.date) - parseDate(b.date));
            const maxId = sortedShows.reduce((max, show) => Math.max(max, show.id), 12);
            setNextId(maxId + 1);
            /* 12 Shows are already included in the db.json database, therefore sets next ID from 13 */

            setShows(sortedShows);
        } catch (error) {
            console.error('Error fetching shows:', error);
        }
    };

    /* Manages input form fields in response to user input */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
    };

    /* Manages input form submission and adding new show info */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (modalMode === 'edit') {
            await handleUpdate();
        } else {
            const newShow = {
                ...formValues,
                id: nextId
            };

            /* Makes API request to create new show info */
            /* CRUD create data */
            try {
                await axios.post('http://localhost:5000/shows', newShow, {
                    headers: { 'Content-Type': 'application/json' }
                });
                setNextId(nextId + 1);
                await fetchShows(); /* Refresh list after submission */
                resetForm();
            } catch (error) {
                console.error('Error adding show:', error);
            }
        }
    };

    /* Handless deletion of show info from server */
    /* CRUD delete data */
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/shows/${id}`, {
                headers: { 'Content-Type': 'application/json' }
            });
            await fetchShows(); /* Refresh list after deleting */
        } catch (error) {
            console.error('Error deleting show:', error);
        }
    };

    const handleEdit = (show) => {
        setCurrentShow(show);
        setFormValues({
            society: show.society,
            type: show.type,
            date: show.date,
            venue: show.venue,
            city: show.city,
            judge: show.judge
        });
        setIsEditing(true);
        setModalMode('edit');
        setModalIsOpen(true);
    };

    /* Prepares the form for editing an existing dog show entry */
    const handleUpdate = async () => {
        const updatedShow = { ...currentShow, ...formValues };

        /* Handless editing of show info data */
        /* CRUD edit data */
        try {
            await axios.put(`http://localhost:5000/shows/${updatedShow.id}`, updatedShow, {
                headers: { 'Content-Type': 'application/json' }
            });
            setCurrentShow(null);
            await fetchShows(); /* Refresh list after updating */
            resetForm();
            setModalIsOpen(false);
        } catch (error) {
            console.error('Error updating show:', error);
        }
    };

    /* Function used to clear the form fields, reset the editing state, and close the modal */
    const resetForm = () => {
        setFormValues({
            society: '',
            type: '',
            date: '',
            venue: '',
            city: '',
            judge: ''
        });
        setIsEditing(false);
        setModalIsOpen(false);
    };

    /* Returns component header, button to add new show */
    return (
        <div>
            <h1 className="text-center">Dog Show List</h1>
            <div className="text-center mb-4">
                <p>
                    Listed below are the shows where you can meet our dogs!
                </p>
				<Button variant="success" 
                    onClick={() => {
                        setModalMode('add');
                        setModalIsOpen(true);
                    }}
                >
                    Add New Show
                </Button>
            </div>

            <div className="row justify-content-center mt-4">
                {shows.map(show => (
                    <div key={show.id} className="col-md-6 text-center mb-3">
                        <DogShow /* Returns an array with list of shows from the server */
                            show={{
                                ...show,
                                society: capitalizeWords(show.society),
                                type: capitalizeWords(show.type),
                                date: capitalizeWords(show.date),
                                venue: capitalizeWords(show.venue),
                                city: capitalizeWords(show.city),
                                judge: capitalizeWords(show.judge)
                            }}
                            onEdit={() => handleEdit(show)}
                            onDelete={() => handleDelete(show.id)}
                        />
                    </div>
                ))}
            </div>

            <ShowPopup /* Modal component for adding and editing shows */
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                formValues={formValues}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                resetForm={resetForm}
                isEditing={isEditing}
                btnDisabled={btnDisabled} // Pass btnDisabled to ShowPopup
            />
            <img src={Banner} title="Dog Show Awards" className="img-fluid mb-2" alt="Banner: Our Kennel Awards" />
        </div>
    );
}

export default DogShowsList;