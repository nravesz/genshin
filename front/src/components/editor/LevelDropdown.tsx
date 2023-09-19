import { Dropdown } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { LevelDropdownItem, ILvL } from ".";

type Props = {
    LvL: ILvL,
    setLvL: (lvl: ILvL) => void
};

const LevelDropdown = ({ LvL, setLvL }: Props) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {LvL.LvL} {LvL.isAscended ? "*" : ""}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {Array.from({ length: 8 }).map((_, index) => (
                    (index === 0) ? (
                        <Row key={index}>
                            <Dropdown.Item>
                                <LevelDropdownItem
                                    LvL={index + 1}
                                    isAscended={false}
                                    setLvL={setLvL}
                                />
                            </Dropdown.Item>
                        </Row>
                    ) : (index === 7) ? (
                        <Row key={index}>
                            <Dropdown.Item>
                                <LevelDropdownItem
                                    LvL={(index + 1) * 10}
                                    isAscended={false}
                                    setLvL={setLvL}
                                />
                            </Dropdown.Item>
                        </Row>
                    ) : (
                        <Row key={index}>
                            <Col>
                                <Dropdown.Item>
                                    <LevelDropdownItem
                                        LvL={(index + 1) * 10}
                                        isAscended={false}
                                        setLvL={setLvL}
                                    />
                                </Dropdown.Item>
                            </Col>
                            <Col>
                                <Dropdown.Item>
                                    <LevelDropdownItem
                                        LvL={(index + 1) * 10}
                                        isAscended={true}
                                        setLvL={setLvL}
                                    />
                                </Dropdown.Item>
                            </Col>
                            <Dropdown.Divider />
                        </Row>
                    )
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LevelDropdown;
