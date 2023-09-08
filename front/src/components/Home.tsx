import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { closeModal, openModal, setComponent } from '../redux/reducers/MenuModalReducer';
import { CardContainer } from './card';


const Home = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <Button
                onClick={() => {
                    dispatch(setComponent('characters'));
                    dispatch(openModal());
                }}
            >
                Add character
            </Button>

            <Button
                onClick={() => {
                    dispatch(setComponent('inventory'));
                    dispatch(openModal());
                }}
            >
                Manage inventory
            </Button>

            <CardContainer />
        </div>
    );
};

export default Home;
