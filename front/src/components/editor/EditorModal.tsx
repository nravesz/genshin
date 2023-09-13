import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Editor, ILvL } from '.';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { closeModal as editorCloseModal,
    clearStates as editorClearStates } from '../../redux/reducers/EditorModalReducer';
import { closeModal as menusCloseModal } from '../../redux/reducers/MenuModalReducer';


const EditorModal = () => {
    const modalState = useSelector((state: RootState) => state.editorModal.isOpen);
    const id = useSelector((state: RootState) => state.editorModal.id);
    const startLvL = useSelector((state: RootState) => state.editorModal.startLvL);
    const endLvL = useSelector((state: RootState) => state.editorModal.endLvL);
	const dispatch = useDispatch<AppDispatch>();
    
    async function handleSaveButton(id: string, startLvL: ILvL, endLvL: ILvL) {
        const response = await axios.post(`http://localhost:3001/characters`, {
            "id": id,
            "startLvL": startLvL.LvL,
            "startIsAscended": startLvL.isAscended,
            "endLvL": endLvL.LvL,
            "endIsAscended": endLvL.isAscended
        });
        dispatch(editorCloseModal());
        dispatch(editorClearStates())
        dispatch(menusCloseModal());
    };
    
    function handleCloseButton() {
        dispatch(editorCloseModal());
        dispatch(editorClearStates());
    }
    
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
                    onClick={() => handleCloseButton()}
                >
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={async () => {
                        handleSaveButton(id, startLvL, endLvL);
                    }}
                >
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditorModal;
