import React, { useEffect, useState } from 'react';
import { EmojiContainer } from '../../styles/EmojiStyle';

function Emoji() {
  const [isCameraActive, setIsCameraActive] = useState(true);

  useEffect(() => {
    const checkCameraStatus = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        setIsCameraActive(true);
      } catch (error) {
        setIsCameraActive(false);
      }
    };

    checkCameraStatus();
  }, []);

  return (
    <EmojiContainer>
      {
        isCameraActive === false
        && (
          <p>
            Carregando vídeo...
            <img src="/images/spinner.svg" alt="loading icon" />
          </p>
        )
      }
    </EmojiContainer>
  );
}

export default Emoji;
