import {FrequentlyQuestions} from "public/Constants/FrequentlyQuestions"
import {useState} from "react";
// @ts-ignore

export const Questions = () => {

    const [tab, setTab] = useState(1)

    return (
        <div>
            <div className="tabs">
                {
                    FrequentlyQuestions.map((item) => (

                        <div key={item.title} className={`tab tab-lifted ${tab === item.id ? "tab-active" : ""}`}
                             onClick={() => setTab(item.id)}>{item.title}</div>
                    ))
                }

            </div>

            {FrequentlyQuestions.map((item) => {

                return (
                    <>
                        {item.items.map((i) => (
                            item.id === tab ?
                                <div key={i.id} tabIndex={0}
                                     className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-6">
                                    <div className="collapse-title text-xl font-medium">
                                        {i.title}
                                    </div>
                                    <div className="collapse-content">
                                        <p>{i.description}</p>
                                    </div>
                                </div> : ""

                        ))}

                    </>
                )
            })}

        </div>
    )
}