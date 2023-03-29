import React from 'react';

export function Button ({text ,type, icon ,mobile,...rest}) {
    return (

        <button className={`text-center btn btn-${type} flex items-center justify-center ${mobile?'btn-tel-mobile':''}` } {...rest}>
             <span className="pl-2">{text}</span> <span>{icon}</span>
        </button>
    );
}


export function AdminButton ({text, icon, type , ...rest}){
    return <button className={`bg-slate-700 flex flex-row-reverse  justify-between items-center ${type?"bg-gradient-to-r from-slate-800" : ""}   hover:shadow-xl hover:text-xl text-white w-full sm:btn-sm md:btn-md lg:btn-lg`} {...rest}>
          <span className="pl-2">{text}</span> <span>{icon}</span>
        </button>
}