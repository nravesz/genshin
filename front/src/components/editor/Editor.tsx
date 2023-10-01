import { ILvL, LevelDropdown } from ".";
import { RootState, AppDispatch } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setStartLvL, setEndLvL } from '../../redux/reducers/EditorModalReducer';

const Editor = () => {
    const startLvL = useSelector((state: RootState) => state.editorModal.startLvL);
    const endLvL = useSelector((state: RootState) => state.editorModal.endLvL);
    const dispatch = useDispatch<AppDispatch>();

    const handleStartLvLChange = (newStartLvL: ILvL) => {
        if (newStartLvL.LvL > endLvL.LvL || 
            (newStartLvL.LvL === endLvL.LvL && newStartLvL.isAscended && !endLvL.isAscended)) {
            dispatch(setEndLvL(newStartLvL));
        }
        dispatch(setStartLvL(newStartLvL));
    };
    
    const handleEndLvLChange = (newEndLvL: ILvL) => {
        if (startLvL.LvL > newEndLvL.LvL ||
            (startLvL.LvL === newEndLvL.LvL && startLvL.isAscended && !newEndLvL.isAscended)) {
            dispatch(setStartLvL(newEndLvL));
        }
        dispatch(setEndLvL(newEndLvL));
    };

    return (
        <div>
            <LevelDropdown
                LvL={startLvL}
                setLvL={handleStartLvLChange}
            />
            <LevelDropdown
                LvL={endLvL}
                setLvL={handleEndLvLChange}
            />
        </div>

    )
};

export default Editor;
