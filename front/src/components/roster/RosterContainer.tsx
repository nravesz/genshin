import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import type  { IRoster } from ".";
import { Roster } from ".";
import './styles/CharacterRoster.scss';

const fetchCharacters = async () => {
    const { data } = await axios.get("http://localhost:3001/roster")
    return data.data;
};

const RosterContainer = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery<IRoster>('characters', fetchCharacters);
    
    if (isLoading) {
        return <div>Loading...</div>;
      }

    if (data) {
        return(
            <div>
                <Roster
                    data={data}
                    isLoading={isLoading}
                    isError={isError}
                />
            </div>
        )
    }

    return <div> Error fetching characters </div>;
    
};

export default RosterContainer;
