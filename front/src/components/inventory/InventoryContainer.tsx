import React from "react";
import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import axios from "axios";
import { Inventory } from ".";

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { updateInventory } from '../../redux/reducers/MenuModalReducer';

export interface IInventory {
    [key: string]: number;
}

const InventoryContainer = () => {
    const queryClient = useQueryClient();
    // const { data, isLoading, isError } = useQuery<IInventory>('inventory', fetchData);
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
        //return response.data.data;
    };
    
    async function updateData () {
        const response = await axios.put("http://localhost:3001/inventories", {
            items: dataUpdated
        });
    };

    return (
        <div>
            {data ? (
                <Inventory
                    data={data}
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
