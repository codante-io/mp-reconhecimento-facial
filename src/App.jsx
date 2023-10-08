import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import * as faceApi from 'face-api.js';
import WebCam from './components/WebCam';
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

  const faceDetection = useCallback(() => {
    const { video } = webcamRef.current;
    const canvas = canvasRef.current;
    const displaySize = {
      width: video.width,
      height: video.height,
    };
    // console.log('displaySize', displaySize);
    faceApi.matchDimensions(canvas, displaySize);

    const detectionInterval = setInterval(async () => {
      try {
        // Usa a "face-api.js" para detectar rostos na imagem da webcam
        const detections = await faceApi
          .detectAllFaces(video, new faceApi.TinyFaceDetectorOptions())
          .withFaceLandmarks() // pontos de referência
          .withFaceDescriptors() // descrição do rosto
          .withFaceExpressions(); // expressões faciais

        // Redimensiona as detecções para corresponder ao tamanho da webcam
        const resizedDetections = faceApi.resizeResults(detections, displaySize);

        // Limpa o conteúdo anterior do canvas
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

        // Desenha as detecções (bordas dos rostos) no canvas
        faceApi.draw.drawDetections(canvas, resizedDetections);
        // Desenha os landmarks (pontos de referência) no canvas
        faceApi.draw.drawFaceLandmarks(canvas, resizedDetections);
        // Desenha as expressões faciais no canvas
        // faceApi.draw.drawFaceExpressions(canvas, resizedDetections);

        verifyEmotion(detections[0].expressions);
        setIsDetectionComplete(true);
      } catch (error) {
        console.error('Erro na detecção de rosto:', error);
        setIsDetectionComplete(false);
      }
    }, 100);

    return () => clearInterval(detectionInterval);
  }, []);

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceApi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceApi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceApi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceApi.nets.faceExpressionNet.loadFromUri('/models'),
      ])
        .then(faceDetection)
        .catch((error) => {
          console.error('Erro ao carregar modelos:', error);
        });
    };

    if (isVideoLoaded) {
      loadModels();
    }
  }, [faceDetection, isVideoLoaded]);

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
