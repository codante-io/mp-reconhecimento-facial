import React, { useEffect } from 'react';
import Webcam from 'react-webcam';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { WebCamContainer } from '../../styles/WebCamStyle';

function WebCam({ webcamRef }) {
  useEffect(() => {
    const checkCameraStatus = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Não conseguimos acessar sua webcam!',
        });
      }
    };

    checkCameraStatus();
  }, []);

  return (
    <WebCamContainer>
      <img src="/images/monitor.svg" alt="Moldura do monitor" />
      <Webcam
        audio={false}
        height={450}
        className="webcam"
        screenshotFormat="image/jpeg"
        width={600}
        ref={webcamRef}
      />

    </WebCamContainer>
  );
}

WebCam.propTypes = {
  webcamRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Webcam) }),
  ]),
};

WebCam.defaultProps = {
  webcamRef: null,
};

export default WebCam;
