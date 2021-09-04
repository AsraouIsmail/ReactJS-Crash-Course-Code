/* eslint-disable no-unused-vars */
import React from 'react'
import Proptypes from 'prop-types' 
import Button from './Button'

const Header = ({title}) => {
    const onClick = () =>{
        console.log('button clicked!')
    }
    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add Task" onClick={onClick}/>
            
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
