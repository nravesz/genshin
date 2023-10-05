import React from "react";
import Button from "react-bootstrap/esm/Button";
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
};

export async function fetchInventory () {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/inventories`);
    return response.data.data;
};

const InventoryContainer = () => {
    const { data: inventoryData, isLoading: inventoryIsLoading,
        isError: inventoryIsError, refetch: inventoryRefetch, isFetching } =
        useQuery<IInventory>("userInventory", fetchInventory);
    const { data: characterData, isLoading: characterIsLoading,
        isError: characterIsError, refetch: characterRefetch } =
        useQuery<Array<ICharacterLvL>>('userCharacters', fetchCharacters);
    const { data: inventoriesData, isLoading: inventoriesIsLoading,
        isError: inventoriesIsError, refetch: inventoriesRefetch } =
        useQuery<Map<string, IInventory>>(
            ['inventories', characterData],
            () => fetchInventories(characterData as Array<ICharacterLvL>),
            {
                enabled: !!characterData
            }
        );
    const dataUpdated = useSelector((state: RootState) => state.inventory.inventory);
    const update = useSelector((state: RootState) => state.menuModal.updateInventory);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        (async () => {
            if (update) {
                dispatch(updateInventory(false));
                await updateData();
            };
        })();
    }, [update]);
    
    async function updateData () {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/inventories`, {
            items: dataUpdated
        });
        await inventoryRefetch();
        await inventoriesRefetch();
    };

    return (
        <div>
            {inventoryIsLoading ? (
                <span>Loading...</span>
            ) : isFetching ? (
                <span>Updating...</span>
            ) : inventoryData ? (
                <Inventory
                        data={inventoryData}
                        isLoading={false}
                        isError={false}
                    />
            ) : (
                <span>Error</span>
            )}
        </div>
    );

};

export default InventoryContainer;
