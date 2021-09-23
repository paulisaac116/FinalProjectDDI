import React from 'react'
import PropTypes from 'prop-types';

import '../../styles/TurnsPageStyles/PurpleTitle.css'

export const PurpleTitle = ({title}) => {
    
    return (
        <div className="title">
            {title}
        </div>
    )
}

PurpleTitle.propTypes = {
    title: PropTypes.string,
}