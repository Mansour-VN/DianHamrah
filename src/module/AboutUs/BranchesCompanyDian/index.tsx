import BranchesCard from "@/common/components/BranchesCard/BranchesCard"



const BrancheSCompanyDian = () => {
  return (
    <div id="Branches" className="flex flex-col items-center justify-center container my-10"> {/*Branches*/}
                <h2 className="mb-10 text-4xl font-extrabold text-official">لیست شعب و دفاتر</h2>
                <div className="container flex flex-col items-center justify-center  gap-4	">
                    <BranchesCard title="دفتر مرکزی"
                                  address="میدان صنعت، خیابان دادمان"
                                  // map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.3563388866064!2d51.351392072989924!3d35.76492647493776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710ba2cbbbb%3A0xf6f06ac08e9d909!2sasak%20gahrn!5e0!3m2!1sfa!2s!4v1675675421405!5m2!1sfa!2s"
                                  tel="021-96646"  mail="info@dianhamrah.ir"
                                  manager="آقای دکتر محمودی"
                                  services={["ارایه خدمات نرم افزاری", "آموزش کلیه امور حسابداری و مالیاتی", "صدور امضاء الکترونیک", "صدور گواهینامه های آموزشی"]}/>
                    <BranchesCard title="مشهد"
                                  address="بلوار هنرستان نبش هنرستان پلاک 77"
                                  // map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.3563388866064!2d51.351392072989924!3d35.76492647493776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710ba2cbbbb%3A0xf6f06ac08e9d909!2sasak%20gahrn!5e0!3m2!1sfa!2s!4v1675675421405!5m2!1sfa!2s"
                                  tel="051-38917171"
                                  mail=""
                                  manager=""
                                  services={["", ""]}/>
                    <BranchesCard title="گلپایگان" address="گلپایگان، خیابان آیت الله مدنی (فرمانداری) جنب کوچه 2"
                                  // map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.3563388866064!2d51.351392072989924!3d35.76492647493776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710ba2cbbbb%3A0xf6f06ac08e9d909!2sasak%20gahrn!5e0!3m2!1sfa!2s!4v1675675421405!5m2!1sfa!2s"
                                  tel="037-57470540"  mail=""
                                  manager=""
                                  services={["", ""]}/>
                </div>
            </div>
  )
}

export default BrancheSCompanyDian