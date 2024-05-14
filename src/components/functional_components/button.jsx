import { useNavigate } from 'react-router-dom';
import React from "react";

//css
import '../../css/func_components.css'

const Button = ({title, action}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(action)
    }

    return (
        <button onClick={handleClick}>
            <span className='button-title'>{title}</span>
        </button>
    )
}

export default Button