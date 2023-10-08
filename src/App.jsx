import React, { useEffect, useRef, useState } from 'react';
import WebCam from './components/WebCam';
import loadModels from './utils/faceApi';
import Emoji from './components/Emoji';
import './App.css';

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
    <>
      <h1>WebCam Emotional</h1>
      {!isVideoLoaded && <p>Carregando modelos...</p>}
      {isVideoLoaded && !isDetectionComplete && <p>Processando detecção...</p>}

      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
      }}
      >
        <div style={{ position: 'relative' }}>
          <WebCam webcamRef={webcamRef} setIsVideoLoaded={setIsVideoLoaded} />
          <canvas style={{ position: 'absolute', top: 0, left: 0 }} ref={canvasRef} />
        </div>

        {isVideoLoaded && isDetectionComplete && (
          <Emoji message={message} />
        )}
      </section>
    </>
  );
}

export default App;
