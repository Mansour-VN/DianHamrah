import React from 'react';
import Image from 'next/image';


function Card7({disc , src ,name ,jobTitle}) {
    return (
<>

        <div className=" w-full lg:max-w-full lg:flex ">

            <div
                className=" shadow-lg border-r border-b border-l border-t border-gray-400  lg:border-gray-400 bg-white rounded-b  lg:rounded-r p-4 flex flex-col justify-between leading-normal ">
                <div className="mb-8  ">
                    <div className="flex  flex-col md:flex-row items-center gap-8 ">
                        <div>
                            <Image className=""
                                // loader={myLoader}
                                   src={src}
                                   alt="Picture of the author"
                                   width={150}
                                   height={150}
                            />
                        </div>
                        <div>
                            <p className="text-gray-700 text-base">{disc}</p>

                        </div>
                        <div className="subtitle flex flex-col justify-between items-center md:text-center" >
                            <div className="py-4">
                                <div className=" font-semibold ">{name}</div>
                                <div className="text-official text-center">{jobTitle}</div>
                            </div>
                            <div>
                                <div>
                                    <Image className=""
                                        // loader={myLoader}
                                           src="/assets/images/Icons/blockquote_d2.png"
                                           alt="Picture of the author"
                                           width={50}
                                           height={50} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

</>
    );
}

export default Card7;