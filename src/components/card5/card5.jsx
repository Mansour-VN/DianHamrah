import React from 'react';

function Card5({title, disc , backImg ,frontImg}) {
    return (

        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
           <div className="flex justify-between">
               <div className="">
                   {/*<img*/}
                   {/*    src={backImg}*/}
                   {/*    className="aspect-video w-full object-cover"*/}
                   {/*    alt=""*/}
                   {/*/>*/}
                   image 1
               </div>
               <div>
                  image2

               </div>
           </div>
            <div className="p-4">
                <h3 className="text-xl font-medium text-gray-900">{title}</h3>
                <p className="mt-1 text-gray-500">{disc}</p>

            </div>
        </div>
    );
}

export default Card5;