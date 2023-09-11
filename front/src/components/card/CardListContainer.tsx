import { Card } from '.';
import { IInventory } from '../inventory';
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const characters = {
    "alhaitham": {
        "id": "alhaitham",
        "name": "Al-Haitham",
    },
    "albedo": {
        "id": "albedo",
        "name": "Albedo",
    }
};

const charactersLvL = {
    "alhaitham": {
        "id": "alhaitham",
        "startLvL": 3,
        "startIsAscended": false,
        "endLvL": 20,
        "endIsAscended": true
    },
    "albedo": {
        "id": "albedo",
        "startLvL": 3,
        "startIsAscended": false,
        "endLvL": 20,
        "endIsAscended": true
    }
};

const fetchInventories = async () => {
    const inventories: Map<string, IInventory> = new Map();
    for (let character of Object.values(charactersLvL)) {
        const response = await axios.get("http://localhost:3001/characters/resources", {
            params: character
        });
        inventories.set(character.id, response.data.data);
    };
    return inventories;
};

const CardListContainer = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } =
        useQuery<Map<string, IInventory>>('inventories', fetchInventories);
    return (
        <div>
            {isLoading ? (
                <span>Loading...</span>
            ) : isError ? (
                <span>Error: {isError}</span>
            ) : (
                <div>
                    {
                        Object.values(characters).map((character) => (
                            <Card
                                key={character.id}
                                name={character.id}
                                id={character.id}
                                inventory={data?.get(character.id) as IInventory}
                            />
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default CardListContainer;
