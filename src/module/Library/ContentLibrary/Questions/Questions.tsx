import { FrequentlyQuestions } from "public/Constants/FrequentlyQuestions"


export const Questions = ()=>{
    return(
        <div>
            {FrequentlyQuestions.map((item)=>{

                return(
                    <div key={item.id} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-6">
                        <div className="collapse-title text-xl font-medium">
                            {item.title}
                        </div>
                        <div className="collapse-content">
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}