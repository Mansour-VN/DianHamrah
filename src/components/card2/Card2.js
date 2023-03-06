import Image from 'next/image'

const Card2 = ({src, textTitleCard, mainTextCard, key,alt}) => {
    return (
    <div key={key} className="card w-fit bg-base-100 shadow-xlb flex justify-center items-center">
        <Image src={src} alt={alt} width={200} height={200}  />
        <div className="card-body flex justify-center items-center">

            <h2 className="card-title text-official text-center ">{textTitleCard}</h2>

            <p className="text-justify  max-h-36 overflow-hidden text-justify">{mainTextCard}</p>

            <div className="card-actions justify-end">
                <button className="btn btn-primary">اطلاعات بیشتر</button>
            </div>
        </div>
    </div>
)
}

export  default Card2;