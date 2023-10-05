import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Editor, ILvL } from '.';

import { useQueryClient, useMutation } from 'react-query';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { closeModal as editorCloseModal,
    clearStates as editorClearStates } from '../../redux/reducers/EditorModalReducer';
import { closeModal as menusCloseModal } from '../../redux/reducers/MenuModalReducer';
import { needsUpdate } from '../../redux/reducers/CardListReducer';

import "../../styles/buttons.scss";

const EditorModal = () => {
    const queryClient = useQueryClient();
    const modalState = useSelector((state: RootState) => state.editorModal.isOpen);
    const id = useSelector((state: RootState) => state.editorModal.id);
    const startLvL = useSelector((state: RootState) => state.editorModal.startLvL);
    const endLvL = useSelector((state: RootState) => state.editorModal.endLvL);
	const dispatch = useDispatch<AppDispatch>();

    const saveButtonMutation = useMutation((characterData: {
        id: string,
        startLvL: number,
        startIsAscended: boolean,
        endLvL: number,
        endIsAscended: boolean
    }) => {
        queryClient.invalidateQueries(['userCharacters', "inventories"]);
        return axios.post(`${process.env.REACT_APP_API_URL}/characters`, characterData);
    });

    async function handleSaveButton(id: string, startLvL: ILvL, endLvL: ILvL) {
        await saveButtonMutation.mutateAsync({
            "id": id,
            "startLvL": startLvL.LvL,
            "startIsAscended": startLvL.isAscended,
            "endLvL": endLvL.LvL,
            "endIsAscended": endLvL.isAscended
        });
        dispatch(needsUpdate());
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
                <Modal.Title>Pick the level</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Editor />
            </Modal.Body>

            <Modal.Footer>
                <Button
                    className="normal-button"
                    onClick={() => handleCloseButton()}
                >
                    Close
                </Button>
                <Button
                    className="normal-button"
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
