import { IInventory } from "../inventory"
import ResourcesElement from "./ResourcesElement";
import "./styles/Resources.scss";

type Props = {
    resources: IInventory
}

const Resources = ({ resources} : Props) => {
    return (
    <div
        className="resources-div"
    >
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