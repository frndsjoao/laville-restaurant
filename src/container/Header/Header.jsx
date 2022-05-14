/* eslint-disable import/extensions */
// import React from 'react'

import './Header.scss'
import images from '../../constants/images.js'
import { SubHeading } from '../../components'

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1>The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Cras malesuada aliquam purus in laoreet. Sed suscipit, ligula vitae
          commodo euismod, est ante laoreet neque, in placerat dui dui at elit.
          Donec nisl eros, ultrices vitae nulla ac, luctus porttitor metus.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  )
}

export default Header
