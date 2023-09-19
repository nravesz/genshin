import axios from "axios";
import { Button } from "react-bootstrap";
import { CharacterImage, Resources } from ".";
import { IInventory } from "../inventory"

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { needsUpdate } from "../../redux/reducers/CardListReducer";

import "./styles/Card.scss";

type Props = {
    name: string;
    id: string;
    resources: IInventory;
};


const Card = ({ name, id, resources }: Props) => {const dispatch = useDispatch<AppDispatch>();
    
    async function deleteCharacter(id: string) {
        await axios.delete("http://localhost:3001/characters", {
            data: {
                id: id
            }
        });
        dispatch(needsUpdate());
    };

    return (
        <div
            className="card-div"
        >
            <Button
                onClick={() => deleteCharacter(id)}
            >
                close
            </Button>
            <CharacterImage
                id={id}
            />
            <Resources
                resources={resources}
            />
        </div>
    );
};

export default Card;
 