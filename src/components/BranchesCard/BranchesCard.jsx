import Button from "../Button/Button";
import {FiMapPin} from "react-icons/fi";
import React, {useState} from "react";

const BranchesCard = ({title, address, map, tel, mobile, mail}) => {
    const [more, setMore] = useState(false)
    return (
        <div className="bg-orange-200 radio-lg cursor-pointer min-w-[100px]  " onClick={() => setMore(!more)}>
            <h2>{title}</h2>
            <div>
                آدرس:
                <p>{address}</p>
            </div>
            <p>بیشتر</p>
            <div className={`${more ? "block" : "hidden"}`}>
                <div>
                    <p>{tel}</p>
                    <p>{mobile}</p>
                    <p>{mail}</p>
                </div>
                <iframe
                    src={map}
                    width="250" height="200" className="border-2 border-sky-500"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

            </div>
        </div>
    )
}

export default BranchesCard