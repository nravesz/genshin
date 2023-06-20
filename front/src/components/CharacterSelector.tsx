import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';
import CharacterRoster from './CharactersRoster';

const fetchCharacters = async () => {
  const { data } = await axios.get("https://genshin-planner-api.vercel.app/characters")
  return data.data;
};

const CharacterSelector = () => {
  const queryClient = useQueryClient();
  const query = useQuery('characters', fetchCharacters);
  console.log(query.data);
  
    return (
		<Modal show={true}>
			<Modal.Header
				closeButton
			>
				<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>
	
			<Modal.Body
				style={{backgroundColor: 'green'}}
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
