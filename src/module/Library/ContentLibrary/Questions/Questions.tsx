import {FrequentlyQuestions ,FrequentlyQuestionsLinks} from "public/Constants/FrequentlyQuestions"
import {useState} from "react";
import Link from "next/link";
// @ts-ignore

export const Questions = () => {

    const [tab, setTab] = useState(1)

    return (
        <div className="flex flex-col md:flex-row justify-between container mx-auto pt-36 px-4	md:px-0 ">
        <div className="w-full md:w-8/12 ">
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
    <div className="border-2 radios-lg w-full md:w-3/12 h-fit m-16 mx-auto md:m-0">
        <p className="pb-12 font-extrabold text-3xl text-center pt-4">مطالب مفید</p>
        <div className="border-t-2 flex flex-col p-4">
            {FrequentlyQuestionsLinks.map((item)=>(
            <Link key={item.id} href={item.link}>{item.title}</Link>

            ))}

        </div>
    </div>
        </div>
    )
}