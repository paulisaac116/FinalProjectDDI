import '../styles/App.css';
import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import TurnsPage from "../pages/TurnsPage";
import CoursesOfferedPage from "../pages/CoursesOfferedPage";
import {Layout} from "antd";

import TurnsAdmin from "./TurnsAdmin";
import Comments from "./Comments";
import AdminUser from "./AdminUser";
import CoursesOffered from "./CoursesOffered";
import  {auth} from '../firebase/index'

import { UserContext } from './UserContext';

const {Content } = Layout;

function App() {

    const [documentId, setDocumentId] = useState("")

        useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
            const uid = user.uid;
            setDocumentId(uid)
    
            } else {
            console.log("No hay sesion activa", user);
            }
        })
    }, )
  

    return (
        <UserContext.Provider value={documentId}>
            <Router>
            <Layout className="main-content">
                <Content >
                    <Switch>
                        <Route path="/acerca-de">
                            <AboutPage />
                        </Route>
                        <Route path="/inicio-sesion">
                            <LoginPage />
                        </Route>
                        <Route path="/registrarse">
                            <RegisterPage />
                        </Route>
                        <Route path="/perfil">
                            <ProfilePage />
                        </Route>
                        <Route path="/agendar-canchas">
                            <TurnsPage />
                        </Route>
                        <Route path="/cursos-ofertados">
                            <CoursesOfferedPage />
                        </Route>
                        <Route path="/turnos">
                            <TurnsAdmin />
                        </Route>
                        <Route path="/comentarios">
                            <Comments />
                        </Route>
                        <Route path="/prueba">
                            <AdminUser />
                        </Route>
                        <Route path="/cursos">
                            <CoursesOffered />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </Content>
            </Layout>

        </Router>
        </UserContext.Provider>
    );
}

export default App;
