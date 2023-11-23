import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { EmojiContainer } from '../../styles/EmojiStyle';

function Emoji({ expressionsData }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const {
    happy,
    sad,
    angry,
    surprised,
  } = expressionsData;

  useEffect(() => {
    const determineEmotion = () => {
      if (happy > 0.7) {
        setTitle('Você parece feliz!');
        setImage('happy');
      } else if (sad > 0.1) {
        setTitle('Você parece triste!');
        setImage('sad');
      } else if (angry > 0.2) {
        setTitle('Você parece bravo!');
        setImage('angry');
      } else if (surprised > 0.3) {
        setTitle('Você parece surpreso!');
        setImage('surprised');
      } else {
        setTitle('Você parece normal!');
        setImage('normal');
      }
    };
    determineEmotion();
  }, [angry, happy, sad, surprised]);

  return (
    <EmojiContainer>
      {
        Object.keys(expressionsData).length === 0 ? (
          <p>Processando detecção...</p>
        ) : (
          <>
            <div>
              <p>{title}</p>
              <img className="balloon-img" src="/images/balloon.svg" alt="normal balloon" />
            </div>
            <img className="emoji-img" src={`/images/${image}.svg`} alt="Figura de um emoji" />
          </>
        )
      }
    </EmojiContainer>
  );
}

Emoji.propTypes = {
  expressionsData: PropTypes.shape({
    happy: PropTypes.number,
    sad: PropTypes.number,
    angry: PropTypes.number,
    surprised: PropTypes.number,
  }).isRequired,
};

export default Emoji;
