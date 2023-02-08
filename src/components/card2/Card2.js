import Image from 'next/image';


const Card2 = ({src, textTitleCard, mainTextCard}) => {
    return (
        <div id="card2" className="flex flex-col gap-2 w-80 bg-gray-100">
            <div>
                <Image
                    src={src}
                    alt=""
                    width={500}
                    height={500}
                />
            </div>

            <div className='px-3'>
                <h3 className='text-xl text-official font-bold p-1 text-center'>{textTitleCard}</h3>
                <p className='font-semibold text-justify p-2'>{mainTextCard}</p>
            </div>

        </div>
    )
}

export  default Card2;