import React, {
  useEffect, useRef, useState,
} from 'react';
import WebCam from './components/WebCam';
import loadModels from './utils/faceApi';
import './App.css';

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isDetectionComplete, setIsDetectionComplete] = useState(false);
  const [emotion, setEmotion] = useState('');
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const renderEmoji = () => {
    if (emotion === 'Você parece feliz!') {
      return '😃';
    }
    if (emotion === 'Você parece triste.') {
      return '😢';
    }
    if (emotion === 'Você parece surpreso!') {
      return '😮';
    }
    return '😐';
  };

  const verifyEmotion = (expressions) => {
    if (expressions) {
      let message = '';
      const {
        happy, sad, surprised,
      } = expressions;

      if (surprised > 0.7) {
        message = 'Você parece surpreso!';
      } else if (happy > 0.7) {
        message = 'Você parece feliz!';
      } else if (sad > 0.005) {
        message = 'Você parece triste.';
      } else {
        message = 'Você parece neutro.';
      }

      setEmotion(message);
    }
  };

  useEffect(() => {
    if (isVideoLoaded) {
      try {
        loadModels(webcamRef, canvasRef, verifyEmotion, setIsDetectionComplete);
      } catch (error) {
        console.error('Erro na detecção de rosto:', error);
        setIsDetectionComplete(false);
      }
    }
  }, [isVideoLoaded]);

  return (
    <>
      <h1>WebCam Emotional</h1>
      {!isVideoLoaded && (
        <div className="loading-indicator">Carregando modelos...</div>
      )}
      {isVideoLoaded && !isDetectionComplete && (
        <div className="loading-indicator">Processando detecção...</div>
      )}

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
        <div className="emoji">
          <span style={{ fontSize: '100px' }}>{renderEmoji()}</span>
          <p>{emotion}</p>
        </div>
        )}
      </section>
    </>
  );
}

export default App;
