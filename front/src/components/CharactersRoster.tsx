import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { fetchCharacters } from "./CharactersRosterHelper";
import CharacterCard from "./CharacterCard";
import styles from '../styles/CharacterRoster.module.css';

interface Character {
    id: string;
    name: string;
};

const CharacterRoster = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery<Character[]>('characters', fetchCharacters);

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error fetching characters</div>;
      }

    return(
        <div
            // className="container-characters"
            className={styles.containerCharacters}
        >
            {data?.map((character) => 
                <CharacterCard
                    key={character.id}
                    id={character.id}
                    name={character.name}
                />
            )}
        </div>
    )
};

export default CharacterRoster;
