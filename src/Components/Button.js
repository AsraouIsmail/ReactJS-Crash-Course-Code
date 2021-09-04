/* eslint-disable no-unused-vars */
/* eslint-disable react/no-typos */
import React from 'react'
import Proptypes from 'prop-types'
const Button = ({color, text, onClick}) => {
    
    return <button className='btn' onClick={onClick} style={{backgroundColor: color}}>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: Proptypes.string,
    color: Proptypes.string,
    onClick: Proptypes.func.isRequired,
}

export default Button
