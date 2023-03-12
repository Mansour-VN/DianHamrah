import supportIcon from "@/../public/assets/images/Icons/se-icon7.png"
import supportPNG from "@/../public/assets/images/Icons/se-icon7-af.png";
import planingIcon from "@/../public/assets/images/Icons/se-icon4.png";
import planingPNG from "@/../public/assets/images/Icons/se-icon4-af.png";
import managementIcon from "@/../public/assets/images/Icons/se-icon6.png";
import managementPNG from "@/../public/assets/images/Icons/se-icon6-af.png";
import keepingIcon from "@/../public/assets/images/Icons/se-icon5.png";
import keepingPNG from "@/../public/assets/images/Icons/se-icon5-af.png";
import Card5 from "@/components/card5/card5";

const Section5 = () => {
    return (
        <div id="lowTerminals ">
            <div className="py-8">
                <div className="container flex flex-row flex-wrap items-center">
                    <div className="md:w-1/2 flex flex-col md:flex-row">
                        <div className="flex flex-col p-2">
                            <Card5 backImg={supportPNG} icon={supportIcon} title="حمایت کردن"
                                   content="تشخیص موتور نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و..." path="/"/>
                            <Card5 backImg={keepingPNG} icon={keepingIcon} title="نگهداری"
                                   content="تشخیص موتور نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و..." path="/"/>
                        </div>
                        <div className="flex flex-col p-2 md:mt-16">
                            <Card5 backImg={planingPNG} icon={planingIcon} title="برنامه ریزی"
                                   content="تشخیص موتور نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و..." path="/"/>
                            <Card5 backImg={managementPNG} icon={managementIcon} title="مدیریت"
                                   content="تشخیص موتور نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و..." path="/"/>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex-col md:pr-8">
                        <h2 className="text-4xl py-8"> پیامدهای اجرای قانون پایانه های فروشگاهی و ارسال الکترونیک
                            صورتحساب به سامانه مودیان! </h2>
                        <p className="py-2">
                            طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات
                            آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های
                            مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح
                            به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد
                            افراد روی متن های موجود تمرکز کنند.
                        </p>
                        <p className="py-2">
                            از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان معمولا از لورم ایپسوم
                            استفاده میکنند تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از اینکه متن
                            در آن قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها چگونه در نظر گرفته شده است
                        </p>
                        <p className="py-2">
                            نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست
                            کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند از یاد می‌برند که متن لورم را
                            از قسمتهای مختلف سایت حذف کنند

                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section5