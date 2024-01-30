import React from 'react'
import destinationData from './destinationData.json'
import './destination.scss'

class Destination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {planet: destinationData.moon};
    }

    render() {
        return (
            <section className='destination-container'>
                <div className='destination-left-section'>
                    <h1 className='destination-title'><span className='destination-page-number'>01</span>PICK YOUR DESTINATION</h1>
                    <img className='destination-image' src={this.state.planet.image} alt='planet' />
                </div>
                <div className='destination-right-section'>
                    <div className='change-planet-container'>
                        {Object.keys(destinationData).map((key, index)=> (
                            <span onClick={() => this.setState({planet: destinationData[key]})} key={index} className={`${key === this.state.planet.name.toLowerCase() ? 'planet-span-active': ''} planet-span`}>{key}</span>
                        ))}
                    </div>
                    <h1 className='planet-name'>{this.state.planet.name}</h1>
                    <p className='planet-description'>{this.state.planet.description}</p>
                    <div className='planet-characteristics-container'>
                        <div>
                            <h5>AVG. DISTANCEssss</h5>
                            <h6>{this.state.planet.distance}</h6>
                        </div>
                        <div>
                            <h5>EST. TRAVEL TIME</h5>
                            <h6>{this.state.planet.travelTime}</h6>
                        </div>
                    </div>
                </div>
          </section>
        )
    }
}

export default Destination