import axios from "axios";
import { CloseButton } from "react-bootstrap";
import { CharacterImage, Resources } from ".";
import { IInventory } from "../inventory"

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { needsUpdate } from "../../redux/reducers/CardListReducer";

import "./styles/Card.scss";
import "../../styles/buttons.scss"

type Props = {
    name: string;
    id: string;
    startLvL: number;
    startIsAscended: boolean;
    endLvL: number;
    endIsAscended: boolean;
    resources: IInventory;
};


const Card = ({ name, id,
    startLvL, startIsAscended,
    endLvL, endIsAscended,
    resources
}: Props) => {const dispatch = useDispatch<AppDispatch>();
    
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
                <div
                    className="name-div"
                >
                    {name}
                </div>

            <div
                className="info-div"
            >
                <div
                    className="info-element-div"
                >
                    <CharacterImage
                        id={id}
                    />
                </div>

                <div
                    className="info-element-div"
                >
                    <div
                        className="level-text"
                    >
                        Level
                    </div>
                    <div>{startLvL} "---v" {endLvL}</div>
                    <div className="arrow" />
                </div>
            </div>
            
            <Resources
                resources={resources}
            />

            <CloseButton
                onClick={() => deleteCharacter(id)}
                className="close-button"
            />
        </div>
    );
};

export default Card;
 