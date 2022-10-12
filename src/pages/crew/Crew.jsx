import React from 'react'
import './crew.scss'
import crewData from './crewData.json'

class Crew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {crew: crewData.commander};
    }

    render() {
        return (
        <section className='crew-container'>
            <div className='crew-left-section'>
                <h1 className='crew-page-title'><span className='crew-page-number'>02</span>MEET YOUR CREW</h1>
                <div className='crew-info-container'>
                    <h2 className='crew-mate-title'>{this.state.crew.title}</h2>
                    <h3 className='crew-mate-name'>{this.state.crew.name}</h3>
                    <p className='crew-mate-description'>{this.state.crew.description}</p>
                </div>
                <div className='crew-checkboxes'>
                    {Object.keys(crewData).map((crewMate,index) => (
                        <span className={`${crewMate === this.state.crew.title.toLowerCase() ? 'checkbox-span-active': ''} checkbox-span`} key={index} onClick={() => this.setState({crew: crewData[crewMate]})}></span>
                    ))}
                </div>
            </div>
            <div className='crew-right-section'>
                <img className='crew-mate-image' src={this.state.crew.image} alt='crew-mate' />
            </div>
      </section>
        )
    }
}

export default Crew