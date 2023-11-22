import React, { useEffect, useRef, useState } from 'react';
import WebCam from './components/WebCam';
import { AppContainer } from './styles/AppStyle';
import loadModels, { faceDetection } from './utils/faceApi';

function App() {
  const canvasRef = useRef(null);
  const webcamRef = useRef(null);
  const [expressionsData, setExpressionsData] = useState({});

  const handleExpressions = (expressions) => {
    setExpressionsData(expressions);
  };

  useEffect(() => {
    loadModels(webcamRef, canvasRef)
      .then(() => {
        faceDetection(webcamRef, canvasRef, handleExpressions);
      })
      .catch((error) => {
        console.log('Erro ao carregar modelos:', error.message);
      });
  }, []);

  const determineEmotion = () => {
    const { happy, sad } = expressionsData;

    if (happy > 0.7) {
      return 'Você parece feliz!';
    } if (sad > 0.1) {
      return 'Você parece triste!';
    }
    return 'Você parece normal.';
  };

  const emotionMessage = determineEmotion();

  return (
    <div className="container">
      <h1>
        <img src="/images/cam-logo.svg" alt="Logotipo de uma câmera" />
        WebCam Emotions
      </h1>

      <AppContainer>
        <section className="webcam-container">
          <WebCam webcamRef={webcamRef} />
          <canvas ref={canvasRef} width="600" height="450" />
        </section>
        <section className="emoji-container">
          <p>{emotionMessage}</p>
          {/* CHAME O SEU COMPONENTE EMOJI AQUI */}
        </section>
      </AppContainer>
    </div>
  );
}

export default App;
