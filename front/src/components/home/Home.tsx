import Button from 'react-bootstrap/Button';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { openModal, setComponent } from '../../redux/reducers/MenuModalReducer';
import { CardListContainer } from '../card';

import "./styles/home.scss";

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

            <CardListContainer />
        </div>
    );
};

export default Home;
