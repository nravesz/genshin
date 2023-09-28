import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useQuery } from 'react-query';

import { RosterContainer } from '../roster';
import { InventoryContainer, IInventory, fetchInventory } from '../inventory';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { closeModal, updateInventory } from '../../redux/reducers/MenuModalReducer';

import "./styles/Modal.scss";

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
    };

	return (
		<Modal
			show={modalState}
			size="lg"
		>
			<Modal.Header className="modal-header">
				<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>
	
			<Scrollbars
				style={{ height: '500px'}}
			>
				<Modal.Body
					className='modal-body'
				>
                    {components[component]}
				</Modal.Body>
			</Scrollbars>
	
			<Modal.Footer className="modal-footer">
				<Button
					onClick={() => dispatch(closeModal())}
					className="button"
				>Close</Button>
				<Button
					onClick={async () => {
						if (component === 'inventory') {
							await dispatch(updateInventory(true))
						}
						dispatch(closeModal());
					}}
					className="button"
				>
					Save changes
				</Button>
			</Modal.Footer>
		</Modal>
    )
};

export default MenuModal;
