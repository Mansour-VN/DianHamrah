import React from 'react';

function Button({text ,type, icon}) {
    return (

        <button className={`text-center btn btn-${type} flex items-center justify-center btn-tel-mobile md:` }>
            {text} {icon}
        </button>
    );
}

export default Button;