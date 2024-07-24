import { Modal, Button, Form } from 'react-bootstrap';

/* Component with props to display React Modal dialogue for adding and editing show details with form and buttons */
function ShowPopup({ isOpen, onRequestClose, formValues, handleInputChange, handleSubmit, resetForm, isEditing, btnDisabled }) {
    return (
        <Modal show={isOpen} onHide={onRequestClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{isEditing ? 'Edit Show' : 'Add New Show'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formSociety">
                        <Form.Control
                            type="text"
                            name="society"
                            value={formValues.society}
                            onChange={handleInputChange}
                            placeholder="Society"
                        />
                    </Form.Group>
                    <Form.Group controlId="formType">
                        <Form.Control
                            type="text"
                            name="type"
                            value={formValues.type}
                            onChange={handleInputChange}
                            placeholder="Type"
                        />
                    </Form.Group>
                    <Form.Group controlId="formDate">
                        <Form.Control
                            type="text"
                            name="date"
                            value={formValues.date}
                            onChange={handleInputChange}
                            placeholder="Date"
                        />
                    </Form.Group>
                    <Form.Group controlId="formVenue">
                        <Form.Control
                            type="text"
                            name="venue"
                            value={formValues.venue}
                            onChange={handleInputChange}
                            placeholder="Venue"
                        />
                    </Form.Group>
                    <Form.Group controlId="formCity">
                        <Form.Control
                            type="text"
                            name="city"
                            value={formValues.city}
                            onChange={handleInputChange}
                            placeholder="City"
                        />
                    </Form.Group>
                    <Form.Group controlId="formJudge">
                        <Form.Control
                            type="text"
                            name="judge"
                            value={formValues.judge}
                            onChange={handleInputChange}
                            placeholder="Judge"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={resetForm}>
                    Cancel
                </Button>
                <Button variant="success" type="submit" onClick={handleSubmit} disabled={btnDisabled}>
                    {isEditing ? 'Update Show' : 'Add Show'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ShowPopup;