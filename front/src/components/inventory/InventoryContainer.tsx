import React from "react";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { Inventory } from ".";

export interface IInventory {
    [key: string]: number;
}

const InventoryContainer = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery<IInventory>('inventory', fetchData);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData () {
        const response = await axios.get("http://localhost:3001/inventories");
        return response.data.data;
    };

    return (
        <div>
            {data ? (
                <Inventory
                    data={data}
                    isLoading={isLoading}
                    isError={isError}
                />
            ) : (
                <div>loading...</div>
            )}
        </div>
    );

};

export default InventoryContainer;
