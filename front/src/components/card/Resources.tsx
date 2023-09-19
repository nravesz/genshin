import { IInventory } from "../inventory"
import ResourcesElement from "./ResourcesElement";

type Props = {
    resources: IInventory
}

const Resources = ({ resources} : Props) => {
    return (
    <div>
        {Object.keys(resources).map((itemName) => (
            <ResourcesElement
                key={itemName}
                id={itemName}
                quantity={resources[itemName]}
            />
        ))}
    </div>
    );
};

export default Resources;