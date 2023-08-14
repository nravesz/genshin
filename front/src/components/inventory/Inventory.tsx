import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { closeModal, openModal } from '../../redux/reducers/InventoryModalReducer';

const InventoryModal = () => {
	const modalState = useSelector((state: RootState) => state.inventoryModal.value);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<Modal
			show={modalState}
			size="lg"
		>
			<Modal.Header
				closeButton
			>
				<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>
	
			<Scrollbars
				style={{ height: '500px'}}
			>
				<Modal.Body
					className='modal-characters-body'
				>
				</Modal.Body>
			</Scrollbars>
	
			<Modal.Footer>
				<Button
					variant="secondary"
					onClick={() => dispatch(closeModal())}
				>Close</Button>
				<Button variant="primary">Save changes</Button>
			</Modal.Footer>
		</Modal>
    )
};

export default InventoryModal;
