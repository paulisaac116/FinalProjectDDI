import React from 'react';
import {InstagramOutlined, WhatsAppOutlined} from "@ant-design/icons";
import "../styles/MainFooter.css"

function MainFooter() {
    return (
        <div className="main-footer">
            <h1>Contáctenos</h1>
            <div className="main-footer__social-media">
                <div className="main-footer__social-media--icon">
                    <WhatsAppOutlined />
                        <p><a href="https://wa.me/+593999059146?text=Hola,%20vengo%20de%20SportField%20necesito%20su%20ayuda">(+593) 999059146</a></p>
                </div>
                <div className="main-footer__social-media--icon">
                    <InstagramOutlined />
                        <p><a href="https://instagram.com/kevingramal?utm_medium=copy_link">Sportfield</a></p>

                </div>
            </div>
            
        </div>
    );
}

export default MainFooter;