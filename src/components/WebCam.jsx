import React from 'react';
import Cam from 'react-webcam';
import proptypes from 'prop-types';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

function WebCam({ webcamRef, setIsVideoLoaded }) {
  return (
    <div>
      <Cam
        audio={false}
        videoConstraints={videoConstraints}
        ref={webcamRef}
        onLoadedMetadata={() => setIsVideoLoaded(true)}
        width={1280}
        height={720}
      />
    </div>
  );
}

WebCam.propTypes = {
  webcamRef: proptypes.shape({
    current: proptypes.instanceOf(Cam),
  }).isRequired,
  setIsVideoLoaded: proptypes.func.isRequired,
};

export default WebCam;
