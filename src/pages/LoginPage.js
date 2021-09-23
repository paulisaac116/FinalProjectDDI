import React from "react";
import { Form, Image, Input, Button} from "antd";
import { useHistory } from "react-router-dom";
import logo from "../images/sportfield_logo.png";
import { auth } from "../firebase";

import "../styles/LoginPageStyles/login.css";

function Log() {
  
  let history = useHistory()

  const goToRegisterPage = () => {
    history.push("/registrarse")
  }

  const onFinish = async ({email, password}) => {

    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );

      // Signed in
      const user = userCredential.user
      console.log(user)
      history.push("/perfil")

    } catch (error) {
      const errorCode = error.code;
      console.log("errorCode", errorCode);
    }
  }


  return (
    <div>
      <div className="MainContainer">
        <div className="imageContainer">
          {" "}
          <Image width={400} src={logo} left={800} top={300} />
        </div>

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Correo"
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese su correo electrónico",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese su contraseña",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Iniciar sesión
            </Button>
          </Form.Item>
          <div className={"footer"}>¿No tienes cuenta? Regístrate </div>{" "}
          <div
            style={{ cursor: "pointer" }}
            className={"footer1"}
            onClick={goToRegisterPage}
          >
            {" "}
            Aquí
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Log;
