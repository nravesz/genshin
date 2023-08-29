import { useQuery, useQueryClient } from "react-query";
import { fetchCharacters } from "./CharactersRosterHelper";
import type  { ICharacter, IRoster } from ".";
import CharacterCard from "./CharacterCard";
import './styles/CharacterRoster.scss';

type RosterPrompts = {
    data: IRoster;
    isLoading: boolean;
    isError: boolean;
};

const Roster= ({data, isLoading, isError}: RosterPrompts) => {
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error fetching characters</div>;
      }

      console.log(data);
    return(
        <div
            className="container-characters"
        >
            {Object.keys(data).map((character) => 
                <CharacterCard
                    key={data[character].id}
                    id={data[character].id}
                    name={data[character].name}
                />
            )}
        </div>
    )
};

export default Roster;
