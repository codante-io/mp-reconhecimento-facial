import * as faceApi from 'face-api.js';

export const faceDetection = (webcamRef, canvasRef) => {
  const { video } = webcamRef.current;
  const canvas = canvasRef.current;
  const displaySize = {
    width: video.width,
    height: video.height,
  };

  faceApi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    try {

      // USAR A "FACE-API.JS" AQUI!

    } catch (error) {
      console.log('Erro na detecção de rosto:', error.message);
    }
  }, 100);
};

const loadModels = (webcamRef, canvasRef) => {
  Promise.all([
    faceApi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceApi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceApi.nets.faceExpressionNet.loadFromUri('/models'),
  ])
    .then(() => faceDetection(webcamRef, canvasRef))
    .catch((error) => {
      console.log('Erro ao carregar modelos:', error.message);
    });
};

export default loadModels;
