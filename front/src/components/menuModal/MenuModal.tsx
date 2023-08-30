import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Scrollbars } from 'react-custom-scrollbars-2';

//import { RosterContainer } from '../roster';
import RosterContainer from '../roster/RosterContainer';
import { InventoryContainer } from '../inventory';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { closeModal, updateInventory } from '../../redux/reducers/MenuModalReducer';

interface Components {
    [key: string]: JSX.Element;
  }

const MenuModal = () => {
	const modalState = useSelector((state: RootState) => state.menuModal.value);
    const component = useSelector((state: RootState) => state.menuModal.component);
	const dispatch = useDispatch<AppDispatch>();

    const components: Components = {
        'characters': <RosterContainer />,
        'inventory': <InventoryContainer />
    }

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
                    {components[component]}
				</Modal.Body>
			</Scrollbars>
	
			<Modal.Footer>
				<Button
					variant="secondary"
					onClick={() => dispatch(closeModal())}
				>Close</Button>
				<Button
					variant="primary"
					onClick={() => {
						dispatch(updateInventory(true))
						dispatch(closeModal());
					}}
				>
					Save changes
				</Button>
			</Modal.Footer>
		</Modal>
    )
};

export default MenuModal;
