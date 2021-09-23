import React from 'react';
import { Menu} from 'antd';
import {Link} from "react-router-dom";


const MainMenu = () => {

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            className="main-menu"
        >
            <Menu.Item>
                <Link to="/inicio-sesion">Iniciar Sesion</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/registrarse">Registrarse</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/acerca-de">Acerca de</Link>
            </Menu.Item>
        </Menu>
    );
};

export default MainMenu;