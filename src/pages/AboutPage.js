import React from "react"
import "../styles/AboutPage.css";
import { Card, Col, Row } from "antd";
import sportFieldLogo from "../images/sportfield_logo.png";

function AboutPage() {
  /*<heder className="heder"></heder>*/
  return (
    <div className="imagenFondo">

      <div className="headerAboutPage">
        <Row>
          <Col span={12}>
            <img src={sportFieldLogo} alt="SportField" />
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
      <div className="containercard">
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <h1>Objetivo</h1>
             <p>Insentivar el deporte y la actividad fisica en la comunidad con nuestro sistema de agendamiento de canchas deportivas e inscripcion en nuestroa cursos dirigido para el publico en general.</p>
            </Card>
          </Col>
        </Row>

        <Row gutter={16}>
          <div className="containerMision">
          <Col span={8}>
            <Card>
              <h1>Misión</h1>
              <p>Promover el deporte como herramienta para la educación en valores
              y la salud.</p>
            </Card>
          </Col>
          </div>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <h1>Visión</h1>
              <p>Ser el principal agente internacional promotor del deporte
              inclusivo – educativo y de hábitos de vida saludable en el
              conjunto.</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutPage;
