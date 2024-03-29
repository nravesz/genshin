import axios from "axios";
import { useEffect } from 'react';
import { Card, CardList } from '.';
import { ICharacterLvL } from '.';
import { IInventory } from '../inventory';

import { useQuery } from "react-query";

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { alreadyUpdated } from '../../redux/reducers/CardListReducer';

export const fetchCharacters = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/characters`);
    return response.data.data;
};

export const fetchInventories = async (characterData: Array<ICharacterLvL>) => {
    const inventories: Map<string, IInventory> = new Map();
    for (let i = 0; i < characterData.length; i++) {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/characters/resources`, {
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
    const updated = useSelector((state: RootState) => state.cardListUpdater.updated);
    const dispatch = useDispatch<AppDispatch>();

    const { data: characterData, isLoading: characterIsLoading,
        isError: characterIsError, refetch: characterRefetch } =
        useQuery<Array<ICharacterLvL>>('userCharacters', fetchCharacters);

    const { data: inventoryData, isLoading: inventoryIsLoading,
        isError: inventoryIsError, refetch: inventoriesRefetch } =
    useQuery<Map<string, IInventory>>(
        ['inventories', characterData],
        () => fetchInventories(characterData as Array<ICharacterLvL>),
        {
            enabled: !!characterData
        }
    );

    useEffect(() => {
        (async () => {
            if (!updated) {
                await characterRefetch();
                await inventoriesRefetch();
                dispatch(alreadyUpdated());
            }
        })();
    }, [updated]);

    const characters = Array.isArray(characterData) ? characterData : [];

    return (
        <div>
            {characterIsLoading || inventoryIsLoading ? (
                <span>Loading...</span>
            ) : characterData && inventoryData ? (
                <div>
                    <CardList
                        characters={characters}
                        resources={inventoryData}
                    />
                </div>
            ) : (
                <span>Error</span>
            )}
        </div>
    );
};

export default CardListContainer;
