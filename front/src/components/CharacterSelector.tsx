import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';
import CharacterRoster from './CharactersRoster';
import '../styles/CharacterSelector.scss';

const CharacterSelector = () => {
	return (
		<Modal
			show={true}
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
					<CharacterRoster />
				</Modal.Body>
			</Scrollbars>
	
			<Modal.Footer>
				<Button variant="secondary">Close</Button>
				<Button variant="primary">Save changes</Button>
			</Modal.Footer>
		</Modal>
    )
};

export default CharacterSelector;
