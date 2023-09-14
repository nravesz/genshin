import { Card } from '.';
import { ICharacterLvL } from '.';
import { IInventory } from '../inventory';
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

export const fetchCharacters = async () => {
    const response = await axios.get("http://localhost:3001/characters");
    return response.data.data;
};

const fetchInventories = async (characterData: Array<ICharacterLvL>) => {
    const inventories: Map<string, IInventory> = new Map();
    for (let i = 0; i < characterData.length; i++) {
        const response = await axios.get("http://localhost:3001/characters/resources", {
            params: {
                "id": characterData[i].id,
                "startLvL": characterData[i].startLvL,
                "startIsAscended": characterData[i].startIsAscended,
                "endLvL": characterData[i].endLvL,
                "endIsAscended": characterData[i].endIsAscended
            }
        })
        inventories.set(characterData[i].id, response.data.data);
    }
    return inventories;
};

const CardListContainer = () => {
    const { data: characterData, isLoading: characterIsLoading, isError: characterIsError, refetch: characterRefetch } =
        useQuery<Array<ICharacterLvL>>('userCharacters', fetchCharacters);

    const { data: inventoryData, isLoading: inventoryIsLoading, isError: inventoryIsError } =
    useQuery<Map<string, IInventory>>(
        ['inventories', characterData],
        () => fetchInventories(characterData as Array<ICharacterLvL>),
        {
            enabled: !!characterData
        }
    );

    const characters = Array.isArray(characterData) ? characterData : [];
    
    console.log(characterIsError)

    return (
        <div>
            {characterIsLoading || inventoryIsLoading ? (
                <span>Loading...</span>
            ) : characterData && inventoryData ? (
                <div>
                    {characters.map((character) => (
                        <Card
                            key={character.id}
                            id={character.id}
                            name={character.id}
                            inventory={inventoryData.get(character.id) as IInventory}
                        />
                    ))}
                </div>
            ) : (
                <span>Error</span>
            )}
        </div>
    );
};

export default CardListContainer;
