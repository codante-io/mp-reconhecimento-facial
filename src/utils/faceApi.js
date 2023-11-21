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
      const detections = await faceApi.detectAllFaces(video, new faceApi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
      const resizedDetections = faceApi.resizeResults(detections, displaySize);
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      faceApi.draw.drawDetections(canvas, resizedDetections);
      faceApi.draw.drawFaceLandmarks(canvas, resizedDetections);
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
