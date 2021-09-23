import React from 'react';
import {Col, Row} from "antd";

const HeaderCoursesOffered = () => {
    return (
        <div>
            <div className="HeaderCoursesOffered">
                <Row>
                    <Col span={12}>
                        <h1>CURSOS OFERTADOS</h1>
                    </Col>
                    <Col span={12}>
                        <h2>
                            <a href={"/"}>
                                Regresar
                            </a>
                        </h2>
                    </Col>

                </Row>

            </div>
        </div>
    );
};

export default HeaderCoursesOffered;