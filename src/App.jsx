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

      if (sad > 0.005) {
        newMessage = 'Você parece triste!';
      } else if (surprised > 0.7) {
        newMessage = 'Você parece surpreso!';
      } else if (happy > 0.7) {
        newMessage = 'Você parece feliz!';
      } else {
        newMessage = 'Você parece normal.';
      }
      setMessage(newMessage);
    }
  };

  const loadEmoji = () => {
    if (!isVideoLoaded) {
      return (
        <p>
          Carregando vídeo...
          <img src="/images/spinner.svg" alt="loading icon" />
        </p>
      );
    }
    if (!isDetectionComplete) {
      return (
        <p>
          Processando detecção...
          <img src="/images/spinner.svg" alt="loading icon" />
        </p>
      );
    }
    return <Emoji message={message} />;
  };

  useEffect(() => {
    if (isVideoLoaded) {
      loadModels(webcamRef, canvasRef, verifyEmotion, setIsDetectionComplete);
    }
  }, [isVideoLoaded]);

  return (
    <div className="container">
      <h1>
        <img src="/images/cam-logo.svg" alt="logotipo de uma câmera" />
        WebCam Emotions
      </h1>

      <AppContainer>
        <section className="webcam-container">
          <WebCam webcamRef={webcamRef} setIsVideoLoaded={setIsVideoLoaded} />
          <canvas ref={canvasRef} />
        </section>
        <section className="emoji-container">
          {loadEmoji()}
        </section>
      </AppContainer>
    </div>
  );
}

export default App;
