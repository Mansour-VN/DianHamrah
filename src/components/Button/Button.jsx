import React from 'react';

function Button({text ,type, icon}) {
    return (

        <button className={` text-center btn btn-${type}`}>
            {text} {icon}
        </button>
    );
}

export default Button;