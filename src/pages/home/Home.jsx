import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'

class Home extends React.Component {
    render() {
        return (
          <section className='home-container'>
            <div className='home-left-section'>
                <h1 className='home-title-heading'>SO, YOU WANT TO TRAVEL TO</h1>
                <h2 className='home-space-heading'>SPACE</h2>
                <p className='home-info-paragraph'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <Link to='/destination' className='home-right-section'>
                Explore
            </Link>
          </section>
        )
    }
}

export default Home