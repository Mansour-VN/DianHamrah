import Card2 from "./../../components/card2/Card2";

const Section2 = () => {

    return (
        <div id="sec2" className="section2 w-full flex flex-col items-center relative z-0">
            <h1 className="text-4xl font-bold	text-center	 sticky h-72 bg-bg6 w-full text-white pt-6">
                خدمات دیان همراه فردا
            </h1>
            <div className="container relative bottom-32">
                <div className="flex md:flex-row flex-col gap-12 justify-center items-center">
                    <Card2
                        src="/assets/images/People/services-img3.png"
                        textTitleCard={"آموزش قانون پایانه فروشگاهی و سامانه مودیان"}
                        mainTextCard={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"}/>
                    <Card2
                        src="/assets/images/People/services-img3.png" textTitleCard={"آموزش ارسال صورتحساب به سامانه مودیان"}
                        mainTextCard={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"}/>
                               <Card2
                        src="/assets/images/People/services-img3.png"
                        textTitleCard={"برگزاری کارگاه های آموزشی برای مودیان مالیاتی"}
                        mainTextCard={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"}/>

                </div>
            </div>

        </div>
    )
}

export default Section2