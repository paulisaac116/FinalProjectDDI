import React from 'react';
import "../styles/App.css";

import { Menu } from "antd";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
    UserOutlined,
    DribbbleSquareOutlined,
    BookOutlined,
    CommentOutlined,
    NotificationOutlined,
} from "@ant-design/icons";
import { HeaderComp } from "../components/ProfilePageComp/HeaderComp";

import { useHistory } from "react-router-dom";

const AdminUser = () => {
    const { SubMenu } = Menu;
    const history = useHistory();
    const handeladduser = () => {
        history.push("/prueba");
    };
    const handeladdCourses = () => {
        history.push("/cursos");
    };
    return (
        <div>
            <div>
                <HeaderComp />
                <Menu
                    className="containerMenu1"
                    style={{
                        width: 300,
                        high: "200px",
                        left: 60,
                        background: "3A438B",
                        borderRadius: 20,
                    }}
                    mode="vertical"
                >
                    <SubMenu
                        onClick={<handeladduser />}
                        style={{
                            background: "3A438B",
                            color: "white",
                            position: "center",
                        }}
                        icon ={<UserOutlined /> }
                        title="Usuarios"
                    >
                        {" "}
                    </SubMenu>
                    <SubMenu
                        onClick={handeladdCourses}
                        style={{ background: "3A438B", color: "white", position: "center" }}
                        icon={<DribbbleSquareOutlined />}
                        title="Cursos"
                    ></SubMenu>

                    <SubMenu
                        style={{ background: "3A438B", color: "white", position: "center" }}
                        icon={<BookOutlined />}
                        title="Turnos"
                    ></SubMenu>

                    <SubMenu
                        style={{
                            color: "white",
                            position: "center",
                        }}
                        icon={<CommentOutlined />}
                        title="Comentarios"
                    ></SubMenu>

                    <SubMenu
                        style={{ background: "3A438B", color: "white", position: "center" }}
                        icon={<NotificationOutlined />}
                        title="Notificaciones"
                    ></SubMenu>
                </Menu>
            </div>
        </div>
    );
};

export default AdminUser;




