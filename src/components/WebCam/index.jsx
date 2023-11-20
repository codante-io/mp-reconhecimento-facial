import React, { useRef } from 'react';

import Webcam from 'react-webcam';
import { WebCamContainer } from '../../styles/WebCamStyle';

function WebCam() {
  const webcamRef = useRef(null);

  return (
    <WebCamContainer>
      <img src="/images/monitor.svg" alt="Moldura do monitor" />
      <Webcam
        audio={false}
        height={450}
        ref={webcamRef}
        class="webcam"
        screenshotFormat="image/jpeg"
        width={600}
      />
    </WebCamContainer>
  );
}

export default WebCam;
