import React from "react"
import {useHistory}  from "react-router-dom";
import { Form, Input, Row, Col, Image, Button, message} from "antd";
import  {auth, db} from '../firebase/index'

import logo from "../images/logo.png";
import "../styles/RegisterPageStyles/register.css";

const { Item } = Form;

function Register() {
  
  let history = useHistory()
  const onFinish = async ({email, password, name, userName, land, lastName}) => {

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      
      // Signed in
      const user = userCredential.user
      const userId = user.uid

      await db.collection("Users").doc(userId).set(
        {
          name,
          email,
          userName,
          lastName,
          land
        }
      )
      history.push("/perfil")
      message.success("Usuario registrado correctamente");

    }catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
    }
  }
 
  return (
    <div>
      <Image className="cimg" width={400} src={logo} left={300} />
      <h1>Regresar</h1>
      <h2 className="subtitulo">Registro de nuevo usuario</h2>
      <div className="Container1">
        <Row>
          <Col xs={1} sm={2} md={6} lg={7} />
          <Col xs={22} sm={20} md={12} lg={10}>
            <Form
              name={"form"}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Item
                style={{ color: "white" }}
                label="Usuario"
                name="userName"
                rules={[
                  { required: true, message: "Por favor, ingresa tu Usuario" },
                ]}
              >
                <Input />
              </Item>

              <Item
                label="Nombre"
                name="name"
                rules={[
                  { required: true, message: "Por favor, ingresa tu Nombre" },
                ]}
              >
                <Input />
              </Item>

              <Item
                label="Apellido"
                name="lastName"
                rules={[
                  { required: true, message: "por favor, ingresa tu Apellido" },
                ]}
              >
                <Input />
              </Item>

              <Item
                label="Correo"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa tu Correo Electronico",
                  },
                ]}
              >
                <Input />
              </Item>

              <Item
                label="Contraseña"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa una contraseña válida",
                  },
                ]}
              >
                <Input.Password />
              </Item>

              <Item
                label="Numero de lote"
                name="land"
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa tu Número de lote",
                  },
                ]}
              >
                <Input />
              </Item>
              <Item>
                <Button type="primary" htmlType="submit">
                  Registrarse
                </Button>
              </Item>
            </Form>
          </Col>
          <Col xs={1} sm={2} md={6} lg={7} />
        </Row>
      </div>
    </div>
  );
}
export default Register;
