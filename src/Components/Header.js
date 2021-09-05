/* eslint-disable no-unused-vars */
import React from 'react'
import Proptypes from 'prop-types' 
import { useLocation } from 'react-router'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    // const onClick = () =>{
    //     console.log('button clicked!')
    // }
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'AddTask' : 'Close Task'} onClick={onAdd} />}
            
        </header>
    )
}

const headingStyle = {
    color: 'green', backgroundColor: 'gray'
}

Header.defaultProps ={
    title: 'default title',
}
Header.propTypes= {
  title: Proptypes.string.isRequired,
}
export default Header;
