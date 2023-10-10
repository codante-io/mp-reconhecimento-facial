import React from 'react';
import Cam from 'react-webcam';
import Swal from 'sweetalert2';
import proptypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { WebCamContainer } from './WebCamStyle';

function WebCam({ webcamRef, setIsVideoLoaded }) {
  const isMobile = useMediaQuery({ maxWidth: 700 });

  const handleErrorVideo = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Não conseguimos acessar sua webcam!',
    });

    setIsVideoLoaded(false);
  };

  return (
    <WebCamContainer>
      {!isMobile && <img src="/images/monitor.svg" alt="Imagem de um monitor" />}
      <Cam
        className="webcam"
        ref={webcamRef}
        onUserMedia={() => setIsVideoLoaded(true)}
        onUserMediaError={handleErrorVideo}
        width={600}
        height={450}
        autoPlay
        muted
      />
    </WebCamContainer>
  );
}

WebCam.propTypes = {
  webcamRef: proptypes.shape({
    current: proptypes.instanceOf(Cam),
  }).isRequired,
  setIsVideoLoaded: proptypes.func.isRequired,
};

export default WebCam;
