import React from 'react'
import PropTypes from 'prop-types';

import '../../styles/InstructionCard.css'

export const InstructionCard = ({instruction}) => {
        
    return (
        <div>
            <p className="card">
                {instruction}
            </p>
        </div>
    )
}

InstructionCard.propTypes = {
    instruction: PropTypes.string,
}
