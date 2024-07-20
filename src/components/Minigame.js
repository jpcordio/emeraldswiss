import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import imageGame from "../assets/images/game/question-mark.webp";
import dogPlay from "../assets/images/game/dog-play.webp";
import catPlay from "../assets/images/game/cat-play.webp";

function Minigame() {
  const [gameMessage, setGameMessage] = useState('');
  const [images, setImages] = useState([
    { id: 'imageGame0', dataValue: '0', src: imageGame },
    { id: 'imageGame1', dataValue: '0', src: imageGame },
    { id: 'imageGame2', dataValue: '0', src: imageGame }
  ]);
  

  useEffect(() => {
    // Ensure the images shake for 1.5 seconds on load
    const shakeTimeout = setTimeout(() => {
      stopShake('imageGame0');
      stopShake('imageGame1');
      stopShake('imageGame2');
    }, 1500);

    return () => clearTimeout(shakeTimeout);
  }, []);

  const startShake = (id) => {
    document.getElementById(id).classList.add('shake');
  };

  const stopShake = (id) => {
    document.getElementById(id).classList.remove('shake');
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const play = () => {
    setGameMessage("");
    document.getElementById("gameMessage").innerHTML = "";
    const count = images.length;
    let numbers = [];
    const numToCheck = "1";

    startShake('imageGame0');
    startShake('imageGame1');
    startShake('imageGame2');

    setTimeout(() => {
      stopShake('imageGame0');
      stopShake('imageGame1');
      stopShake('imageGame2');
    }, 700);

    const newImages = images.map(image => ({
      ...image,
      dataValue: '0',
      src: imageGame
    }));

    for (let i = 0; i < count; i++) {
      if (numbers.includes(numToCheck)) {
        numbers.push("2");
      } else {
        numbers.push("1");
      }
    }

    const shuffledNumbers = shuffle(numbers);
    for (let i = 0; i < shuffledNumbers.length; i++) {
      newImages[i].dataValue = shuffledNumbers[i];
    }

    setImages(newImages);
  };

  const setGameImages = (id) => {
    const img = document.getElementById(id);
    const dataValueSelected = img.getAttribute('data-value');

    const newImages = images.map(image => {
      if (image.id === id) {
        if (image.dataValue === "1") {
          image.src = dogPlay;
        } else if (image.dataValue === "2") {
          image.src = catPlay;
        } else {
            document.getElementById("gameMessage").innerHTML = "<div class='alert alert-warning' role='alert'>You need to click on 'Play!' first.</div>";
        }
      }
      return image;

    });

    setImages(newImages);
    checkDog(dataValueSelected);
  };

  const checkDog = (dataValueSelected) => {
    console.clear();
    if (dataValueSelected === "1") {
        document.getElementById("gameMessage").innerHTML = "<div class='alert alert-success' role='alert'>Congratulations! You found the dog!</div>";
    } else if (dataValueSelected === "2") {
        document.getElementById("gameMessage").innerHTML = "<div class='alert alert-danger' role='alert'>You Lose! You found a cat!</div>";
    } else {
        document.getElementById("gameMessage").innerHTML = "<div class='alert alert-warning' role='alert'>You need to click on 'Play!' first.</div>";
    }
  };

  return (
    <div className="container" id="contentPlay">
      <div className="row mt-5">
        <div className="col-12 text-center mt-3 mb-3">
          <h1>Bored? Play with us...</h1>
          <h6>Find the dog!</h6>
        </div>
        {images.map((image, index) => (
          <div key={index} className="col-12 col-lg-4">
            <div className="card mx-auto mb-2 cardgame">
              <img
                className="card-img-top mx-auto"
                id={image.id}
                data-value={image.dataValue}
                src={image.src}
                alt="A Random Image"
                onClick={() => setGameImages(image.id)}
              />
            </div>
          </div>
        ))}
        <div id="gameMessage" className="col-12 text-center mt-3 mb-3">
          {gameMessage}
        </div>
        <div className="col-12 text-center mt-3 mb-3">          
            <Button variant="primary" onClick={play}>Play!</Button>                
        </div>
      </div>
    </div>
  );
}

export default Minigame;