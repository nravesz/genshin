import Image from "react-bootstrap/esm/Image";

type CharacterCardPrompts = {
    id: string;
    name: string;
}

const CharacterCard = ({id, name} : CharacterCardPrompts) => {
    return (
        <div>
            <Image
                src={`https://paimon.moe/images/characters/${id}.png`}
            />
            <p>{name}</p>
        </div>
    );
};

export default CharacterCard;
