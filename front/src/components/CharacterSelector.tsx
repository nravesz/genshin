import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';
import CharacterRoster from './CharactersRoster';
import '../styles/CharacterSelector.css';

const CharacterSelector = () => {
	return (
		<Modal
			show={true}
			size="lg"
			scrollable={true}
		>
			<Modal.Header
				closeButton
			>
				<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>
	
			<Modal.Body
				className='modal-body'
			>
					<CharacterRoster />
			</Modal.Body>
	
			<Modal.Footer>
				<Button variant="secondary">Close</Button>
				<Button variant="primary">Save changes</Button>
			</Modal.Footer>
		</Modal>
    )
};

export default CharacterSelector;
