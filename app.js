import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = "";
const background = <img className = "background" alt="ocean" src="/images/ocean.jpg" />
const showBackground = true;
const images = []

for (const animal in animals){
  images.push(
              <img 
                onClick = {displayFact}
                key={animal} 
                className='animal' 
                alt={animal} 
                src={animals[animal].image} 
                arialabel={animal} 
                role='button'
              />
              )
}

function displayFact(e){  
  const animalChoice = e.target.alt;
  const animalIndexed = animals[animalChoice];
  const optionIndex = Math.floor(Math.random() * animalIndexed.facts.length);

  const funFact = animalIndexed.facts[optionIndex];
  const factParagraph = document.getElementById('fact');
  factParagraph.innerHTML = funFact;
}

const animalFacts = (<div>
                      <h1>
                        {title == "" ? "Click an animal for a fun fact" : title}
                      </h1>
                      {showBackground && background}
                        <div className = 'animals'>
                          {images}
                        </div>
                        <p id="fact"></p>
                    </div>
                  );

ReactDOM.render(
	animalFacts, 
	document.getElementById('root')
);
