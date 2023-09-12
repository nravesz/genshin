import React from "react";
import { LevelDropdown } from ".";

type LvL = {
    LvL: number;
    isAscended: boolean;
};

const Editor = () => {
    const [startLvL, setStartLvL] = React.useState<LvL>({ LvL: 1, isAscended: false });
    const [endLvL, setEndLvL] = React.useState<LvL>({ LvL: 1, isAscended: false });

    return (
        <div>
            <LevelDropdown
                LvL={startLvL}
                setLvL={setStartLvL}
            />
            <LevelDropdown
                LvL={endLvL}
                setLvL={setEndLvL}
            />
        </div>

    )
};

export default Editor;
