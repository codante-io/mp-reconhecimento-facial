import React from 'react';
import Cam from 'react-webcam';
import proptypes from 'prop-types';
import { WebCamContainer } from './WebCamStyle';

const videoConstraints = {
  width: 550,
  height: 400,
  facingMode: 'user',
};

function WebCam({ webcamRef, setIsVideoLoaded }) {
  return (
    <WebCamContainer>
      <img src="/images/monitor.svg" alt="" />
      <Cam
        className="webcam"
        audio={false}
        videoConstraints={videoConstraints}
        ref={webcamRef}
        onLoadedMetadata={() => setIsVideoLoaded(true)}
        width={550}
        height={400}
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
