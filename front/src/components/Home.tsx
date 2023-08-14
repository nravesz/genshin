import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { closeModal, openModal } from '../redux/reducers/InventoryModalReducer';


const Home = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <Button>
                Add character
            </Button>

            <Button
                onClick={() => dispatch(openModal())}
            >
                Manage inventory
            </Button>
        </div>
    );
};

export default Home;
