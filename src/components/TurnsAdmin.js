import React, {useEffect, useState} from 'react';
import {Button} from "antd";
import "../styles/TurnsAdmin.css";
import {db} from "../firebase";
/*
const usuarios  = [
        {
            id:"1",
            nombre:"Nataly",
            apellido:"Guallichico",
            fecha:"22/08/2021",
            hora:"09:30",
            cancha:"NA",
        },{
    id:"2",
        nombre:"Kevin",
        apellido:"Gramal",
        fecha:"22/08/2021",
        hora:"09:30",
        cancha:"NA",
    },{
        id:"3",
        nombre:"Carlos",
        apellido:"Moreta",
        fecha:"16/07/2021",
        hora:"19:30",
        cancha:"NA",
    }

    ];
*/
const handleShowUbication =()=>{
    console.log("ubicacion")
}
const handleDelete = () => {
  console.log("ELIMINAR")
}
const handleEdit = () => {
    console.log("Editar")
}

const TurnsAdmin = () => {

    const [dataa, setDat] = useState([1]);
    useEffect(() => {
        console.log("useefect data");
        const getDta = async () => {
            const setdata = [];
            await db.collection("Turns").onSnapshot("value", (snapshot) => {
                console.log("Turns", snapshot);
                snapshot.forEach((childSnapshot) => {
                    const data = childSnapshot.data();
                    setdata.push(data);
                });
                setDat(setdata);
            });
        };
        getDta();
    }, []);
    useEffect(() => {
        console.log("datos de la base", dataa);
    }, [dataa]);


    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Cancha</th>
                </tr>
                </thead>
                <tbody>

                        {
                            dataa.map((item, key) => (
                                <tr key={key}>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.date}</td>
                                    <td>{item.hora}</td>
                                    <td> <Button onClick={handleShowUbication} className="ub-button">Ver ubicacion</Button></td>
                                    <td><Button onClick={handleEdit} className="button-edit">Editar</Button></td>
                                    <td><Button onClick={handleDelete} className="purple-button">Eliminar</Button></td>
                                </tr>

                            ))
                        }

                </tbody>
            </table>
        </div>
    );
};

export default TurnsAdmin;