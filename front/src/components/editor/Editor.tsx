import { ILvL, LevelDropdown } from ".";
import { RootState, AppDispatch } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setStartLvL, setEndLvL } from '../../redux/reducers/EditorModalReducer';

const Editor = () => {
    const startLvL = useSelector((state: RootState) => state.editorModal.startLvL);
    const endLvL = useSelector((state: RootState) => state.editorModal.endLvL);
    const dispatch = useDispatch<AppDispatch>();

    const handleStartLvLChange = (newStartLvL: ILvL) => {
        dispatch(setStartLvL(newStartLvL));
      };
    
      const handleEndLvLChange = (newEndLvL: ILvL) => {
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
