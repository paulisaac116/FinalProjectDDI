import React from 'react'

import '../../styles/TurnsPageStyles/FieldsTable.css'

export const FieldBar = () => {
    return (
        <div className="bar">
            <div className="bar__name">
                <div className="bar__circle green"></div>
                <p>Fútbol</p>
            </div>
            <div className="bar__name">
                <div className="bar__circle yellow"></div>
                <p>Basquet</p>
            </div>
            <div className="bar__name">
                <div className="bar__circle red"></div>
                <p>Tennis</p>
            </div>
            <div className="bar__name">
                <div className="bar__circle purple"></div>
                <p>Voleibal</p>
            </div>
        </div>
    )
}
