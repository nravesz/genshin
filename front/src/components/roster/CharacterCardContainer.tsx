import { CharacterCard } from ".";

import { RootState, AppDispatch } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, setID } from '../../redux/reducers/EditorModalReducer';


type Props = {
    id: string;
    name: string;
};

const CharacterCardContainer = ({ id, name }: Props) => {
    const startLvL = useSelector((state: RootState) => state.editorModal.startLvL);
    const endLvL = useSelector((state: RootState) => state.editorModal.endLvL);
    const dispatch = useDispatch<AppDispatch>();

    async function addCharacter() {
        dispatch(setID(id));
        dispatch(openModal());
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
