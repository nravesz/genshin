import { Card } from '.';
import { IInventory } from '../inventory';
import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "react-query";

const characters = {
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

// const fetchInventories = async () => {
//     const inventories: Map<string, IInventory> = new Map();
//     for (let character of Object.values(characters)) {
//         const response: IInventory = await axios.get("http://localhost:3001/characters/resources", {
//             params: {
//                 id: character.id,
//                 startLvL: character.startLvL,
//                 startIsAscended: character.startIsAscended,
//                 endLvL: character.endLvL,
//                 endIsAscended: character.endIsAscended,
//             }
//         });
//         console.log(response);
//     };
// };

const fetchInventories = async () => {
    const inventories: Map<string, IInventory> = new Map();
    for (let character of Object.values(characters)) {
        const response = await axios.get("http://localhost:3001/characters/resources", {
            params: character
        });
        console.log(response.data.data);
    };
};


const CardContainer = () => {
    const queryClient = useQueryClient();
    //const { data, isLoading, isError } = useQuery<IInventory[]>('inventories', fetchInventories);
    fetchInventories();
    return (
        <Card
            name="Albedo"
            id="albedo"
            inventory={{"prithiva_topaz_sliver": 10, "mora": 1000}}
        />
    )
};

export default CardContainer;
