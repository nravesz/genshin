import { CharacterCardContainer } from ".";
import type  { IRoster } from ".";
import './styles/CharacterRoster.scss';

type RosterPrompts = {
    data: IRoster;
};

const Roster= ({data}: RosterPrompts) => {
    
    return(
        <div
            className="container-characters"
        >
            {Object.keys(data).map((character) => 
                <CharacterCardContainer
                    key={data[character].id}
                    id={data[character].id}
                    name={data[character].name}
                />
            )}
        </div>
    )
};

export default Roster;
