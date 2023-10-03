import { Dropdown } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { LevelDropdownItem, ILvL } from ".";

import "./styles/LevelDropdown.scss";

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
            <Dropdown.Menu className="dropdown-menu">
                <div className="dropdown-menu-div">
                    {Array.from({ length: 8 }).map((_, index) => (
                        (index === 0) ? (
                            <Row className="dropdown-row" key={index}>
                                <Col className="dropdown-col-top" >
                                    <Dropdown.Item className="dropdown-item" >
                                        <LevelDropdownItem
                                            LvL={index + 1}
                                            isAscended={false}
                                            setLvL={setLvL}
                                        />
                                    </Dropdown.Item>
                                </Col>
                            </Row>
                        ) : (index === 7) ? (
                            <Row className="dropdown-row" key={index}>
                                <Col className="dropdown-col-bottom" >
                                    <Dropdown.Item className="dropdown-item" >
                                        <LevelDropdownItem
                                            LvL={(index + 1) * 10}
                                            isAscended={false}
                                            setLvL={setLvL}
                                        />
                                    </Dropdown.Item>
                                </Col>
                            </Row>
                        ) : (
                            <Row className="dropdown-row" key={index}>
                                <Col className="dropdown-col-left" >
                                    <Dropdown.Item className="dropdown-item" >
                                        <LevelDropdownItem
                                            LvL={(index + 1) * 10}
                                            isAscended={false}
                                            setLvL={setLvL}
                                        />
                                    </Dropdown.Item>
                                </Col>
                                <Col className="dropdown-col-right" >
                                    <Dropdown.Item className="dropdown-item" >
                                        <LevelDropdownItem
                                            LvL={(index + 1) * 10}
                                            isAscended={true}
                                            setLvL={setLvL}
                                        />
                                    </Dropdown.Item>
                                </Col>
                            </Row>
                        )
                    ))}
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LevelDropdown;
