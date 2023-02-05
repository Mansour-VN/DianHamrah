import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='flex flex-col md:flex-row  gap-4 '>

      <div id='About' className='flex flex-col '>
          <h3 className='border-b-4'>دیان‌همراه‌فردا</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
      </div>

      <div id='Link' className='flex flex-col'>
          <h3 className='border-b-4'>سایت‌های مربوطه</h3>
          <p>لورم ایپسوم متن ساختگی با تولید    صنعت  وگرافیک است</p>
          <p>لورم ایپسوم متن ساختگی با تولید    صنعت  وگرافیک است</p>
          <p>لورم ایپسوم متن ساختگی با تولید    صنعت  وگرافیک است</p>
      </div>

      <div id='location social' className='flex flex-col'>
          <h3 className='border-b-4'>دسترسی ما</h3>
          <div className=''>
              Location
          </div>
          <div>
            social Media
          </div>
      </div>

    </div>
  )
}

export default Footer