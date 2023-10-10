import React from 'react';
import { AppContainer } from './styles/AppStyle';

function App() {
  return (
    <div className="container">
      <h1>
        <img src="/images/cam-logo.svg" alt="Logotipo de uma câmera" />
        WebCam Emotions
      </h1>

      <AppContainer>
        <section className="webcam-container">
          {/* CHAME O SEU COMPONENTE WEBCAM AQUI */}
          {/* CRIE O CANVAS AQUI */}
        </section>
        <section className="emoji-container">
          {/* CHAME O SEU COMPONENTE EMOJI AQUI */}
        </section>
      </AppContainer>
    </div>
  );
}

export default App;
