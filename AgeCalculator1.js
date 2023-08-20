import React, { useState } from 'react';
import './Age.css'; 

function AgeCalculator() {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState('');
    const [darkMode, setDarkMode] = useState(false); // Initialize dark mode to false

    const calculateAge = () => {
        const birthdateDate = new Date(birthdate);
        const currentDate = new Date();

        const diffInMilliseconds = currentDate - birthdateDate;
        const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
        setAge(years);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // Toggle dark mode state
    };

    // Apply dark mode styles conditionally
    const containerClassName = darkMode ? 'age-calculator dark-mode' : 'age-calculator';

    return (
        <div className={containerClassName}>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <h1>Age Calculator</h1>
            <label htmlFor="birthdate">Enter your birthdate:</label>
            <input
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
            />
            <button onClick={calculateAge}>Calculate Age</button>
            {age !== '' && <p>Your age is: {age} years</p>}
        </div>
    );
}

export default AgeCalculator;
