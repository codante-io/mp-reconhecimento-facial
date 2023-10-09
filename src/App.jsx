import React, { useEffect, useRef, useState } from 'react';
import WebCam from './components/WebCam';
import loadModels from './utils/faceApi';
import Emoji from './components/Emoji';
import { AppContainer } from './styles/AppStyle';

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isDetectionComplete, setIsDetectionComplete] = useState(false);
  const [message, setMessage] = useState('');
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const verifyEmotion = (expressions) => {
    if (expressions) {
      const { happy, sad, surprised } = expressions;
      let newMessage = '';

      if (surprised > 0.7) {
        newMessage = 'Você parece surpreso!';
      } else if (happy > 0.7) {
        newMessage = 'Você parece feliz!';
      } else if (sad > 0.005) {
        newMessage = 'Você parece triste.';
      } else {
        newMessage = 'Você parece neutro.';
      }
      setMessage(newMessage);
    }
  };

  useEffect(() => {
    if (isVideoLoaded) {
      loadModels(webcamRef, canvasRef, verifyEmotion, setIsDetectionComplete);
    }
  }, [isVideoLoaded]);

  return (
    <div className="container">
      <h1>WebCam Emotional</h1>
      {!isVideoLoaded && (
        <p>
          Carregando modelos...
          <img src="/images/spinner.svg" alt="loading icon" />
        </p>
      )}
      {isVideoLoaded && !isDetectionComplete && (
        <p>
          Processando detecção...
          <img src="/images/spinner.svg" alt="loading icon" />
        </p>
      )}

      <AppContainer>
        <section className="webcam-container">
          <WebCam webcamRef={webcamRef} setIsVideoLoaded={setIsVideoLoaded} />
          <canvas ref={canvasRef} />
        </section>
        <section className="emoji-container">
          {isVideoLoaded && isDetectionComplete && <Emoji message={message} />}
        </section>
      </AppContainer>
    </div>
  );
}

export default App;
