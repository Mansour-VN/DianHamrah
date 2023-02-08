import Image from 'next/image';


const Card2 = ({src, textTitleCard, mainTextCard}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={src} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-official text-center">{textTitleCard}</h2>
                <p className="text-justify">{mainTextCard}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">اطلاعات بیشتر</button>
                </div>
            </div>
        </div>
    )
}

export  default Card2;