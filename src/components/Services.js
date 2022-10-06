import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <>

    <div className='my-5'>
      <h1 className='text-center'>Our Services</h1>
    </div>
    <div className='container-fluid mb-5'>
      <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row gy-4'>
           <Card imgsrc="/images/web.jpg" title="Web Developer" description="We design breath taking websites that attracts businesses" visit="https://developer.mozilla.org/en-US/docs/Learn" />
           <Card imgsrc="/images/appd.jpg" title="App Developer" description="we have experienced developers  with industry experience" visit='https://developer.android.com/' />
           <Card imgsrc="/images/d.jpg" title="Data Scientist" description="we provide data management optimization and accurate handling" visit="https://en.wikipedia.org/wiki/Data_science" />
           <Card imgsrc="/images/digital.webp" title="Digital Marketing" description="our employees can make your businesses boom, Growth is possible at our firm" visit="https://www.investopedia.com/terms/d/digital-marketing.asp"/>
           <Card imgsrc="/images/SEO.jpg" title="SEO" description="we use an advance technic to list at the top upon search" visit="https://searchengineland.com/guide/what-is-seo" />
           <Card imgsrc="/images/danal.jpg" title="Data Analyst" description="security of your data is guaranteed and we also provide end to end encryption" visit="https://www.simplilearn.com/data-analysis-methods-process-types-article"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
