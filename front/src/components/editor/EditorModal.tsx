import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Editor } from '.';

const EditorModal = () => {
    return (
        <Modal
            show={true}
            size="sm"
        >
            <Modal.Header
                closeButton
            >
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Editor />
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => console.log("close")}
                >Close</Button>
                <Button
                    variant="primary"
                    onClick={() => console.log("save")}
                >
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditorModal;