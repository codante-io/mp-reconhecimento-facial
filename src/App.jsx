import React, { useEffect, useRef, useState } from 'react';
import Emoji from './components/Emoji';
import WebCam from './components/WebCam';
import { AppContainer } from './styles/AppStyle';
import loadModels, { faceDetection } from './utils/faceApi';

function App() {
  const canvasRef = useRef(null);
  const webcamRef = useRef(null);
  const [expressionsData, setExpressionsData] = useState({});
  const [isCameraActive, setIsCameraActive] = useState(true);

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

  useEffect(() => {
    const checkCameraStatus = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        setIsCameraActive(true);
      } catch (error) {
        setIsCameraActive(false);
      }
    };

    checkCameraStatus();
  }, []);

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
          {isCameraActive === false ? (
            <p>
              Carregando vídeo...
              <img src="/images/spinner.svg" alt="loading icon" />
            </p>
          ) : (
            <Emoji expressionsData={expressionsData} />
          )}
        </section>
      </AppContainer>
    </div>
  );
}

export default App;
