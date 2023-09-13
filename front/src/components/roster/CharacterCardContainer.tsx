import axios from "axios";
import { CharacterCard } from ".";

import { RootState, AppDispatch } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal as closeEditorModal } from '../../redux/reducers/EditorModalReducer';
import { closeModal as closeMenuModal } from "../../redux/reducers/MenuModalReducer";

type Props = {
    id: string;
    name: string;
}

const CharacterCardContainer = ({id, name}: Props) => {
    const startLvL = useSelector((state: RootState) => state.editorModal.startLvL);
    const endLvL = useSelector((state: RootState) => state.editorModal.endLvL);
    const dispatch = useDispatch<AppDispatch>();

    async function addCharacter() {
        const response = await axios.post(`http://localhost:3001/characters`, {
            "id": id,
            "startLvL": startLvL.LvL,
            "startIsAscended": startLvL.LvL,
            "endLvL": endLvL.LvL,
            "endIsAscended": endLvL.isAscended
        });
        dispatch(closeEditorModal());
        dispatch(closeMenuModal());
    };

    return (
        <div
            onClick={() => addCharacter()}
        >
            <CharacterCard
                id={id}
                name={name}
            />
        </div>
    )
};

export default CharacterCardContainer;
