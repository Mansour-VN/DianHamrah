import React from 'react';

export function Button ({text ,type, icon ,mobile,...rest}) {
    return (

        <button className={`text-center btn btn-${type} flex items-center justify-center ${mobile?'btn-tel-mobile':''}` } {...rest}>
             <span className="pl-2">{text}</span> <span>{icon}</span>
        </button>
    );
}


export function AdminButton ({text}){
    return <button className="btnAdmin sm:btn-sm md:btn-md lg:btn-lg">{text}</button>
}