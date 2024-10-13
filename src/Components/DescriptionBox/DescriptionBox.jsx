import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vitae at commodi quibusdam laudantium eius et, minima officia nostrum quas dicta odio ullam, ducimus error excepturi velit rem, nemo soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aspernatur perspiciatis, excepturi quasi nulla non et, sequi doloribus veniam illum nam neque dolor itaque molestias expedita ducimus vitae at autem!</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tempore ad sed repellendus eum libero, incidunt nesciunt quod dolor culpa sint mollitia soluta, labore unde corporis nobis eaque, non officiis!
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox