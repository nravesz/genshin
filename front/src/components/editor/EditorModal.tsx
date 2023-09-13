import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Editor, ILvL } from '.';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { closeModal, clearStates} from '../../redux/reducers/EditorModalReducer';

function addCharacter(startLvL: ILvL, endLvL: ILvL) {
    console.log(startLvL, endLvL);
};

const EditorModal = () => {
    const modalState = useSelector((state: RootState) => state.editorModal.isOpen);
    const startLvL = useSelector((state: RootState) => state.editorModal.startLvL);
    const endLvL = useSelector((state: RootState) => state.editorModal.endLvL);
	const dispatch = useDispatch<AppDispatch>();

    return (
        <Modal
            show={modalState}
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
                    onClick={() => {
                        dispatch(clearStates())
                        dispatch(closeModal());
                    }}
                >
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        addCharacter(startLvL, endLvL);
                        dispatch(clearStates());
                        dispatch(closeModal());
                    }}
                >
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditorModal;
