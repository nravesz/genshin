import axios from "axios";

export const fetchCharacters = async () => {
    const { data } = await axios.get("https://genshin-planner-api.vercel.app/characters")
    return data.data;
};
