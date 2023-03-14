import React from 'react';

function Button ({text ,type, icon ,mobile,...rest}) {
    return (

        <button className={`text-center btn btn-${type} flex items-center justify-center ${mobile?'btn-tel-mobile':''}` } {...rest}>
             <span className="pl-2">{text}</span> <span>{icon}</span>
        </button>
    );
}

export default Button;