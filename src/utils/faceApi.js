import * as faceApi from 'face-api.js';

export const faceDetection = (webcamRef, canvasRef, verifyEmotion, setIsDetectionComplete) => {
  const { video } = webcamRef.current;
  const canvas = canvasRef.current;
  const displaySize = {
    width: video.width,
    height: video.height,
  };

  faceApi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    try {
    // Usa a "face-api.js" para detectar rostos na imagem da webcam
      const detections = await faceApi
        .detectAllFaces(video, new faceApi.TinyFaceDetectorOptions())
        .withFaceLandmarks() // pontos de referência
        .withFaceExpressions(); // expressões faciais

      // Redimensiona as detecções para corresponder ao tamanho da webcam
      const resizedDetections = faceApi.resizeResults(detections, displaySize);

      // Limpa o conteúdo anterior do canvas
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

      // Desenha as detecções (bordas dos rostos) no canvas
      faceApi.draw.drawDetections(canvas, resizedDetections);
      // Desenha os landmarks (pontos de referência) no canvas
      faceApi.draw.drawFaceLandmarks(canvas, resizedDetections);

      verifyEmotion(detections[0].expressions);
      setIsDetectionComplete(true);
    } catch (error) {
      console.log('Erro na detecção de rosto:', error.message);
      setIsDetectionComplete(false);
    }
  }, 100);
};

const loadModels = (webcamRef, canvasRef, verifyEmotion, setIsDetectionComplete) => {
  Promise.all([
    faceApi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceApi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceApi.nets.faceExpressionNet.loadFromUri('/models'),
  ])
    .then(() => faceDetection(webcamRef, canvasRef, verifyEmotion, setIsDetectionComplete))
    .catch((error) => {
      console.log('Erro ao carregar modelos:', error.message);
    });
};

export default loadModels;
