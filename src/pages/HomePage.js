import React from 'react'
import { Link } from 'react-router-dom'
import fitness from '../assets/images/fitness.jpg'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
    <div className="hero-section">
        <img
            src={fitness}
            alt="Fitness"
            className="hero-image"
        />
        <h1 className="hero-text">Welcome to Our Fitness App</h1>
    </div>
    <h2 className="section-title">Exercises</h2>
    <div className="exercises-grid">
        {/* Exercise Card for Chest */}
        <Link to="/workout/chest" className="exercise-card">
            <h3>Chest</h3>
            <ul>
                <li>Bench Press</li>
                <li>Push-ups</li>
                <li>Chest Fly</li>
            </ul>
        </Link>

        {/* Exercise Card for Shoulder */}
        <Link to="/workout/shoulder" className="exercise-card">
            <h3>Shoulder</h3>
            <ul>
                <li>Shoulder Press</li>
                <li>Lateral Raises</li>
                <li>Front Raises</li>
            </ul>
        </Link>

        {/* Exercise Card for Back */}
        <Link to="/workout/back" className="exercise-card">
            <h3>Back</h3>
            <ul>
                <li>Pull-ups</li>
                <li>Rows</li>
                <li>Deadlift</li>
            </ul>
        </Link>

        {/* Exercise Card for Legs */}
        <Link to="/workout/legs" className="exercise-card">
            <h3>Legs</h3>
            <ul>
                <li>Squats</li>
                <li>Lunges</li>
                <li>Leg Press</li>
            </ul>
        </Link>
    </div>
    
</div>
  )
}

export default HomePage
