import React from "react";

import { HashLink as Link } from 'react-router-hash-link';

//css
import '../../css/func_components.css'

const CButton = ({title, action}) => {



    return (
        <button>
            <Link className="button-link" smooth to={action}>{title}</Link>
        </button>
    )
}

export default CButton

