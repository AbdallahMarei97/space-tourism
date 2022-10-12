import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Crew from './pages/crew/Crew';
import Destination from './pages/destination/Destination';
import Home from './pages/home/Home';
import Technology from './pages/technology/Technology';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="*" element={<Navigate to="/home" replace />}/>
        <Route exact path='/home' element={<Home />}/>
        <Route exact path='/destination' element={<Destination />}/>
        <Route exact path='/crew' element={<Crew />}/>
        <Route exact path='/technology' element={<Technology />}/>
      </Routes>
    </div>
  )};
}

export default App;
