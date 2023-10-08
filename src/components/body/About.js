import React, { Component } from 'react'
import ABOUTDISH from '../../data/aboutdish';
import AboutItem from './AboutItem';
import AboutImage from './AboutImage';

class About extends Component {
  state = {
    dishes: ABOUTDISH
  }
  render() {
    const about = this.state.dishes.map(item => {
      return (
        <AboutItem dish={item} />
      )
    })
    const about1 = this.state.dishes.map(item => {
      return (
        <AboutImage dish={item} />
      )
    })
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            {about1}
          </div>
          <div className='col-6'>
            {about}
          </div>
        </div>
      </div>
    )
  }

}

export default About;