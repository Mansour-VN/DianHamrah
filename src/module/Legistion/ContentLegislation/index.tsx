
import ServicesCard from "@/common/components/ServicesCard";
import planingPNG from "public/assets/images/Icons/se-icon4-af.png";
import planingIcon from "public/assets/images/Icons/se-icon4.png";


const ContentLegislation = () => {
    return (
        <div id="sec2" className="w-full flex items-center justify-center relative flex-col   ">

            <h2 className="text-4xl py-8">دسته بندی  قوانین  </h2>

            <div className="w-1/2">
                <div className="container mx-auto px-4   ">
                    <div className="Qtable flex flex-col  md:flex-row md:gap-4 flex-wrap flex-grow  m-auto ">

                        <div className=" min-w-full m-auto">
                            <ServicesCard backImg={planingPNG} icon={planingIcon} title=" قانون پایانه های فروشگاهی و سامانه  مودیان "
                                   content="." path="/ContentLegislation/StoresTax" />
                        </div>
                        <div className=" min-w-full m-auto">
                            <ServicesCard backImg={planingPNG} icon={planingIcon} title=" قانون مالیات های مستقیم "
                                   content="." path="/ContentLegislation/CurrentTax"/>
                        </div>
                        <div className=" min-w-full m-auto">
                            <ServicesCard backImg={planingPNG} icon={planingIcon} title="  قانون مالیات بر ارزش افزوده جدید "
                                   content="." path="/ContentLegislation/ValueAddedTaxNew"/>
                        </div>
                        <div className=" min-w-full m-auto">
                            <ServicesCard backImg={planingPNG} icon={planingIcon} title="قانون مالیات بر ارزش افزوده قدیم  "
                                   content="." path="/ContentLegislation/ValueAddedTaxOld"/>
                        </div>
                        <div className="min-w-full m-auto">
                            <ServicesCard backImg={planingPNG} icon={planingIcon} title="آرشیو سوالات متداول "
                                   content="." path="/ContentLegislation/QuestionsArchive"/>
                        </div>
                        <div className=" min-w-full m-auto">
                            <ServicesCard backImg={planingPNG} icon={planingIcon} title="استاندارد های حسابرسی "
                                   content="." path="/ContentLegislation/AuditingStandards"/>
                        </div>
                        <div className=" min-w-full m-auto">
                            <ServicesCard backImg={planingPNG} icon={planingIcon} title="تحلیل و بررسی فنی "
                                   content="." path="/ContentLegislation/TechnicalAnalysis"/>
                        </div>
                        <div className=" min-w-full m-auto">
                            <ServicesCard backImg={planingPNG} icon={planingIcon} title="آرشیو "
                                   content="." path="/ContentLegislation/Archive"/>
                        </div>



                    </div>
                </div>
            </div>


        </div>
    )
}

export default ContentLegislation