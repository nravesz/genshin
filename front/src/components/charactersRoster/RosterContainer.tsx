import { useQuery, useQueryClient } from "react-query";
import { fetchCharacters } from "./CharactersRosterHelper";
import type  { ICharacter, IRoster } from ".";
import { Roster } from ".";
import CharacterCard from "./CharacterCard";
import './styles/CharacterRoster.scss';

const RosterContainer = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery<IRoster>('characters', fetchCharacters);

    if (isLoading) {
        return <div>Loading...</div>;
      }

    if (data) {
        return(
            <div
                className="container-characters"
            >
                <Roster
                    data={data}
                    isLoading={isLoading}
                    isError={isError}
                />
            </div>
        )
    }

    return <div>Error fetching characters</div>;
    
};

export default RosterContainer;
