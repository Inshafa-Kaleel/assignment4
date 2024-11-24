import React, { useState } from 'react';
import animals from './AnimalsDb'; // Import the animal data
import './App.css'; // Optional: Add your styles here

const App = () => {
  const [randomAnimal, setRandomAnimal] = useState(''); // Holds the random animal name
  const [result, setResult] = useState(''); // Holds the win/lose result

  // Function to select a random animal name
  const getRandomAnimal = () => {
    const index = Math.floor(Math.random() * animals.length);
    setRandomAnimal(animals[index].name);
    setResult(''); // Reset the result
  };

  // Function to check if the clicked animal matches the displayed name
  const checkAnswer = (clickedAnimal) => {
    if (clickedAnimal === randomAnimal) {
      setResult('Win!');
    } else {
      setResult('Lose!');
    }
  };

  return (
    <div className="game-container">
      <button onClick={getRandomAnimal} className="random-button">
        Show Random Animal
      </button>
      <h1 className="random-animal">{randomAnimal}</h1>
      <div className="animal-grid">
        {animals.map((animal, index) => (
          <img
            key={index}
            src={animal.image} // Make sure image paths are correct
            alt={animal.name}
            onClick={() => checkAnswer(animal.name)}
            className="animal-image"
          />
        ))}
      </div>
      <h2 className="result">{result}</h2>
    </div>
  );
};

export default App;



