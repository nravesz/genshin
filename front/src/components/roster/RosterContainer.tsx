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
    const { data, isLoading, isError, isFetching } =
        useQuery<IRoster>('characters', fetchCharacters);
    
    if (isLoading || isFetching) {
        return <div>Loading...</div>;
      }

    if (data) {
        return(
            <div>
                <Roster
                    data={data}
                />
            </div>
        )
    }

    return <div> Error</div>;
    
};

export default RosterContainer;
