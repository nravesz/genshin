import axios from "axios";

export const fetchCharacters = async () => {
    const { data } = await axios.get("http://localhost:3001/characters")
    return data.data;
};
