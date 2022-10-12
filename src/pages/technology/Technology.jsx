import React from 'react'
import './technology.scss'
import techData from './techData.json'

class Technology extends React.Component {
    constructor(props) {
        super(props);
        this.state = {technology: techData['launch vehicle']};
    }

    render() {
        return (
            <section className='tech-container'>
                <h1 className='tech-title'><span className='tech-page-number'>03</span>SPACE LAUNCH 101</h1>
                <div className='tech-main-section'>
                    <div className='tech-left-section'>
                        <div className='tech-slides-numbers'>
                            {Object.keys(techData).map((item, index) => (
                                <span className={`${item === this.state.technology.name ? 'tech-span-active': ''} tech-span`} onClick={() => this.setState({technology: techData[item]})} key={index}>{techData[item].id}</span>
                            ))}
                        </div>
                        <div className='tech-info-container'>
                            <h2 className='terminology-heading'>THE TERMINOLOGY...</h2>
                            <h3 className='technology-name'>{this.state.technology.name}</h3>
                            <p className='technology-description'>{this.state.technology.description}</p>
                        </div>
                    </div>
                    <div className='tech-right-section'>
                        <img src={this.state.technology.imageDesktop} alt='space-vehicle' />
                    </div>
                </div>
          </section>
        )
    }
}

export default Technology