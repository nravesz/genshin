import { ILvL } from ".";

type Prompts = {
    LvL: number;
    isAscended: boolean;
    setLvL: React.Dispatch<React.SetStateAction<ILvL>>
}

const LevelDropdownItem = ({LvL, isAscended, setLvL}: Prompts) => {

    return (
        <div
            onClick={() => {
                const newLvL: ILvL = {LvL: LvL, isAscended: isAscended};
                setLvL(newLvL);
            }}
        >
            {LvL} {isAscended ? "*" : ""}
        </div>
    )
};

export default LevelDropdownItem;
