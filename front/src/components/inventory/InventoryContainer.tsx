import React from "react";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { Inventory } from ".";
import { fetchCharacters, fetchInventories } from '../card/CardListContainer';
import { ICharacterLvL } from '../card';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { updateInventory } from '../../redux/reducers/MenuModalReducer';

export interface IInventory {
    [key: string]: number;
}

async function fetchInventory () {
    const response = await axios.get("http://localhost:3001/inventories");
    return response.data.data;
};

const InventoryContainer = () => {
    const queryClient = useQueryClient();
    const { data: inventoryData, isLoading: inventoryIsLoading, isError: inventoryIsError } =
        useQuery<IInventory>("userInventory", fetchInventory);
    const { data: characterData, isLoading: characterIsLoading, isError: characterIsError, refetch: characterRefetch } =
        useQuery<Array<ICharacterLvL>>('userCharacters', fetchCharacters);
    const { data: inventoriesData, isLoading: inventoriesIsLoading, isError: inventoriesIsError, refetch: inventoriesRefetch } =
        useQuery<Map<string, IInventory>>(
            ['inventories', characterData],
            () => fetchInventories(characterData as Array<ICharacterLvL>),
            {
                enabled: !!characterData
            }
        );
    const [data, setData] = React.useState<IInventory>();
    const dataUpdated = useSelector((state: RootState) => state.inventory.inventory);
    const update = useSelector((state: RootState) => state.menuModal.updateInventory);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (update) {
            updateData();
            dispatch(updateInventory(false));
        };
        fetchData();
    }, [update]);

    async function fetchData () {
        const response = await axios.get("http://localhost:3001/inventories");
        setData(response.data.data);
    };
    
    async function updateData () {
        const response = await axios.put("http://localhost:3001/inventories", {
            items: dataUpdated
        });
        console.log("updatinggg")
        await characterRefetch();
        await inventoriesRefetch();
    };

    return (
        <div>
            {inventoryData ? (
                <Inventory
                    data={inventoryData}
                    isLoading={false}
                    isError={false}
                />
            ) : (
                <div>loading...</div>
            )}
        </div>
    );

};

export default InventoryContainer;
