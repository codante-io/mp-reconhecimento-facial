import React, { useEffect, useRef } from 'react';
import WebCam from './components/WebCam';
import { AppContainer } from './styles/AppStyle';
import loadModels from './utils/faceApi';

function App() {
  const canvasRef = useRef(null);
  const webcamRef = useRef(null);

  useEffect(() => {
    loadModels(webcamRef, canvasRef);
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
          {/* CHAME O SEU COMPONENTE EMOJI AQUI */}
        </section>
      </AppContainer>
    </div>
  );
}

export default App;
