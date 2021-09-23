import React from 'react';
import {Col, Row} from "antd";
import {GreenButton} from "./GreenButton";

const CoursesOffered = () => {
    return (
        <div>
            <div className="ContentCoursesOffered">
                <Row>
                    <Col span={12}>
                        <img className="imgServices" src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"alt="Futbol"/>

                    </Col>
                    <Col span={12}>
                        <h1>Basquetball</h1>
                        <p>Curso disponible para niños de 12-17 años.</p>
                        <p>Horario: Lunes a Viernes, 16:00-17:00</p>
                        <div className="btnCourse">
                            <GreenButton button_name="Inscribirse" button_func={GreenButton}>
                            </GreenButton>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <img className="imgServices" src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"alt="Futbol"/>

                    </Col>
                    <Col span={12}>
                        <h1>Fútbol</h1>
                        <p>Curso disponible para niños de 12-17 años.</p>
                        <p>Horario: Lunes a Viernes, 16:00-17:00</p>
                        <div className="btnCourse">
                            <GreenButton button_name="Inscribirse" button_func={GreenButton}>
                            </GreenButton>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <img className="imgServices" src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"alt="Futbol"/>

                    </Col>
                    <Col span={12}>
                        <h1>Ecuavoley</h1>
                        <p>Curso disponible para niños de 12-17 años.</p>
                        <p>Horario: Lunes a Viernes, 16:00-17:00</p>
                        <div className="btnCourse">
                            <GreenButton button_name="Inscribirse" button_func={GreenButton}>
                            </GreenButton>
                        </div>

                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default CoursesOffered;